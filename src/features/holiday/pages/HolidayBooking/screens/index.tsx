import React from 'react';
import _ from 'lodash';
import {
  HighSafeArea,
  SubHeader,
  LoadingBook,
  AlertModal,
} from '../../../../../components';
import Content from './Content';
import {HolidayBookingProps as Props} from '../../../interface/types';
import Header from '../../../../hotel/pages/BookingFormHotel/screens/Header';
import {styles, Context, Modal} from '../components';
import {ScrollView} from 'react-native';
import ModalContact from './ModalContact';
import ModalGuest from './ModalGuest';
import {
  generateStatePassenger,
  generatePayloadPassenger,
  generatePayloadTravelers,
  generatePayloadGuest,
  payloadTour,
} from '../../../../../helpers/generatePayload';

export default (props: Props) => {
  // Props
  const {
    navigation: {getParam},
  } = props;
  const dataParam = getParam('item');
  const dataDetail = getParam('detail');

  // State
  const [modal, setModal] = React.useState(null);
  const [contact, setContact] = React.useState(null);
  const [sameContact, setSameContact] = React.useState(false);
  const [guestNum, setGuestNum] = React.useState(0);
  const [typeGuest, setTypeGuest] = React.useState('adult');

  const [dataPassenger, setDataPassenger] = React.useState({
    adult: [],
    child: [],
  });
  const [adult, setAdult] = React.useState([]);
  const [adultHotel, setAdultHotel] = React.useState([]);
  const [adultFlight, setAdultFlight] = React.useState([]);
  const [child, setChild] = React.useState([]);
  const [childFlight, setChildFlight] = React.useState([]);

  React.useEffect(() => {
    checkFirst();
  }, []);

  const checkFirst = () => {
    let data = {adult: [], child: []};
    // Generate Adult
    generateStatePassenger(dataParam.adult, 'adult', (res: any) => {
      data.adult = res;
    });
    // Generate Child
    generateStatePassenger(dataParam.child, 'child', (res: any) => {
      data.child = res;
    });
    setDataPassenger(data);
    console.log('DATA', data);
  };

  // Generate Data Passenger
  const generatePayloadPassengers = (field: string, value: number) => {
    generatePayloadTravelers(
      field,
      value,
      dataPassenger,
      guestNum,
      (res: any) => {
        if (field === 'adult') {
          setAdult(res.tempArr);
        } else if (field === 'child') {
          setChild(res.tempArr);
        }
        setTimeout(() => {
          if (res.validDob) {
            setModal(null);
            setTypeGuest('adutl');
          } else {
            alert('DOB not valid!' + res.validDob);
          }
        }, 500);
      },
    );
    generatePayloadGuest(field, value, dataPassenger, guestNum, (res: any) => {
      if (field === 'adult') {
        setAdultHotel(res);
      }
    });
    generatePayloadPassenger(
      field,
      value,
      dataPassenger,
      contact,
      guestNum,
      (res: any) => {
        if (field === 'adult') {
          setAdultFlight(res.tempArr);
        } else if (field === 'child') {
          setChildFlight(res.tempArr);
        }
        setTimeout(() => {
          if (res.validDob) {
            setModal(null);
          } else {
            alert('DOB not valid!' + res.validDob);
          }
        }, 500);
      },
    );
  };

  const handleInput = (type: string, value?: any) => {
    if (type === 'fullName') {
      if (dataPassenger[typeGuest]) {
        dataPassenger[typeGuest][guestNum].fullName = value;
      }
    } else if (type === 'dob') {
      if (dataPassenger[typeGuest]) {
        dataPassenger[typeGuest][guestNum].dateOfBirth = value;
      }
    } else if (type === 'sameContact') {
      if (dataPassenger[typeGuest]) {
        dataPassenger[typeGuest][guestNum].fullName = value;
        dataPassenger[typeGuest][guestNum].title =
          contact === null ? 'MR' : contact.salutation;
        generatePayloadPassengers(
          'adult',
          contact === null ? 'MR' : contact.salutation,
        );
      }
    } else if (type === 'blank') {
      if (dataPassenger[typeGuest]) {
        dataPassenger[typeGuest][guestNum].fullName = value;
      }
      generatePayloadPassengers('adult', null);
    } else if (type === 'modalform') {
      if (dataPassenger[typeGuest]) {
        dataPassenger[typeGuest][
          typeGuest === 'child' ? guestNum - dataParam.adult : guestNum
        ] = value;
        generatePayloadPassengers(typeGuest, value.title);
      }
    }
    setDataPassenger(dataPassenger);
    console.log(dataPassenger, typeGuest, guestNum, value);
  };

  // When Back is Pressed
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  // Show Modal Guest
  const showModalGuest = (item: any, id?: any, type?: string) => {
    setGuestNum(item);
    setTypeGuest(type);
    setModal(id);
  };

  // Save Item to Contact
  const setDataContact = (item: any) => {
    setContact(item);
    setTimeout(() => setModal(null), 500);
  };

  // Same Guest as Contact for first Guest
  const onChangeSame = (item: boolean) => {
    if (contact !== null) {
      setSameContact(item);
      handleInput('sameContact', contact.fullname);
    }
  };

  // On BOOK
  const onBook = () => {
    const {holiday, flight, hotel, actionHolidayBook} = props;
    setModal(null);
    const request = {
      tour: holiday.detail,
      contact,
      travelers: [...adult, ...child],
      flight,
      passengers: [...adultFlight, ...childFlight],
      hotel,
      guest: adultHotel,
    };
    payloadTour(request, (response: any) => {
      actionHolidayBook(holiday.detail.tour_package, response).then(
        (res: any) => {
          console.log(res);
          console.log(request);
          setTimeout(() => setModal(null), 500);
        },
      );
    });
    setTimeout(() => {
      setModal(201);
    }, 500);
    // setTimeout(() => {
    //   const {actionHolidayBook} = props;
    //   const payload = {
    //     trip_date_id: dataDetail.date.id,
    //     contact_detail: contact,
    //     travelers: dataPassenger,
    //   };
    //   setModal(201);
    //   setTimeout(() => {
    //     actionHolidayBook(dataParam.id, payload).then((res: any) => {
    //       if (res.type === 'HOLIDAYBOOKING_SUCCESS') {
    //         const dataSend = {
    //           data: res.data.data,
    //           partner_trxid: res.data.booking_code,
    //           total: res.data.total,
    //         };
    //         onNavigate('PaymentMethod', dataSend);
    //         setModal(null);
    //       } else {
    //         alert(res.message);
    //         setModal(null);
    //       }
    //     });
    //   }, 500);
    // }, 500);
  };

  // Navigation to Other Route
  const onNavigate = (route: string, item: any) => {
    const {
      navigation: {navigate},
    } = props;
    navigate(route, {
      type: 'tour',
      item,
    });
  };

  // Main Render
  return (
    <HighSafeArea style={styles.container}>
      <Header callback={onBack} />
      <SubHeader style={styles.subHeader} />
      <ScrollView>
        <Context.Provider
          value={{
            // Detail
            dataDetail,
            // Login
            onLogin: null,
            // Contact
            onShowContact: () => setModal(1),
            dataContact: contact,
            // Guest
            sameContact,
            onChangeSame: () => onChangeSame(!sameContact),
            totalGuest: [...dataPassenger.adult, dataPassenger.child].length,
            guestArr: [...dataPassenger.adult, ...dataPassenger.child],
            onShowGuest: (item: any, type: string) =>
              showModalGuest(item, 2, type),
            // Price
            price: dataDetail.price,
            // Book
            onBook: () => setModal(3),
          }}>
          <Content />
        </Context.Provider>
      </ScrollView>

      {/* CONTACT */}
      <Modal
        isVisible={modal === 1}
        onDismiss={() => setModal(null)}
        children={
          <ModalContact
            onClose={() => setModal(null)}
            onSave={(item: any) => setDataContact(item)}
          />
        }
      />

      {/* GUEST */}
      <Modal
        isVisible={modal === 2}
        onDismiss={() => setModal(null)}
        children={
          <ModalGuest
            guest={guestNum}
            type={typeGuest}
            onClose={() => setModal(null)}
            onSaveGuest={(item: any, type: any) =>
              handleInput('modalform', item)
            }
          />
        }
      />

      <LoadingBook type="flight" isVisible={modal === 201} />

      <AlertModal
        qna={true}
        isVisible={modal === 3}
        title={{id: 'Cek Pemesanan', en: 'Booking Check'}}
        desc={{
          id: 'Apakah detailnya benar?',
          en: 'Are the details correct?',
        }}
        btnOk={{
          id: 'Ya, semuanya benar',
          en: 'Yes, everything is correct',
        }}
        btnCancel={{id: 'Ganti', en: 'Change'}}
        onOk={onBook}
        onDismiss={() => setModal(null)}
      />
    </HighSafeArea>
  );
};
