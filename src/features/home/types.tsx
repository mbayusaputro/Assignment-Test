import {NavigationScreenProp} from 'react-navigation';
import {sendMessage} from '../../reduxs/chats/action';
import {ChatState} from '../../reduxs/chats/type';

export interface Props {
  navigation: NavigationScreenProp<any, any>;
  isLogin: boolean;
}
