import React from 'react';
import {InteractionManager} from 'react-native';
import {oc} from 'ts-optchain';
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
import ModalDestination from './ModalDestination';

const defaultDestination = {
  code: 'JAV',
  type: 'city',
  name: 'Jakarta',
};

export default (props: Props) => {
  const {loadingList} = props;

  // State
  const [modal, setModal] = React.useState(null);
  const [destination, setDestination] = React.useState(defaultDestination);
  const [dataDestination, setDataDestination] = React.useState([]);
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

  const onSearch = (text: string) => {
    const {actionListDestinationHotel} = props;
    const payload = {
      query: text,
    };
    actionListDestinationHotel(payload).then((res: any) => {
      if (res.type === 'LIST_DESTINATION_SUCCESS') {
        const result = [...res.data.city, ...res.data.hotels];
        setDataDestination(result);
      }
    });
  };

  const onSelectDestination = (item: any) => {
    setDestination(item);
    setTimeout(() => {
      onModal(null);
    }, 500);
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
    if (destination === null) {
      alert('Please select your hotel destination first');
    } else {
      const payload = {
        searchBy: {
          type: destination.type,
          code: `${destination.code}`,
        },
        stay: {
          checkIn: dayjs(checkIn).format('YYYY-MM-DD'),
          checkOut: dayjs(checkIn)
            .add(checkOut, 'day')
            .format('YYYY-MM-DD'),
        },
        occupancies: [
          {
            rooms: room,
            adults: guest,
            children: 0,
          },
        ],
        stars: 5,
        offset: 1,
        limit: 10,
      };
      // actionSearchHotel(payload);
      navigate('ResultHotel', {payload, checkOut});
    }
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
        destinationValue={destination !== null ? destination.name : 'Hotel'}
        checkIn={checkIn}
        checkOut={dayjs(checkIn).add(checkOut, 'day')}
        duration={checkOut}
        room={room}
        guest={guest}
        onSubmit={onSubmit}
      />

      <Modal
        isVisible={modal === 1}
        onDismiss={() => onModal(null)}
        children={
          <ModalDestination
            onClose={() => onModal(null)}
            onSearch={(event: any) => onSearch(event)}
            onSelect={(item: any) => onSelectDestination(item)}
            data={dataDestination}
            loading={loadingList}
          />
        }
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
