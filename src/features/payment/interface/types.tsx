import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface PayMethodProps extends GlobalProps {
  fetchPayment: boolean;
  actionPaymentMidtrans: (__: object) => Promise<void>;
}

export interface PayWebProps extends GlobalProps {
  fetchCheck: boolean;
  actionCheckPaymentMidtrans: (id: string, type: string) => Promise<void>;
}

export interface PayWebState {
  isVisible: any;
}

export interface ETicketProps extends GlobalProps {}
