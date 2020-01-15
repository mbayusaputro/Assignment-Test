import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface SigninProps extends Props {
  isLogin?: boolean;
  setLogin: (data: any) => void;
  actionSignIn: (data: any) => Promise<void>;
  setToken: (data: any) => void;
  logout: () => void;
  actionGetProfile: (token: string) => Promise<void>;
  profile: any;
}

export interface SignInContent {
  fetchSignIn?: boolean;
  validMail: boolean;
  onChangeEmail: () => void;
  onChangePassword: () => void;
  onPressGoogle: () => void;
  onPressFacebook: () => void;
  onForgot: () => void;
  onPressLogin: () => void;
  onPressRegister: () => void;
}

export type MyProfileProps = {
  onLogOut: () => void;
  profile: any;
  goToProfileEdit: () => void;
};
