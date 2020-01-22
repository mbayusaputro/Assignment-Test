import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

import {Color} from '../../../../../constants/Color';
import {Text} from '../../../../../components';

type Props = {
  refundable?: () => void;
  reschedule?: () => void;
};

const Passenger = (props: Props) => {
  return (
    <View style={{marginTop: 10}}>
      <Text
        style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}
        content={{id: 'Kebijakan', en: 'Policy'}}
      />
      <View style={{marginVertical: 20}}>
        <View style={styles.wrap}>
          <Text
            style={styles.bold}
            content={{id: 'Dapat Dikembalikan', en: 'Refundable'}}
          />
          <TouchableOpacity onPress={props.refundable}>
            <Text style={styles.regular}>INFO</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.wrap, {marginVertical: 10}]}>
          <Text
            style={styles.bold}
            content={{
              id: 'Penjadwalan Ulang Tersedia',
              en: 'Reschedule Available',
            }}
          />
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
