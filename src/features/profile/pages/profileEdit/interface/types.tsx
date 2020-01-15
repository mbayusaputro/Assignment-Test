import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface Props extends GlobalProps {
  profile: any;
}

export type HeaderProps = {
  goBack: () => void;
};

export type ContentProps = {
  imgProfile: string;
  fullname: string;
  email: string;
  mobilePre: string;
  mobileNo: string;
};
