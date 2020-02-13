import {NavigationScreenProp} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
  isLogin: boolean;
  fetchList: boolean;
  token: string;
  actionHolidayList: (token: any) => Promise<void>;
}
