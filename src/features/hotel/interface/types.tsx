import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface FormHotelProps extends Props {}

export interface ResultHotelProps extends Props {}
