import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface GlobalProps {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface Props extends GlobalProps {}

export interface DetailProps extends GlobalProps {
  addBasket: (payload: object) => Promise<void>;
}

export interface BasketProps extends GlobalProps {
  delBasket: (payload: Array<object>) => Promise<void>;
  basket: Array<object>;
}
