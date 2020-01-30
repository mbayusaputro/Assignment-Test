import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface Props extends GlobalProps {
  handleSelectFlight: (payload: object) => void;
  handleDetailFlight: (payload: object) => void;
  actionGetFlight: (payload: object) => Promise<void>;
  isLoading: boolean;
}

export type HeaderProps = {
  goBack?: () => void;
  from: string;
  to: string;
};

export type SubHeaderProps = {
  date: any;
  adult: number;
  child: number;
  infant: number;
  cabin_class: string;
  total_flight: number;
  isLoading: boolean;
};

export type ResultProps = {
  handleSelectFlight: (payload: object) => void;
  handleDetailFlight: (payload: object) => void;
  dataFlight: Array<object>;
  isLoading: boolean;
};

export type ListProps = {
  departure_time: string;
  arrival_time: string;
  departure: string;
  arrival: string;
  price: number;
  img: string;
  duration: string;
  transit: string;
  onPress: () => void;
  onDetail: () => void;
};
