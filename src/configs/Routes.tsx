import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import List from '../screens/ListProduct';
import Detail from '../screens/DetailProduct';
import Basket from '../screens/Basket';

const STACK = createStackNavigator(
  {
    List: {
      screen: List,
      navigationOptions: {
        headerTitle: 'List Product',
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        headerTitle: 'Detail Product',
      },
    },
    Basket: {
      screen: Basket,
      navigationOptions: {
        headerTitle: 'Keranjang',
      },
    },
  },
  {
    initialRouteName: 'List',
  },
);

export default createAppContainer(STACK);
