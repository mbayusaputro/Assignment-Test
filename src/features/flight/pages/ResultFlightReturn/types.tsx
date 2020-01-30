import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface Props extends GlobalProps {
  handleSelectFlight: (payload: object) => void;
  handleDetailFlight: (payload: object) => void;
  result: any;
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
  class: string;
  total_flight: number;
};

export type ResultProps = {
  handleSelectFlight: (payload: object) => void;
  handleDetailFlight: (payload: object) => void;
  dataFlight: Array<object>;
  selected: any;
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
