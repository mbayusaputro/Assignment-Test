import React, {useEffect, useState, useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {oc} from 'ts-optchain';
import {Header, SubHeader} from './components';
import {Color} from '../../../../constants/Color';
import Content from './screen/Content';
import {Modal, ModalPassenger} from './components';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {actionBookingFlight} from '../../../../reduxs/flight/action';
import {AppState} from '../../../../reduxs/reducers';
import {Props} from './types';
import {LoadingBook, AlertModal, LoginModal} from '../../../../components';
import {
  getIsLogin,
  getToken,
  getProfile,
} from '../../../../reduxs/profile/selector';
import {
  generateStatePassenger,
  generatePayloadPassenger,
} from '../../../../helpers/generatePayload';
import Toast from 'react-native-easy-toast';

const Booking = (props: Props) => {
  // Props
  const {
    navigation: {state, goBack},
    onBookingFlight,
    isLoading,
    token,
    isProfile,
    isLogin,
  } = props;
  const {departure_flight, return_flight, params} = state.params;

  // State
  const [active, setActive] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [otherModal, setOtherModal] = useState(null);
  const [modalForm, setModalForm] = useState('adult');
  const [modalIndex, setModalIndex] = useState(0);
  const [contact, setContact] = useState(null);
  const [adult, setAdult] = useState([]);
  const [child, setChild] = useState([]);
  const [infant, setInfant] = useState([]);
  const [errorMessageServer, setEerrorMessageServer] = useState('');
  const [dataPassenger, setDataPassenger] = useState({
    adult: [],
    child: [],
    infant: [],
  });
  let data = {
    adult: [],
    child: [],
    infant: [],
  };

  // Ref
  const toastRef: any = useRef();

  // Lifecycle
  useEffect(() => {
    generateStatePassenger(params.passenger.adult, 'adult', res => {
      data.adult = res;
      setDataPassenger(data);
    });
    generateStatePassenger(params.passenger.child, 'child', res => {
      data.child = res;
      setDataPassenger(data);
    });
    generateStatePassenger(params.passenger.infant, 'infant', res => {
      data.infant = res;
      setDataPassenger(data);
    });
    if (isLogin) {
      let payload = {
        salutation: oc(isProfile).salutation(''),
        fullname: oc(isProfile).fullname(''),
        email: oc(isProfile).email(''),
        mobileNumber: oc(isProfile).mobileNo(''),
      };
      setContact(payload);
    }
  }, []);

  const toggleSwitch = () => {
    let value = contact === null ? '' : contact.fullname;
    setActive(!active);
    active ? handleInput('blank', '') : handleInput('sameContact', value);
  };

  const openModal = (form: string, index: number) => {
    form !== 'contact'
      ? contact === null
        ? toastRef.current.show('Please enter data contact!')
        : (setVisible(!isVisible), setModalForm(form), setModalIndex(index))
      : (setVisible(!isVisible), setModalForm(form), setModalIndex(index));
  };

  const saveContact = (payload: any) => {
    setContact(payload);
    setVisible(!isVisible);
    setModalForm('adult');
  };

  const generatePayloadPassengers = (field: string, value: string) => {
    generatePayloadPassenger(
      field,
      value,
      dataPassenger,
      contact,
      modalIndex,
      (res: any) => {
        if (field === 'adult') {
          setAdult(res.tempArr);
        } else if (field === 'child') {
          setChild(res.tempArr);
        } else if (field === 'infant') {
          setInfant(res.tempArr);
        }
        setTimeout(() => {
          if (res.validDob) {
            setVisible(false);
            setModalForm('adult');
          } else {
            alert('Date of birth not valid! ' + res.validDob);
          }
        }, 100);
      },
    );
  };

  const doneDob = (value: string) => {
    handleInput('dob', value);
  };

  const handleInput = (type: string, value: string) => {
    if (type === 'fullName') {
      if (dataPassenger[modalForm]) {
        dataPassenger[modalForm][modalIndex].fullName = value;
      }
    } else if (type === 'dob') {
      if (dataPassenger[modalForm]) {
        dataPassenger[modalForm][modalIndex].dateOfBirth = value;
      }
    } else if (type === 'sameContact') {
      if (dataPassenger[modalForm]) {
        dataPassenger[modalForm][modalIndex].fullName = value;
        dataPassenger[modalForm][modalIndex].title =
          contact === null ? 'MR' : contact.salutation;
        generatePayloadPassengers(
          'adult',
          contact === null ? 'MR' : contact.salutation,
        );
      }
    } else if (type === 'blank') {
      if (dataPassenger[modalForm]) {
        dataPassenger[modalForm][modalIndex].fullName = value;
      }
      generatePayloadPassengers(
        'adult',
        contact === null ? 'MR' : contact.salutation,
      );
    }
    setDataPassenger(dataPassenger);
  };

  const handleLoginButton = (profile: any) => {
    const payload = {
      salutation: oc(profile).salutation('MR'),
      fullname: oc(profile).fullname(''),
      email: oc(profile).email(''),
      mobileNumber: `0${oc(profile).mobileNo('9999')}`,
    };
    setContact(payload);
  };

  const isDataValid = (parameter: any, passenger: any) => {
    let adults = parameter.passenger.adult;
    let childs = parameter.passenger.child;
    let infants = parameter.passenger.infant;
    let isAdultValid = true;
    let isChildValid = true;
    let isInfantValid = true;
    if (adults > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < passenger.adult.length; i++) {
        if (passenger.adult[i].fullName === '') {
          isAdultValid = false;
          break;
        }
      }
    }

    if (childs > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < passenger.child.length; i++) {
        if (passenger.child[i].fullName === '') {
          isChildValid = false;
          break;
        }
      }
    }

    if (infants > 0) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < passenger.infant.length; i++) {
        if (passenger.infant[i].fullName === '') {
          isInfantValid = false;
          break;
        }
      }
    }

    const result = {
      adult: adults > 0 ? isAdultValid : null,
      child: childs > 0 ? isChildValid : null,
      infant: infants > 0 ? isInfantValid : null,
    };

    return result;
  };
  const onSubmit = () => {
    setOtherModal(null);
    if (
      oc(contact).fullname('') !== '' &&
      oc(contact).email('') !== '' &&
      oc(contact).mobileNumber('') !== ''
    ) {
      let isSubmited = false;
      let childs = params.passenger.child;
      let infants = params.passenger.infant;
      const validate = isDataValid(params, dataPassenger);
      if (!validate.adult) {
        setOtherModal(500);
      } else {
        isSubmited = true;
        if (childs > 0 && validate.child) {
          isSubmited = true;
        } else if (childs > 0 && !validate.child) {
          isSubmited = false;
        }
        if (infants > 0 && validate.infant) {
          isSubmited = true;
        } else if (infants > 0 && !validate.infant) {
          isSubmited = false;
        }
      }
      if (isSubmited) {
        setTimeout(() => {
          const payload = {
            command: 'BOOKING',
            product: 'FLIGHT',
            data: {
              id: 2,
              partner_trxid: 'PARTNER-001',
              departure_code: params.from.airport_code,
              arrival_code: params.to.airport_code,
              departure_date: params.date,
              return_date: params.date_return,
              adult: params.passenger.adult,
              child: params.passenger.child,
              infant: params.passenger.infant,
              schedule_id: departure_flight.schedule_id,
              return_schedule_id:
                return_flight === null ? '' : return_flight.schedule_id,
              class: 'Y',
              sub_class: 'Y',
              return_class: '',
              contact_detail: {
                salutation: contact.salutation,
                fullname: contact.fullname,
                email: contact.email,
                phone: contact.mobileNumber,
              },
              passengers: adult.concat(child).concat(infant),
            },
          };
          onBookingFlight(payload, token).then((res: any) => {
            if (res.type === 'BOOKING_FLIGHT_SUCCESS') {
              const dataParam = {
                data: res.data.data,
                partner_trxid: res.data.partner_trxid,
                total: res.data.total,
              };
              // isProfile && isProfile.isAgent
              //   ? onNavigate('ETicket')
              // : onNavigate('PaymentMethod', dataParam);
              onNavigate('PaymentMethod', dataParam);
            } else {
              setEerrorMessageServer(res.message);
              setTimeout(() => {
                setOtherModal(404);
              }, 500);
            }
          });
        }, 500);
      }
    } else {
      setTimeout(() => {
        setOtherModal(500);
      }, 1000);
    }
  };

  const onNavigate = (route: string, item?: any) => {
    const {
      navigation: {navigate},
    } = props;
    navigate(route, {
      type: 'flight',
      item,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Toast ref={toastRef} />
      <Header goBack={() => goBack()} title="Booking Summary" />
      <SubHeader />
      <Content
        toggleSwitch={toggleSwitch}
        active={active}
        // Login
        isLogin={props.isLogin}
        onLogin={() => setOtherModal(101)}
        // Contact Detail
        onContactDetail={() => openModal('contact', 0)}
        contactName={contact}
        // Passenger Detail
        dataPassenger={dataPassenger}
        onPassenger={openModal}
        onSubmit={() => setOtherModal(201)}
        // Flight Seleceted
        departureFlight={departure_flight}
        returnFlight={return_flight}
      />
      {modalForm === 'contact' ? (
        <Modal
          dataPassenger={contact}
          isVisible={isVisible}
          onDismiss={() => openModal(modalForm, modalIndex)}
          onSave={saveContact}
        />
      ) : (
        <ModalPassenger
          isVisible={isVisible}
          form={modalForm}
          index={modalIndex}
          dataPassenger={dataPassenger}
          onDismiss={() => openModal('adult', 0)}
          onSave={generatePayloadPassengers}
          handleInput={handleInput}
          onDob={doneDob}
        />
      )}
      <AlertModal
        qna={otherModal === 201}
        isVisible={otherModal === 201}
        title={{id: 'Konfirmasi Pemesanan', en: 'Booking Confirmation'}}
        desc={{
          id: 'Mohon pastikan order Anda telah benar',
          en: 'Please to make sure your order data is valid',
        }}
        btnOk={{id: 'Oke', en: 'Ok'}}
        btnCancel={{id: 'Ganti', en: 'Cancel'}}
        onOk={onSubmit}
        onDismiss={() => setOtherModal(null)}
      />
      <AlertModal
        isVisible={otherModal === 404}
        title={{id: 'Booking Failed', en: 'Booking Failed'}}
        desc={{id: errorMessageServer, en: errorMessageServer}}
        btnOk={{id: 'OK', en: 'OK'}}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onOk={() => setOtherModal(null)}
        onDismiss={() => setOtherModal(null)}
      />
      <AlertModal
        isVisible={otherModal === 500}
        title={{id: 'Booking', en: 'Booking'}}
        desc={{
          id: 'Mohon isi semua data dengan benar',
          en: 'Please enter all the data correctly',
        }}
        btnOk={{id: 'OK', en: 'OK'}}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onOk={() => setOtherModal(null)}
        onDismiss={() => setOtherModal(null)}
      />
      <LoadingBook type="flight" isVisible={isLoading} />
      <LoginModal
        isVisible={otherModal === 101}
        onDismiss={() => setOtherModal(null)}
        callbackLogin={(item: any) => handleLoginButton(item)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightgray,
  },
});

const Default = (props: any) => {
  return <Booking {...props} />;
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.flight.fetchBooking,
  isLogin: getIsLogin(state),
  token: getToken(state),
  isProfile: getProfile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onBookingFlight: (payload: object, token: string) =>
        actionBookingFlight(payload, token),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Default);
