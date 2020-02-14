import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface OrderProps extends Props {
  fetchOrder: boolean;
  actionFlightsOrderHistory: (token: string) => Promise<void>;
  isLogin: boolean;
  token: string;
}

export interface FlightOrderDetailProps extends Props {}
