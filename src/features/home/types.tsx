import {NavigationScreenProp} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
  isLogin: boolean;
  fetchList: boolean;
  token: string;
  isProfile: any;
  actionHolidayList: (token: any) => Promise<void>;
  actionAddon: (data: boolean) => void;
  actionDataHoliday: (data: any) => void;
  actionDataHotel: (data: any) => void;
  actionDataFlight: (data: object) => void;
}
