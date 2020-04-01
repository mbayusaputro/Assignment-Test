import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface PayMethodProps extends GlobalProps {
  fetchPayment: boolean;
  token: string;
  actionPayment: (__: object, token: string) => Promise<void>;
  getProfile: (token: string) => Promise<void>;
}

export interface PayWebProps extends GlobalProps {
  fetchCheck: boolean;
  token: string;
  actionCheckPayment: (id: string, type: string) => Promise<void>;
  onCheckStatus: (id: string, token: string) => Promise<void>;
}

export interface PayWebState {
  isVisible: any;
}

export interface ETicketProps extends GlobalProps {}
