import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface HolidayListProps extends GlobalProps {}
