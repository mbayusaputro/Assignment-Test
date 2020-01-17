import React from 'react';
import {ScrollView, SafeAreaView} from 'react-native';
import Filter from './screen/Filter';
import Sort from './screen/Sort';
import Header from '../../components/Header';
import styles from './styles';
import {
  transit,
  airport,
  airline,
  dept_time,
  arri_time,
  facility,
} from './data';

const SortFilter = () => {
  return (
    <SafeAreaView>
      <Header title="Sort & Filter" />
      <ScrollView style={styles.view} showsVerticalScrollIndicator={false}>
        <Sort />
        <Filter name="Filter by" data={transit} />
        <Filter name="Transit Airports" data={airport} />
        <Filter name="Departure Time" data={dept_time} />
        <Filter name="Arrival Time" data={arri_time} />
        <Filter name="Airline" data={airline} />
        <Filter name="Facilities" data={facility} bot={true} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SortFilter;
