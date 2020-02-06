import React from 'react';
import {ScrollView} from 'react-native';
import dayjs from 'dayjs';
import _ from 'lodash';
import {HighSafeArea, SubHeader} from '../../../../../components';
import Content from './Content';
import Header from './Header';
import {BookingFormHotelProps as Props} from '../../../interface/types';
import {styles, ContentContext, Modal} from '../components';
import ModalContact from './ModalContact';
import ModalGuest from './ModalGuest';

export default (props: Props) => {
  // Props
  const {
    navigation: {getParam},
  } = props;
  const data = getParam('data'); // Data from Selected Room
  const payload = getParam('payload'); // Payload Form Hotel
  const room = getParam('room'); // Room Selected

  // State
  const [modal, setModal] = React.useState(null);
  const [contact, setContact] = React.useState(null);
  const [sameContact, setSameContact] = React.useState(false);
  const [guest, setGuest] = React.useState([]);
  const [guestNum, setGuestNum] = React.useState(null);

  React.useEffect(() => {
    if (guest.length === 0) {
      const totalGuest = payload.occupancies[0].adults;
      setTotalGuest(totalGuest);
    }
  }, []);

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
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
    const payloadBook = {
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
    };
    alert(JSON.stringify(payloadBook));
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
            night: 1,
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
            price: data.price,
            // When Clicked Booking
            onBook,
          }}>
          <Content />
        </ContentContext.Provider>
      </ScrollView>

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
    </HighSafeArea>
  );
};
