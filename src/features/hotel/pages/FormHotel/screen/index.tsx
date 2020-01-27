import React from 'react';
import {InteractionManager} from 'react-native';
import dayjs from 'dayjs';
import {HighSafeArea} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import {FormHotelProps as Props} from '../../../interface/types';
import Content from './Content';
import Header from './Header';
import {Modal} from '../components';
import ModalCheckin from './ModalCheckin';
import ModalCheckout from './ModalCheckout';
import ModalRoom from './ModalRoom';

export default (props: Props) => {
  // State
  const [modal, setModal] = React.useState(null);
  const [destination, setDestination] = React.useState('');
  const [checkIn, setCheckIn] = React.useState(null);
  const [checkOut, setCheckOut] = React.useState(null);
  const [room, setRoom] = React.useState(1);
  const [guest, setGuest] = React.useState(1);

  // LifeCycle
  React.useEffect(() => {
    if (checkIn === null) {
      setCheckIn(dayFormat(new Date()));
    } else if (checkOut === null) {
      setCheckOut(1);
    }
  });

  // Function
  const dayFormat = (day: Date) => {
    const result = dayjs(day)
      .add(1, 'd')
      .format('YYYY-MM-DD');
    return result;
  };

  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };
  const onModal = (id: number) => {
    setModal(id);
  };

  const onCheckDate = (date: any, type: string) => {
    const result = dayjs(date);
    if (type === 'checkin') {
      setCheckIn(result);
    }
    onModal(null);
  };

  const setRoomGuest = (data: any, type: string) => {
    if (type === 'guest') {
      if (room === guest || room > guest) {
        setRoom(data);
        setGuest(data);
      } else {
        setGuest(data);
      }
    } else if (type === 'room') {
      setRoom(data);
    }
  };

  const onSubmit = () => {
    const {
      navigation: {navigate},
    } = props;
    navigate('ResultHotel');
    // const payload = {
    //   destination,
    //   checkIn,
    //   checkOut,
    //   room,
    //   guest,
    // };
    // alert(JSON.stringify(payload));
  };

  // Main Render
  return (
    <HighSafeArea style={{backgroundColor: Color.backWhite}}>
      <Header callback={onBack} />
      <Content
        onDestination={() => onModal(1)}
        onCheckIn={() => onModal(2)}
        onCheckOut={() => onModal(3)}
        onPassenger={() => onModal(4)}
        destinationValue={destination !== '' ? destination : 'Hotels'}
        checkIn={checkIn}
        checkOut={dayjs(checkIn).add(checkOut, 'day')}
        duration={checkOut}
        room={room}
        guest={guest}
        onSubmit={onSubmit}
      />

      <Modal
        isVisible={modal === 2}
        onDismiss={() => onModal(null)}
        children={
          <ModalCheckin
            callback={() => onModal(null)}
            onDateChange={(date: any) => onCheckDate(date, 'checkin')}
            type={'Check-in'}
          />
        }
      />

      <Modal
        isVisible={modal === 3}
        onDismiss={() => onModal(null)}
        children={
          <ModalCheckout
            onDismiss={() => onModal(null)}
            selectedIndex={checkOut}
            onValueChange={(data: any) => setCheckOut(data)}
          />
        }
      />

      <Modal
        isVisible={modal === 4}
        onDismiss={() => onModal(null)}
        children={
          <ModalRoom
            onDismiss={() => onModal(null)}
            selectedRoom={room}
            selectedGuest={guest}
            totalGuest={guest}
            onChangeRoom={(data: any) => setRoomGuest(data, 'room')}
            onChangeGuest={(data: any) => setRoomGuest(data, 'guest')}
          />
        }
      />
    </HighSafeArea>
  );
};
