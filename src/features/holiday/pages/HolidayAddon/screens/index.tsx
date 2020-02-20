import React, {PureComponent} from 'react';
import {BackHandler, ScrollView} from 'react-native';
import {HighSafeArea, Header, SubHeader} from '../../../../../components';
import Content from './Content';
import {HolidayAddon as Props} from '../../../interface/types';
import {styles, Context} from '../components';
import Footer from './Footer';

export default class HolidayAddon extends PureComponent<Props, any> {
  // Declare Method
  backhandler: any;

  componentDidMount() {
    this.backhandler = BackHandler.addEventListener('hardwareBackPress', () => {
      this.check();
      return true;
    });
  }

  componentWillUnmount() {
    this.backhandler.remove();
  }

  check = () => {
    const {actionAddon} = this.props;
    this.callback();
    setTimeout(() => {
      actionAddon(false);
      this.onClearHoliday();
      this.onClearHotel();
      this.onClearFlight();
    }, 250);
  };

  // Back Button
  callback = () => {
    const {
      navigation: {goBack},
    } = this.props;
    goBack();
  };

  // Navigate Screen
  navigation = (route: string) => {
    const {
      navigation: {navigate},
    } = this.props;
    navigate(route);
  };

  // On Data Holiday
  onClearHoliday = () => {
    const {actionDataHoliday} = this.props;
    actionDataHoliday(null);
  };

  // On Data Hotel
  onClearHotel = () => {
    const {actionDataHotel} = this.props;
    actionDataHotel(null);
  };

  // On Data Flight
  onClearFlight = () => {
    const {actionDataFlight} = this.props;
    actionDataFlight(null);
  };

  render() {
    // Props
    const {holiday, hotel, flight} = this.props;

    // Main Render
    return (
      <HighSafeArea style={styles.container}>
        <Header
          content={{id: 'Paket Liburan', en: 'Holiday Packages'}}
          callback={this.check}
        />
        <ScrollView>
          <SubHeader />
          <Context.Provider
            value={{
              dataDetail: holiday,
              dataHotel: hotel,
              dataFlight: flight,
              onSelectHotel: () => this.navigation('FormHotel'),
              onSelectFlight: () => this.navigation('Flight'),
              onClearHotel: this.onClearHotel,
              onClearFlight: this.onClearFlight,
            }}>
            <Content />
          </Context.Provider>
        </ScrollView>
        <Footer price={3500000} onContinue={() => {}} />
      </HighSafeArea>
    );
  }
}
