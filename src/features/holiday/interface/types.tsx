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
  actionAddon: (data: boolean) => void;
  actionDataHoliday: (data: any) => void;
}

export interface HolidayAddon extends GlobalProps {
  addon: boolean;
  holiday: any;
  hotel: any;
  flight: any;
  actionAddon: (data: boolean) => void;
  actionDataHoliday: (data: any) => void;
  actionDataHotel: (data: any) => void;
  actionDataFlight: (data: object) => void;
}

export interface HolidayBookingProps extends GlobalProps {
  hotel: any;
  flight: any;
  holiday: any;
  fetchBook: boolean;
  actionHolidayBook: (id: number, payload: object) => Promise<void>;
}
