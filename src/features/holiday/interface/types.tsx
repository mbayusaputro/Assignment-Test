import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface HolidayListProps extends GlobalProps {
  fetchList: boolean;
  isLogin: boolean;
  token: string;
  actionHolidayList: (item: any) => Promise<void>;
}

export interface HolidayDetailProps extends GlobalProps {
  fetchDetail: boolean;
  isLogin: boolean;
  token: string;
  actionHolidayDetail: (token: string, id: number) => Promise<void>;
}

export interface HolidayBookingProps extends GlobalProps {
  fetchBook: boolean;
  actionHolidayBook: (id: number, payload: object) => Promise<void>;
}
