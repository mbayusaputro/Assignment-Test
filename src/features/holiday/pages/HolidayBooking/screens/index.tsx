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
  const [guest, setGuest] = React.useState([]);
  const [guestNum, setGuestNum] = React.useState(null);
  const [typeGuest, setTypeGuest] = React.useState('adult');
  const [salutation, setSalutation] = React.useState('Mr');
  const [fullname, setFullname] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('2007-04-08');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  React.useEffect(() => {
    if (guest.length === 0) {
      const {adult, child} = dataParam;
      onSetDataGuest(adult, child);
    }
  }, []);

  // When Back is Pressed
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  // Set Guest Data
  const onSetDataGuest = (adult: number, child: number) => {
    let arr = [];
    const total = adult + child;
    for (let i = 0; i < total; i++) {
      let data = {
        salutation: 'Mr',
        first_name: '',
        last_name: '',
        birth_date: '1988-04-08',
        email: '',
        phone: '',
        type: i < adult ? 'adult' : 'child',
        nationality: 'ID',
        card_number: '123232323',
        card_issue_date: '2017-01-01',
        card_expire_date: '2022-01-01',
        identity_number: `${i}`,
      };
      arr.push(data);
    }
    setGuest(arr);
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
      const splitName = contact.fullname.split(' ');
      const dataGuest = {
        salutation,
        first_name: item ? splitName[0] : '',
        last_name: item ? splitName[1] : '',
        birth_date: birthDate,
        email: contact.email,
        phone: contact.phoneNumber,
        type: 'adult',
        nationality: 'ID',
        card_number: '123232323',
        card_issue_date: '2017-01-01',
        card_expire_date: '2022-01-01',
        identity_number: `${0}`,
      };
      setItemGuest(dataGuest, 'adult');
    }
  };

  // Save Item by Guest Number
  const setItemGuest = (item: any, type: string) => {
    let arr = guest;
    let index = _.findIndex(arr, {
      identity_number: item.identity_number,
      type: type,
    });
    arr[index >= 0 ? index : arr.length] = item;
    setGuest(arr);
    setTimeout(() => setModal(null), 500);
  };

  // On BOOK
  const onBook = () => {
    setModal(null);
    setTimeout(() => {
      const {
        actionHolidayBook,
        navigation: {navigate},
      } = props;
      const payload = {
        trip_date_id: dataDetail.date.id,
        contact_detail: contact,
        travelers: guest,
      };
      setModal(201);
      setTimeout(() => {
        actionHolidayBook(dataParam.id, payload).then((res: any) => {
          if (res.type === 'HOLIDAYBOOKING_SUCCESS') {
            const dataSend = {
              data: res.data.data,
              partner_trxid: res.data.booking_code,
              total: res.data.total,
            };
            onNavigate('PaymentMethod', dataSend);
            setModal(null);
          } else {
            alert(res.message);
            setModal(null);
          }
        });
      }, 500);
    }, 500);
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
            totalGuest: guest.length,
            guestArr: guest,
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
            onSaveGuest={(item: any, type: any) => setItemGuest(item, type)}
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
