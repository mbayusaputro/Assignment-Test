import React, {PureComponent} from 'react';
import {BackHandler, ScrollView} from 'react-native';
import {HighSafeArea, Header, SubHeader} from '../../../../../components';
import Content from './Content';
import {HolidayAddon as Props} from '../../../interface/types';
import {styles, Context} from '../components';
import Footer from './Footer';
import {oc} from 'ts-optchain';

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

  // Continue To Booking
  onContinueBook = () => {
    const {
      navigation: {navigate},
      holiday,
    } = this.props;
    navigate('HolidayBooking', holiday);
  };

  onAddOn = (to: string) => {
    const {
      navigation: {navigate},
      holiday,
    } = this.props;
    navigate(to, holiday);
  };

  render() {
    // Props
    const {holiday, hotel, flight} = this.props;
    let priceFlight =
      flight === null
        ? 0
        : flight.departure_flight.price_adult +
          flight.departure_flight.price_child +
          flight.departure_flight.price_infant +
          flight.return_flight.price_adult +
          flight.return_flight.price_child +
          flight.return_flight.price_infant;
    let total = oc(holiday).detail.price(0) + priceFlight + oc(hotel).price(0);
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
              onSelectHotel: () => this.onAddOn('FormHotel'),
              onSelectFlight: () => this.onAddOn('Flight'),
              onClearHotel: this.onClearHotel,
              onClearFlight: this.onClearFlight,
            }}>
            <Content />
          </Context.Provider>
        </ScrollView>
        <Footer price={total} onContinue={this.onContinueBook} />
      </HighSafeArea>
    );
  }
}
