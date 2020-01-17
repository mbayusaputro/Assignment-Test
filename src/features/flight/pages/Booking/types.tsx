import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface Props extends GlobalProps {
  profile: any;
  fetchUpdate: boolean;
  isLogin: boolean;
  token: string;
  actionUpdateProfile: (token: string, payload: object) => Promise<void>;
}

export type HeaderProps = {
  goBack: () => void;
};

export type ContentProps = {
  imgProfile: string;
  salutation: string;
  fullname: string;
  email: string;
  mobilePre: string;
  mobileNo: string;
  address: string;
  birthDate: string;
  onShowModalEdit: () => void;
  onImage: () => void;
};

export type ModalProps = {
  isVisible: any;
  onDismiss: () => void;
  onChangeFullname: (txt: string) => void;
  onChangeSalutation: (txt: any) => void;
  onChangeEmail: (txt: any) => void;
  validMail: boolean;
  onChangeMobileNumber: (txt: any) => void;
  selectedSalutation: string;
  valueFullname: string;
  valueEmail: string;
  valueMobile: string;
};

export type BirthDateProps = {
  isVisible: any;
  onDismiss: () => void;
  onDatesChange: (txt: any) => void;
  date: string;
};
