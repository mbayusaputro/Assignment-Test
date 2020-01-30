import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface Props extends GlobalProps {
  actionBookingFlight: (payload: object) => Promise<void>;
}

export type HeaderProps = {
  goBack: () => void;
};

export type ContentProps = {
  onContactDetail: () => void;
  contactName: string;
  dataPassenger: any;
  active: boolean;
  onSubmit?: () => void;
  toggleSwitch: () => void;
  onPassenger: (form: string, index: number) => void;
  departureFlight: any;
  returnFlight: any;
};

export type ModalProps = {
  isVisible: any;
  onDismiss: () => void;
  onSave: (payload: any) => void;
  onDob?: (payload: any) => void;
  form?: string;
  dataPassenger?: any;
  handleInput?: (field: string, value: any) => void;
};

export type BirthDateProps = {
  isVisible: any;
  onDismiss: () => void;
  onDatesChange: (txt: any) => void;
  date: string;
};

export type PassengerProps = {
  toggleSwitch: () => void;
  active: boolean;
  dataPassenger: Array<object>;
  onPress: (form: string, index: number) => void;
};
