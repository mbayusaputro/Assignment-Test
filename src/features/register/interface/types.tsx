import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  actionSignIn: any;
  fetchSignIn: boolean;
  fetchSignUp: boolean;
  fetchCountry: boolean;
  actionGetProfile: any;
  actionSignUp1: any;
  actionSignUp2: any;
  actionSignUp3: any;
  actionListCountry: () => void;
  setToken: (token: string) => void;
  payloadSignUp1: any;
  country: Array<any>;
}

export interface TabProps {
  onChangeMobilePre?: any;
  valueMobilePre?: string;
  onChangeMobile?: any;
  onChangeEmail?: any;
  onRegisterMobile?: any;
  onRegisterEmail?: any;
  onGoogle?: () => void;
  onFacebook?: () => void;
  validEmail?: boolean;
  loading: boolean;
}
