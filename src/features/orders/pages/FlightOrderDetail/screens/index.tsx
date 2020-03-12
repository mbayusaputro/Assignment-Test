import React from 'react';
import {ScrollView} from 'react-native';
import {oc} from 'ts-optchain';
import {HighSafeArea} from '../../../../../components';
import Content from './Content';
import {FlightOrderDetailProps as Props} from '../../../interface/types';
import Header from './Header';
import SubHeader from './SubHeader';
import {styles, ButtonFooter} from '../components';

export default (props: Props) => {
  const {
    navigation: {getParam},
  } = props;

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };
  const itemSelected = getParam('itemSelected');

  // Main Render
  const departure = oc(
    itemSelected,
  ).flight_data[0].flight_info.detail[0].departure_city_name('Not Found');
  const destination = oc(
    itemSelected,
  ).flight_data[0].flight_info.detail[0].arrival_city_name('Not Found');
  return (
    <HighSafeArea style={styles.container}>
      <Header callback={onBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubHeader departure={departure} destination={destination} />
        <Content dataSelected={getParam('itemSelected')} />
        <ButtonFooter />
      </ScrollView>
    </HighSafeArea>
  );
};
