import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface OrderProps extends Props {
  fetchOrder: boolean;
  dataFlightOrder: any;
  actionFlightsOrderHistory: (token: string) => Promise<void>;
  isLogin: boolean;
  token: string;
}
