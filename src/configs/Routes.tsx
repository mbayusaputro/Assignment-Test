import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Image} from 'react-native';
import {
  Home,
  Flight,
  Orders,
  Inbox,
  Profile,
  BookingDetail,
  ETicketFlight,
  NoFlight,
  FormRegister,
  ConfirmOTP,
  SubmitRegister,
  DetailFlight,
  FilterFlight,
  ResultFlight,
  ProfileEdit,
  ChangePassword,
  ResultFlightReturn,
  BookingFlight,
  ForgotPassword,
  ForgotPassword2,
  ForgotPassword3,
  MainSetting,
  FlightOrderDetail,
  FormHotel,
  ResultHotel,
  DetailHotel,
  SelectRoomHotel,
  DetailRoomHotel,
  BookingFormHotel,
  PaymentMethod,
  PaymentWeb,
  ETicket,
  HolidayList,
  HolidayDetail,
  HolidayAddon,
  HolidayBooking,
  HolidayItinerary,
  TopUp,
  Withdraw,
  Report,
  ReportResult,
} from '../features';
import {Color} from '../constants/Color';
import {fromBottom, fromRight} from 'react-navigation-transitions';

const handleCustomTransition = ({scenes}) => {
  const prevScene = scenes[scenes.length - 1];

  // Custom transitions go there
  if (
    (prevScene && prevScene.route.routeName === 'DetailFlight') ||
    (prevScene && prevScene.route.routeName === 'ResultFlightReturn')
  ) {
    return fromBottom();
  } else {
    return fromRight();
  }
};

const TABS = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Flight',
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
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          ),
      },
    },
    Order: {
      screen: Orders,
      navigationOptions: {
        tabBarLabel: 'Orders',
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              source={require('../../src/assets/tabs/orders-active.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
            />
          ) : (
            <Image
              source={require('../../src/assets/tabs/orders.png')}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          ),
      },
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: 'Inbox',
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              source={require('../../src/assets/tabs/inbox-active.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
            />
          ) : (
            <Image
              source={require('../../src/assets/tabs/inbox.png')}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
            />
          ),
      },
    },
    Account: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({focused}) =>
          focused ? (
            <Image
              source={require('../../src/assets/tabs/profile-active.png')}
              style={{
                width: 25,
                height: 25,
                resizeMode: 'contain',
              }}
            />
          ) : (
            <Image
              source={require('../../src/assets/tabs/profile.png')}
              style={{width: 25, height: 25, resizeMode: 'contain'}}
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

const STACK = createStackNavigator(
  {
    Tabs: {
      screen: TABS,
      navigationOptions: {
        header: null,
      },
    },
    Flight: {
      screen: Flight,
      navigationOptions: {
        header: null,
      },
    },
    BookingDetail: {
      screen: BookingDetail,
      navigationOptions: {
        header: null,
      },
    },
    ETicketFlight: {
      screen: ETicketFlight,
      navigationOptions: {
        header: null,
      },
    },
    NoFlight: {
      screen: NoFlight,
      navigationOptions: {
        header: null,
      },
    },
    FormRegister: {
      screen: FormRegister,
      navigationOptions: {
        header: null,
      },
    },
    ConfirmOTP: {
      screen: ConfirmOTP,
      navigationOptions: {
        header: null,
      },
    },
    SubmitRegister: {
      screen: SubmitRegister,
      navigationOptions: {
        header: null,
      },
    },
    ProfileEdit: {
      screen: ProfileEdit,
      navigationOptions: {
        header: null,
      },
    },
    ChangePassword: {
      screen: ChangePassword,
      navigationOptions: {
        header: null,
      },
    },
    DetailFlight: {
      screen: DetailFlight,
      navigationOptions: {
        header: null,
      },
    },
    FilterFlight: {
      screen: FilterFlight,
      navigationOptions: {
        header: null,
      },
    },
    ResultFlight: {
      screen: ResultFlight,
      navigationOptions: {
        header: null,
      },
    },
    ResultFlightReturn: {
      screen: ResultFlightReturn,
      navigationOptions: {
        header: null,
      },
    },
    BookingFlight: {
      screen: BookingFlight,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword: {
      screen: ForgotPassword,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword2: {
      screen: ForgotPassword2,
      navigationOptions: {
        header: null,
      },
    },
    ForgotPassword3: {
      screen: ForgotPassword3,
      navigationOptions: {
        header: null,
      },
    },
    MainSetting: {
      screen: MainSetting,
      navigationOptions: {
        header: null,
      },
    },
    FlightOrderDetail: {
      screen: FlightOrderDetail,
      navigationOptions: {
        header: null,
      },
    },
    FormHotel: {
      screen: FormHotel,
      navigationOptions: {
        header: null,
      },
    },
    ResultHotel: {
      screen: ResultHotel,
      navigationOptions: {
        header: null,
      },
    },
    DetailHotel: {
      screen: DetailHotel,
      navigationOptions: {
        header: null,
      },
    },
    SelectRoomHotel: {
      screen: SelectRoomHotel,
      navigationOptions: {
        header: null,
      },
    },
    DetailRoomHotel: {
      screen: DetailRoomHotel,
      navigationOptions: {
        header: null,
      },
    },
    BookingFormHotel: {
      screen: BookingFormHotel,
      navigationOptions: {
        header: null,
      },
    },
    PaymentMethod: {
      screen: PaymentMethod,
      navigationOptions: {
        header: null,
      },
    },
    PaymentWeb: {
      screen: PaymentWeb,
      navigationOptions: {
        header: null,
      },
    },
    ETicket: {
      screen: ETicket,
      navigationOptions: {
        header: null,
      },
    },
    HolidayList: {
      screen: HolidayList,
      navigationOptions: {
        header: null,
      },
    },
    HolidayDetail: {
      screen: HolidayDetail,
      navigationOptions: {
        header: null,
      },
    },
    HolidayAddon: {
      screen: HolidayAddon,
      navigationOptions: {
        header: null,
      },
    },
    HolidayBooking: {
      screen: HolidayBooking,
      navigationOptions: {
        header: null,
      },
    },
    HolidayItinerary: {
      screen: HolidayItinerary,
      navigationOptions: {
        header: null,
      },
    },
    TopUp: {
      screen: TopUp,
      navigationOptions: {
        header: null,
      },
    },
    Withdraw: {
      screen: Withdraw,
      navigationOptions: {
        header: null,
      },
    },
    Report: {
      screen: Report,
      navigationOptions: {
        header: null,
      },
    },
    ReportResult: {
      screen: ReportResult,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Tabs',
    transitionConfig: nav => handleCustomTransition(nav),
  },
);

export default createAppContainer(STACK);
