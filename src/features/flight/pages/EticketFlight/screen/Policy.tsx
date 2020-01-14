import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../../../../constants/Color';

interface Props {
  refundable: () => void;
  reschedule: () => void;
}

const Passenger = (props: Props) => {
  return (
    <View style={{marginTop: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>Policy</Text>
      <View style={{marginVertical: 20}}>
        <View style={styles.wrap}>
          <Text style={styles.bold}>Refundable</Text>
          <TouchableOpacity onPress={props.refundable}>
            <Text style={styles.regular}>INFO</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.wrap, {marginVertical: 10}]}>
          <Text style={styles.bold}>Reschedule Available</Text>
          <TouchableOpacity onPress={props.reschedule}>
            <Text style={styles.regular}>INFO</Text>
          </TouchableOpacity>
        </View>
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
    color: Color.green,
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
    color: Color.oceanBlue,
  },
  linehorizon: {
    backgroundColor: Color.labelgray,
    height: 1,
    marginTop: 10,
  },
});

export default Passenger;
