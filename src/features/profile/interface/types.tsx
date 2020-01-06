import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface SigninProps extends Props {
  isLogin: boolean;
  setLogin: (data: any) => void;

  // Local Props
  validMail: boolean;
  onChangeEmail: () => void;
  onChangePassword: () => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onForgot: () => void;
  onPressLogin: () => void;
  onPressRegister: () => void;
}
