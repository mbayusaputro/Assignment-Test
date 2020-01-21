import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface MainSettingProps extends Props {
  languange: any;
  actionLanguage: (__: string) => void;
}
