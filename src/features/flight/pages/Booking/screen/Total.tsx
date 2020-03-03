import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';

const Total = (props: any) => {
  const {total} = props;
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
        Total Payment
      </Text>
      <View style={styles.card}>
        <View style={styles.row}>
          <Text>Baggage Charge</Text>
          <Text>Rp 0</Text>
        </View>
        <View style={styles.line} />
        <View style={styles.row}>
          <Text style={{fontFamily: 'NunitoSans-SemiBold'}}>Price You Pay</Text>
          <Text style={{fontFamily: 'NunitoSans-Bold', color: Color.orange}}>
            Rp{total.toLocaleString('id-ID')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Total;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: Color.white,
    padding: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  line: {
    backgroundColor: Color.lightgray,
    height: 1,
    marginVertical: 10,
  },
});
