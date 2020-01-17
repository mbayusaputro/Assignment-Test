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

export interface ChangePasswordProps extends Props {
  fetchChangePassword: boolean;
  token: string;
  actionChangePasswordUser: (_1: string, _2: object) => Promise<void>;
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
  navigateMenu: (menu: any) => void;
};

export type HeaderProps = {
  callback: () => void;
};

export type ContentChangeProps = {
  onShowModal: () => void;
};

export type ModalChangeProps = {
  isVisible: boolean;
  onDismiss: () => void;
  onChangeCurrentPassword: (text: any) => void;
  onChangeNewPassword: (text: any) => void;
  onChangeConfirmPassword: (text: any) => void;
  onChange: () => void;
  isLoading: boolean;
};
