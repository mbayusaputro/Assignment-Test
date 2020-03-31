import React, {useEffect, useState, useRef} from 'react';
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
import ModalDestination from './ModalDestination';

const defaultDestination = {
  code: 'Jakarta',
  type: 'city',
  name: 'Jakarta',
};

export default (props: Props) => {
  // Props
  const {
    loadingList,
    navigation: {goBack, navigate, state},
    actionListDestinationHotel,
    addon,
  } = props;

  // State
  const [modal, setModal] = useState(null);
  const [destination, setDestination] = useState(defaultDestination);
  const [dataDestination, setDataDestination] = useState([]);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [room, setRoom] = useState(1);
  const [guest, setGuest] = useState(1);

  // Ref
  const toastRef: any = useRef();

  // LifeCycle
  useEffect(() => {
    checkOptionAddOn();
  }, []);

  const checkOptionAddOn = () => {
    const {params} = state;
    if (addon) {
      // setDestination(params.detail.hotel)
      setCheckIn(params.detail.trip_date.start_date);
      setCheckOut(params.detail.day);
      setGuest(params.item.adult);
    } else {
      setCheckIn(dayFormat(new Date()));
      setCheckOut(1);
    }
  };

  // Function
  const dayFormat = (day: Date) => {
    const result = dayjs(day)
      .add(1, 'd')
      .format('YYYY-MM-DD');
    return result;
  };

  const onBack = () => {
    InteractionManager.runAfterInteractions(() => goBack());
  };
  const onModal = (id: number) => {
    setModal(id);
  };

  const onSearch = (text: string) => {
    const payload = {
      query: text,
    };
    if (text.length > 2) {
      actionListDestinationHotel(payload).then((res: any) => {
        res.type === 'LIST_DESTINATION_SUCCESS'
          ? setDataDestination(res.data.city.concat(res.data.hotels))
          : toastRef.current.show(res.message, 1500);
      });
    }
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
        offset: 0,
        limit: 50,
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
            toastRef={toastRef}
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
