import React, {ReactElement} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {View, Image} from 'react-native';
import {Text} from '../components';
import {Home, Profile} from '../features';
import {Color} from '../constants/Color';

const TABS = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              source={require('../../src/assets/tabs/home-active.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'center',
              }}
            />
          ) : (
            <Image
              source={require('../../src/assets/tabs/home.png')}
              style={{width: 25, height: 25, resizeMode: 'center'}}
            />
          ),
      },
    },
    Order: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Order',
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              source={require('../../src/assets/tabs/orders-active.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'center',
              }}
            />
          ) : (
            <Image
              source={require('../../src/assets/tabs/orders.png')}
              style={{width: 25, height: 25, resizeMode: 'center'}}
            />
          ),
      },
    },
    Inbox: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              source={require('../../src/assets/tabs/inbox-active.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'center',
              }}
            />
          ) : (
            <Image
              source={require('../../src/assets/tabs/inbox.png')}
              style={{width: 25, height: 25, resizeMode: 'center'}}
            />
          ),
      },
    },
    Account: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              source={require('../../src/assets/tabs/profile-active.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'center',
              }}
            />
          ) : (
            <Image
              source={require('../../src/assets/tabs/profile.png')}
              style={{width: 25, height: 25, resizeMode: 'center'}}
            />
          ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: Color.oceanBlue,
      inactiveTintColor: Color.black,
      labelStyle: {
        letterSpacing: 0.7,
        fontSize: 12,
        fontWeight: '400',
        paddingTop: 5,
      },
      style: {
        backgroundColor: Color.white,
        paddingTop: 5,
      },
      tabStyle: {
        margin: 0,
        padding: 0,
      },
    },
  },
);

const STACK = createStackNavigator({
  Tabs: {
    screen: TABS,
    navigationOptions: {
      header: null,
    },
  },
});

export default createAppContainer(STACK);
