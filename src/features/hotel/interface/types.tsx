import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface FormHotelProps extends Props {}

export interface ResultHotelProps extends Props {}

export interface DetailHotelProps extends Props {}

export interface SelectRoomHotelProps extends Props {}

export interface DetailRoomHotelProps extends Props {}

export interface BookingFormHotelProps extends Props {}
