import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface Props extends GlobalProps {
  handleOptionTripPress: () => void;
  handleFieldPress: (payload: any) => void;
  handleSearchFlight: () => void;
  handleFromToModals: (payload: any) => void;
  handleSelect: (payload: object) => void;
  handleSelectDate: (payload: object) => void;
  handleSelectDateReturn: (payload: object) => void;
  handleSelectPassenger: (payload: object) => void;
  handleSelectClass: (payload: object) => void;
  addon: boolean;
}

export type FormProps = {
  OptionTripPress: () => void;
  OptionTrip: string;
  fieldPress: (payload: any) => void;
  searchFlightPress: () => void;
  isSearching: boolean;
  fromPressed: () => void;
  toPressed: () => void;
  fromCity: string;
  fromAirport: string;
  toCity: string;
  toAirport: string;
  date: string;
  dateReturn: string;
  passenger: any;
  cabinClass: string;
};

export type SearchAirportProps = {
  isModalVisible: boolean;
  toggleModal: () => void;
  airport: any;
  handleSelect: (payload: any) => void;
};

export type AirportProps = {
  onPress: () => void;
  city: string;
  airport: string;
  code: string;
};

export type CalendarProps = {
  isModalVisible: boolean;
  toggleModal: () => void;
  onDateChange: (payload: any) => void;
};

export type ClassProps = {
  isModalVisible: boolean;
  toggleModal: () => void;
  onClassChange: (payload: any) => void;
};

export type PassengerProps = {
  isModalVisible: boolean;
  toggleModal: () => void;
  onPassengerChange: (payload: any) => void;
  isPassenger: any;
};
