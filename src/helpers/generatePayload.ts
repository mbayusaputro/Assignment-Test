import {getFirstNameLastname} from './helpers';

export const generateStatePassenger = (
  total: number,
  field: string,
  callback: (item: any) => void,
) => {
  // Type for data bellow
  type ArrayData = {
    adult: Array<any>;
    child: Array<any>;
    infant: Array<any>;
  };

  // Generate data passenger
  let data: ArrayData = {
    adult: [],
    child: [],
    infant: [],
  };
  for (let i = 0; i < total; i++) {
    let title = 'MR';
    if (field !== 'adult') {
      title = 'MSTR';
    }
    data[field].push({
      titleIndex: 1,
      title,
      fullName: '',
      dateOfBirth: '',
      type: field,
    });
  }
  // response after all data generated;
  callback(data[field]);
};

export const generatePayloadTravelers = (
  field: string,
  value: string,
  dataPassenger: any,
  index: number,
  callback: (response: any) => void,
) => {
  let validDob = true;
  let tempArr = [];
  dataPassenger[field].map((item: any, i: number) => {
    let tempObj: {
      first_name?: string;
      last_name?: string;
      birth_date?: string;
      salutation?: string;
    } = {};
    let salutation = i === index ? value : item.title;
    if (item.fullName !== '') {
      if (field !== 'adult' && item.dateOfBirth === '') {
        validDob = false;
        alert('Please enter data correctly');
      } else {
        validDob = true;
        let dobb = item.dateOfBirth;
        if (field === 'adult') {
          dobb = '1988-04-04';
        }
        getFirstNameLastname(
          item.fullName,
          (res: {firstName: string; lastName: string}) => {
            (tempObj.first_name = res.firstName),
              (tempObj.last_name = res.lastName);
          },
        );
        (tempObj.birth_date = dobb), (tempObj.salutation = salutation);
        tempArr.push(tempObj);
      }
    }
  });
  const response = {
    validDob,
    tempArr,
  };
  callback(response);
};

export const generatePayloadGuest = (
  field: string,
  value: string,
  dataPassenger: any,
  index: number,
  callback: (response: any) => void,
) => {
  let tempArr = [];
  dataPassenger[field].map((item: any, i: number) => {
    let tempObj: {
      name?: string;
      surname?: string;
      type?: string;
      title?: string;
    } = {};
    let salutation = i === index ? value : item.title;
    if (item.fullName !== '') {
      getFirstNameLastname(item.fullName, (res: any) => {
        (tempObj.name = res.firstName), (tempObj.surname = res.lastName);
      });
      (tempObj.type = 'AD'), (tempObj.title = salutation);
      tempArr.push(tempObj);
    }
  });
  callback(tempArr);
};

export const generatePayloadPassenger = (
  field: string,
  value: string,
  dataPassenger: any,
  contact: any,
  index: number,
  callback?: (response: any) => void,
) => {
  let validDob = true;
  let tempArr = [];
  dataPassenger[field].map(
    (item: {title: any; fullName: string; dateOfBirth: string}, i: number) => {
      let tempObj: any = {};
      let salutation = i === index ? value : item.title;
      if (item.fullName !== '') {
        if (field !== 'adult' && item.dateOfBirth === '') {
          validDob = false;
          alert('Please enter data correctly');
        } else {
          validDob = true;
          let primaryData = false;
          let dobb = item.dateOfBirth;
          if (field === 'adult') {
            if (i === 0) {
              primaryData = true;
            }
            dobb = '1988-04-04';
          }
          getFirstNameLastname(
            item.fullName,
            (res: {firstName: any; lastName: any}) => {
              (tempObj.first_name = res.firstName),
                (tempObj.last_name = res.lastName);
            },
          );
          // item.dateOfBirth
          (tempObj.email = contact.email),
            (tempObj.phone = contact.phone),
            (tempObj.birth_date = dobb),
            (tempObj.primary = primaryData),
            (tempObj.salutation = salutation),
            (tempObj.type = field),
            (tempObj.seat = ''),
            (tempObj.nationality = 'ID'),
            (tempObj.card_number = '123232323'),
            (tempObj.card_issue_date = '2017-01-01'),
            (tempObj.card_expire_date = '2022-01-01'),
            (tempObj.luggage = 1);
          tempArr.push(tempObj);
        }
      }
    },
  );
  const response = {
    validDob,
    tempArr,
  };
  callback(response);
};

export const payloadTour = (req: any, callback: (response: any) => void) => {
  let response = {
    tour: {
      trip_date_id: req.tour.trip_date.id,
      contact_detail: req.contact,
      travelers: req.travelers,
    },
    addons: {
      hotel:
        req.hotel === null
          ? null
          : {
              code: req.hotel.dataHotel.code.toString(),
              checkIn: req.tour.trip_date.start_date,
              checkOut: req.tour.trip_date.end_date,
              holder: {
                salutation: req.contact.salutation,
                name: req.contact.fullname.split(' ')[0],
                surname: req.contact.fullname.split(' ')[1],
                email: req.contact.email,
                phoneNumber: req.contact.phone,
                customerId: 64,
              },
              rooms: [
                {
                  rateKey: req.hotel.room.rates[0].rateKey,
                  paxes: req.guest,
                },
              ],
              totalRooms: req.hotel.payload.occupancies[0].rooms,
              clientReference: 'ORDER-00001',
              remark: '',
              tolerance: '5.00',
              searchId: 'SRCH-0001',
              amount: req.hotel.price * req.tour.day,
            },
      flight:
        req.flight === null
          ? null
          : {
              command: 'BOOKING',
              product: 'FLIGHT',
              data: {
                departure_code: req.flight.params.from.airport_code,
                partner_trxid: 'PARTNER-001',
                arrival_code: req.flight.params.to.airport_code,
                date: req.flight.params.date,
                return_date: req.flight.params.date_return,
                adult: req.flight.params.passenger.adult,
                infant: req.flight.params.passenger.child,
                child: req.flight.params.passenger.infant,
                schedule_id: req.flight.departure_flight.schedule_id,
                return_schedule_id: req.flight.return_flight.schedule_id,
                class: '',
                sub_class: '',
                return_class: '',
                contact_detail: req.contact,
                passengers: req.passengers,
              },
            },
    },
    tourId: req.tour.tour_package,
    propertyId: req.hotel === null ? '' : 71864,
    roomId: req.hotel === null ? '' : 11545762,
    apiKey: '4OGG3-U8RDM-29NXL-KYE6S-MWW15',
  };
  callback(response);
};
