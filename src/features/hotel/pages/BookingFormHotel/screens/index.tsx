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
  // State
  const [modal, setModal] = React.useState(null);
  const [guest, setGuest] = React.useState([]);
  const [guestNum, setGuestNum] = React.useState(null);

  React.useEffect(() => {
    if (guest.length === 0) {
      setTotalGuest(3);
    }
  }, []);

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  const onLogin = () => {
    alert('Login');
  };

  // Set Total Guest
  const setTotalGuest = (item: number) => {
    let arr = [];
    for (let i = 0; i < item; i++) {
      const payload = {
        id: i,
        title: '',
      };
      arr.push(payload);
    }
    setGuest(arr);
  };

  // Show Modal Guest
  const showModalGuest = (item: any, id?: any) => {
    setGuestNum(item);
    setModal(id);
  };

  // Save Item by Guest Number
  const setItemGuest = (item: any) => {
    let arr = guest;
    let index = _.findIndex(arr, ['id', item.id]);
    arr[index >= 0 ? index : arr.length] = item;
    setGuest(arr);
    setTimeout(() => setModal(null), 500);
  };

  // Main Render
  return (
    <HighSafeArea style={styles.container}>
      <Header callback={onBack} />
      <SubHeader style={styles.subHeader} />
      <ScrollView>
        <ContentContext.Provider
          value={{
            guest: 1,
            room: 1,
            night: 7,
            title: 'Luxton Hotel',
            checkin: dayjs(new Date()).format('YYYY-MM-DD'),
            checkout: dayjs(new Date())
              .add(1, 'day')
              .format('YYYY-MM-DD'),
            onLogin,
            onShowContact: () => setModal(1),
            totalGuest: guest.length,
            guestArr: guest,
            onShowGuest: (item: any) => showModalGuest(item, 2),
            price: 3515400,
          }}>
          <Content />
        </ContentContext.Provider>
      </ScrollView>
      <Modal
        isVisible={modal === 1}
        onDismiss={() => setModal(null)}
        children={<ModalContact onClose={() => setModal(null)} />}
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
