import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import dayjs from 'dayjs';
import _ from 'lodash';
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

export default (props: Props) => {
  // Props
  const {
    navigation: {getParam, goBack, navigate},
    actionBookHotel,
    loadingBook,
    token,
    isProfile,
  } = props;
  const data = getParam('data'); // Data from Selected Room
  const payload = getParam('payload'); // Payload Form Hotel
  const room = getParam('room'); // Room Selected

  let night =
    parseInt(dayjs(payload.stay.checkOut).format('DD')) -
    parseInt(dayjs(payload.stay.checkIn).format('DD'));

  // State
  const [modal, setModal] = useState(null);
  const [contact, setContact] = useState(null);
  const [sameContact, setSameContact] = useState(false);
  const [guest, setGuest] = useState([]);
  const [guestNum, setGuestNum] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (guest.length === 0) {
      const totalGuest = payload.occupancies[0].adults;
      setTotalGuest(totalGuest);
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
        roomId: i + 1,
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
    setGuestNum(item);
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
      const dataGuest = {
        roomId: 1,
        type: 'AD',
        name: item ? `${contact.name} ${contact.surname}` : '',
        surname: item ? contact.name : '',
      };
      setItemGuest(dataGuest);
    }
  };

  // Save Item by Guest Number
  const setItemGuest = (item: any) => {
    let arr = guest;
    let index = _.findIndex(arr, ['roomId', item.roomId]);
    arr[index >= 0 ? index : arr.length] = item;
    setGuest(arr);
    setTimeout(() => setModal(null), 500);
  };

  // On Booking
  const onBook = () => {
    setModal(null);
    setTimeout(() => {
      const payloadBook = {
        code: payload.searchBy.code,
        checkIn: payload.stay.checkIn,
        checkOut: payload.stay.checkOut,
        holder: contact,
        rooms: [
          {
            rateKey: room.rates[0].rateKey,
            paxes: guest,
          },
        ],
        clientReference: 'ORDER-00001',
        remark: '',
        tolerance: '5.00',
        searchId: 'SRCH-0001',
        amount: data.price * night,
      };
      actionBookHotel(payloadBook, token).then((res: any) => {
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
            checkin: dayjs(payload.stay.checkIn).format('YYYY-MM-DD'),
            checkout: dayjs(payload.stay.checkOut).format('YYYY-MM-DD'),
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
            onSaveGuest={(item: any, id: any) => setItemGuest(item)}
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
    </HighSafeArea>
  );
};
