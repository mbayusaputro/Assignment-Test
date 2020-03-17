import React, {useRef, useState, useEffect} from 'react';
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
import {oc} from 'ts-optchain';
import Toast from 'react-native-easy-toast';

export default (props: Props) => {
  // Props
  const {
    navigation: {getParam, goBack, navigate},
    holiday,
    flight,
    hotel,
    actionHolidayBook,
    isLoading,
    isLogin,
    isProfile,
  } = props;
  const dataParam = getParam('item');
  const dataDetail = getParam('detail');

  // State
  const [modal, setModal] = useState(null);
  const [contact, setContact] = useState(null);
  const [sameContact, setSameContact] = useState(false);
  const [guestNum, setGuestNum] = useState(0);
  const [typeGuest, setTypeGuest] = useState('adult');

  const [dataPassenger, setDataPassenger] = useState({
    adult: [],
    child: [],
  });
  const [adult, setAdult] = useState([]);
  const [adultHotel, setAdultHotel] = useState([]);
  const [adultFlight, setAdultFlight] = useState([]);
  const [child, setChild] = useState([]);
  const [childFlight, setChildFlight] = useState([]);
  const [message, setMessage] = useState('');

  // Ref
  const toastRef: any = useRef();

  // Lifecycle
  useEffect(() => {
    checkFirst();
    if (isLogin) {
      let payload = {
        salutation: oc(isProfile).salutation(''),
        fullname: oc(isProfile).fullname(''),
        email: oc(isProfile).email(''),
        phoneNumber: oc(isProfile).mobileNo(''),
      };
      setContact(payload);
    }
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
            setTypeGuest('adult');
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
  };

  // When Back is Pressed
  const onBack = () => {
    goBack();
  };

  // Show Modal Guest
  const showModalGuest = (item: any, id?: any, type?: string) => {
    contact === null
      ? toastRef.current.show('Please enter data contact!')
      : (setGuestNum(item), setTypeGuest(type), setModal(id));
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
    setModal(null);
    if (
      oc(contact).fullname('') !== '' &&
      oc(contact).email('') !== '' &&
      oc(contact).mobileNumber('') !== ''
    ) {
      setTimeout(() => {
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
              if (res.type === 'HOLIDAYBOOKING_SUCCESS') {
                const dataSend = {
                  data: res.data,
                  partner_trxid: res.data.partner_trxid,
                  total: res.data.amount,
                  info: {dataDetail, dataParam},
                };
                onNavigate('PaymentMethod', dataSend);
              } else {
                setMessage(res.message);
                setTimeout(() => {
                  setModal(404);
                }, 500);
              }
            },
          );
        });
      }, 500);
    } else {
      setTimeout(() => {
        setModal(500);
      }, 1000);
    }
  };

  // Navigation to Other Route
  const onNavigate = (route: string, item: any) => {
    navigate(route, {
      type: 'tour',
      item,
    });
  };

  // Main Render
  return (
    <HighSafeArea style={styles.container}>
      <Toast ref={toastRef} />
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
            data={contact}
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

      <LoadingBook type="flight" isVisible={isLoading} />

      <AlertModal
        qna={true}
        isVisible={modal === 3}
        title={{id: 'Cek Pemesanan', en: 'Booking Check'}}
        desc={{
          id: 'Apakah detailnya benar?',
          en: 'Are the details correct?',
        }}
        btnOk={{
          id: 'Ya',
          en: 'Yes',
        }}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onOk={onBook}
        onDismiss={() => setModal(null)}
      />
      <AlertModal
        isVisible={modal === 404}
        title={{id: 'Alert', en: 'Alert'}}
        desc={{id: message, en: message}}
        btnOk={{id: 'OK', en: 'OK'}}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onOk={() => setModal(null)}
        onDismiss={() => setModal(null)}
      />
      <AlertModal
        isVisible={modal === 500}
        title={{id: 'Booking', en: 'Booking'}}
        desc={{
          id: 'Mohon isi semua data dengan benar',
          en: 'Please enter all the data correctly',
        }}
        btnOk={{id: 'OK', en: 'OK'}}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onOk={() => setModal(null)}
        onDismiss={() => setModal(null)}
      />
    </HighSafeArea>
  );
};
