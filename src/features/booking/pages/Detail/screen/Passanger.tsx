import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';

interface Props {
  data: any;
  baggage: number;
}

const Passenger = (props: Props) => {
  return (
    <View style={{marginTop: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
        Passenger
      </Text>
      <View style={{marginVertical: 20}}>
        {props.data.map((item: any, i: number) => {
          return (
            <View key={i}>
              <View style={styles.wrap}>
                <Text style={styles.bold}>{`${i + 1}. ${item.first_name} ${
                  item.last_name
                }`}</Text>
                <Text style={styles.regular}>{item.type}</Text>
              </View>
              <View style={[styles.wrap, {marginVertical: 10}]}>
                <Text style={[styles.regular, {color: Color.labelgray}]}>
                  Departure Baggage
                </Text>
                <Text style={styles.regular}>{props.baggage} kg</Text>
              </View>
            </View>
          );
        })}
        <View style={styles.linehorizon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bold: {
    fontFamily: 'NunitoSans-Bold',
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
  },
  linehorizon: {
    backgroundColor: Color.labelgray,
    height: 1,
    marginTop: 10,
  },
});

export default Passenger;
