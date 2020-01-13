import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
  actionSignIn: any;
  fetchSignIn: boolean;
  actionGetProfile: any;
  setToken: (token: string) => void;
}

export interface TabProps {
  onChangeMobile?: any;
  onChangeEmail?: any;
  onRegisterMobile?: any;
  onRegisterEmail?: any;
  onGoogle?: () => void;
  onFacebook?: () => void;
  validEmail?: boolean;
}
