import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header, SubHeader} from './components';
import {Color} from '../../../../constants/Color';
import Content from './screen/Content';
import {getFirstNameLastname} from '../../../../helpers/helpers';
import {Modal, ModalPassenger} from './components';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {actionBookingFlight} from '../../../../reduxs/flight/action';
import {AppState} from '../../../../reduxs/reducers';
import {Props} from './types';
import {ModalLoading, AlertModal} from '../../../../components';

const Booking = (props: Props) => {
  const {
    navigation: {state, goBack},
    onBookingFlight,
  } = props;
  const {departure_flight, return_flight, params} = state.params;
  // State
  const [active, setActive] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [otherModal, setOtherModal] = useState(null);
  const [modalForm, setModalForm] = useState('');
  const [modalIndex, setModalIndex] = useState(0);
  const [contact, setContact] = useState(null);
  const [adult, setAdult] = useState([]);
  const [child, setChild] = useState([]);
  const [infant, setInfant] = useState([]);
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

  useEffect(() => {
    generateStatePassenger(1, 'adult');
    generateStatePassenger(0, 'child');
    generateStatePassenger(0, 'infant');
  }, []);

  const generateStatePassenger = (total: number, field: string) => {
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
      });
    }
    setDataPassenger(data);
  };

  const toggleSwitch = () => {
    let value = contact === null ? '' : contact.fullname;
    setActive(!active);
    active ? handleInput('blank', '') : handleInput('sameContact', value);
  };

  const openModal = (form: string, index: number) => {
    setVisible(!isVisible);
    setModalForm(form);
    setModalIndex(index);
  };

  const saveContact = (payload: any) => {
    setContact(payload);
    setVisible(!isVisible);
    setModalForm('adult');
  };

  const generatePayloadPassengers = (field: string) => {
    let validDob: boolean = true;
    let tempArr: any = [];
    dataPassenger[field].map((item: any, index: number) => {
      let tempObj: any = {};
      if (item.fullName !== '') {
        if (field !== 'adult' && item.dateOfBirth === '') {
          validDob = false;
          alert('Please enter data correctly');
        } else {
          validDob = true;
          let primaryData = false;
          let dobb = item.dateOfBirth;
          if (field === 'adult') {
            if (index === 0) {
              primaryData = true;
            }
            dobb = '1988-04-04';
          }
          getFirstNameLastname(item.fullName, (res: any) => {
            (tempObj.first_name = res.firstName),
              (tempObj.last_name = res.lastName);
          });
          // item.dateOfBirth
          (tempObj.email = 'mandatory@abc.xyz'),
            (tempObj.phone = '0855101010101'),
            (tempObj.birth_date = dobb),
            (tempObj.primary = primaryData),
            (tempObj.salutation = item.title),
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
    });
    if (field === 'adult') {
      setAdult(tempArr);
    } else if (field === 'child') {
      setChild(tempArr);
    } else if (field === 'infant') {
      setInfant(tempArr);
    }
    setTimeout(() => {
      if (validDob) {
        setVisible(false);
        setModalForm('adult');
      } else {
        alert('DOB not valid! ' + validDob);
      }
    }, 100);
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
        dataPassenger[modalForm][modalIndex].title = 'MR';
        generatePayloadPassengers('adult');
      }
    } else if (type === 'blank') {
      if (dataPassenger[modalForm]) {
        dataPassenger[modalForm][modalIndex].fullName = value;
      }
      generatePayloadPassengers('adult');
    }
    setDataPassenger(dataPassenger);
  };

  const onSubmit = () => {
    setOtherModal(null);
    setTimeout(() => {
      setOtherModal(999);
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
      onBookingFlight(payload).then((res: any) => {
        setTimeout(() => {
          if (res.type === 'BOOKING_FLIGHT_SUCCESS') {
            const dataParam = {
              data: res.data.data,
              partner_trxid: res.data.partner_trxid,
              total: res.data.total,
            };
            onNavigate('PaymentMethod', dataParam);
            setOtherModal(null);
          } else {
            alert(res.message);
            setOtherModal(201);
          }
        }, 500);
      });
    }, 500);
  };

  const onNavigate = (route: string, item: any) => {
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
      <Header goBack={() => goBack()} title="Booking Summary" />
      <SubHeader />
      <Content
        toggleSwitch={toggleSwitch}
        active={active}
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
          isVisible={isVisible}
          onDismiss={() => openModal(modalForm, modalIndex)}
          onSave={saveContact}
        />
      ) : (
        <ModalPassenger
          isVisible={isVisible}
          form={modalForm}
          dataPassenger={dataPassenger}
          onDismiss={() => openModal('adult', 0)}
          onSave={generatePayloadPassengers}
          handleInput={handleInput}
          onDob={doneDob}
        />
      )}
      <ModalLoading isVisible={otherModal === 999} />
      <AlertModal
        qna={otherModal === 201}
        isVisible={otherModal === 201 || otherModal === 404}
        title={
          otherModal === 201
            ? {id: 'Cek Pemesanan', en: 'Booking Check'}
            : {id: 'Alert', en: 'Alert'}
        }
        desc={
          otherModal === 201
            ? {
                id: 'Apakah detailnya benar?',
                en: 'Are the details correct?',
              }
            : {
                id: 'Terjadi kesalahan',
                en: 'There is an error',
              }
        }
        btnOk={
          otherModal === 201
            ? {
                id: 'Ya, semuanya benar',
                en: 'Yes, everything is correct',
              }
            : {
                id: 'OK',
                en: 'OK',
              }
        }
        btnCancel={
          otherModal === 201
            ? {
                id: 'Ganti',
                en: 'Change',
              }
            : {
                id: 'Batal',
                en: 'Cancel',
              }
        }
        onOk={onSubmit}
        onDismiss={() => setOtherModal(null)}
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
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onBookingFlight: (payload: object) => actionBookingFlight(payload),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);
