import React, {useEffect, useState, useRef} from 'react';
import {ScrollView} from 'react-native';
import {
  HighSafeArea,
  SubHeader,
  AlertModal,
  LoadingBook,
} from '../../../../../components';
import {
  askBookingLang,
  btnBookOk,
  btnBookCancel,
} from '../../../interface/string';
import Content from './Content';
import Header from './Header';
import {BookingFormHotelProps as Props} from '../../../interface/types';
import {styles, ContentContext, Modal} from '../components';
import ModalContact from './ModalContact';
import ModalGuest from './ModalGuest';
import {oc} from 'ts-optchain';
import {getFirstNameLastname} from '../../../../../helpers/helpers';
import Toast from 'react-native-easy-toast';
import moment from 'moment';

export default (props: Props) => {
  // Props
  const {
    navigation: {getParam, goBack, navigate},
    actionBookHotel,
    loadingBook,
    token,
    isProfile,
    isLogin,
  } = props;
  const data = getParam('data'); // Data from Selected Room
  const payload = getParam('payload'); // Payload Form Hotel
  const room = getParam('room'); // Room Selected
  const dataHotel = getParam('dataHotel'); // Room Selected

  let night = moment(payload.stay.checkOut).diff(
    moment(payload.stay.checkIn),
    'days',
  );

  // State
  const [modal, setModal] = useState(null);
  const [contact, setContact] = useState(null);
  const [sameContact, setSameContact] = useState(false);
  const [guest, setGuest] = useState([]);
  const [guestNum, setGuestNum] = useState(null);
  const [message, setMessage] = useState('');

  // Ref
  const toastRef: any = useRef();

  // Lifecycle
  useEffect(() => {
    if (guest.length === 0) {
      const totalGuest = payload.occupancies[0].adults;
      setTotalGuest(totalGuest);
    }
    if (isLogin) {
      let payload = {
        salutation: oc(isProfile).salutation(''),
        name: '',
        surname: '',
        email: oc(isProfile).email(''),
        phoneNumber: oc(isProfile).mobileNo(''),
        customerId: oc(isProfile).id(0),
      };
      getFirstNameLastname(oc(isProfile).fullname(''), (res: any) => {
        (payload.name = res.firstName), (payload.surname = res.lastName);
      });
      setContact(payload);
    }
  }, []);

  // Function
  const onBack = () => {
    goBack();
  };

  // Set Total Guest
  const setTotalGuest = (item: number) => {
    let arr = [];
    for (let i = 0; i < item; i++) {
      const dataGuest = {
        title: 'MR',
        // roomId: i + 1,
        type: 'AD',
        name: '',
        surname: '',
      };
      arr.push(dataGuest);
    }
    setGuest(arr);
  };

  // Show Modal Guest
  const showModalGuest = (item: any, id?: any) => {
    contact === null
      ? toastRef.current.show('Please enter data contact!')
      : (setGuestNum(item), setModal(id));
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
      const dataGuest = {
        title: contact.salutation,
        // roomId: 1,
        type: 'AD',
        name: item ? `${contact.name} ${contact.surname}` : '',
        surname: item ? contact.name : '',
      };
      setItemGuest(dataGuest, 0);
    }
  };

  // Save Item by Guest Number
  const setItemGuest = (item: any, id: number) => {
    let arr = guest;
    arr[id] = item;
    setGuest(arr);
    setTimeout(() => setModal(null), 500);
  };

  // On Booking
  const onBook = () => {
    setModal(null);
    if (
      (contact && contact.name) !== '' &&
      oc(contact).email('') !== '' &&
      oc(contact).phoneNumber('') !== ''
    ) {
      setTimeout(() => {
        const payloadBook = {
          code: dataHotel.code.toString(),
          checkIn: payload.stay.checkIn,
          checkOut: payload.stay.checkOut,
          holder: contact,
          rooms: [
            {
              rateKey: room.rates[0].rateKey,
              paxes: guest,
            },
          ],
          totalRooms: payload.occupancies[0].rooms,
          clientReference: 'ORDER-00001',
          remark: '',
          tolerance: '5.00',
          searchId: 'SRCH-0001',
          amount: data.price * night,
        };
        actionBookHotel(payloadBook).then((res: any) => {
          if (res.type === 'BOOK_HOTEL_SUCCESS') {
            const dataParam = {
              data: res.data.data,
              partner_trxid: res.data.bookingCode,
              total: res.data.amount,
            };
            onNavigate(dataParam);
          } else {
            setMessage(res.message);
            setTimeout(() => {
              setModal(404);
            }, 500);
          }
        });
      }, 500);
    } else {
      setTimeout(() => {
        setModal(500);
      }, 1000);
    }
  };

  const onNavigate = (item: object) => {
    navigate('PaymentMethod', {
      type: 'hotel',
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
        <ContentContext.Provider
          value={{
            // Detail Hotel
            guest: payload.occupancies[0].adults,
            room: payload.occupancies[0].rooms,
            night: night,
            title: data.title,
            checkin: moment(payload.stay.checkIn).format('YYYY-MM-DD'),
            checkout: moment(payload.stay.checkOut).format('YYYY-MM-DD'),
            // Login
            onLogin: null,
            isLogin: isLogin,
            // Contact
            onShowContact: () => setModal(1),
            dataContact: contact,
            // Guest
            sameContact,
            onChangeSame: () => onChangeSame(!sameContact),
            totalGuest: guest.length,
            guestArr: guest,
            onShowGuest: (item: any) => showModalGuest(item, 2),
            // Price
            price: data.price * night,
            // When Clicked Booking
            onBook: () => setModal(999),
          }}>
          <Content />
        </ContentContext.Provider>
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
            costumerID={isProfile !== null ? isProfile.id : null}
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
            onClose={() => setModal(null)}
            onSaveGuest={(item: any, id: any) => setItemGuest(item, id)}
            isFullName={oc(guest[guestNum - 1]).name('')}
          />
        }
      />

      {/* PRICE */}

      {/* OTHER MODAL */}
      <LoadingBook type="flight" isVisible={loadingBook} />
      <AlertModal
        qna={true}
        isVisible={modal === 999}
        title={{id: 'Cek Pemesanan', en: 'Booking Check'}}
        desc={askBookingLang}
        btnOk={btnBookOk}
        btnCancel={btnBookCancel}
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
