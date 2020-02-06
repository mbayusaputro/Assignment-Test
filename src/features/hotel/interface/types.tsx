import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface FormHotelProps extends Props {
  loadingList: boolean;
  loadingSearch: boolean;
  actionListDestinationHotel: (payload: object) => Promise<void>;
  actionSearchHotel: (payload: object) => Promise<void>;
}

export interface ResultHotelProps extends Props {
  loadingSearch: boolean;
  pathAsset: string;
  actionSearchHotel: (payload: object) => Promise<void>;
}

export interface DetailHotelProps extends Props {
  pathAsset: string;
}

export interface SelectRoomHotelProps extends Props {
  pathAsset: string;
}

export interface DetailRoomHotelProps extends Props {}

export interface BookingFormHotelProps extends Props {}
