import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {oc} from 'ts-optchain';
import {Text} from '../../../../../components';

type Props = {
  data: any;
};

const Total = (props: Props) => {
  const {data} = props;

  const moneyMoon = () => {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      const result = (
        oc(data[i]).flight_info.price_adult(0) *
          oc(data[i]).cabin_info.adult(0) +
        oc(data[i]).flight_info.price_child(0) *
          oc(data[i]).cabin_info.child(0) +
        oc(data[i]).flight_info.price_infant(0) *
          oc(data[i]).cabin_info.infant(0)
      ).toLocaleString('id-ID');
      return result;
    }
  };

  // Main Render
  return (
    <View style={{marginVertical: 10}}>
      <Text
        style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}
        content={{id: 'Total Pembayaran', en: 'Total Payment'}}
      />
      <View style={{marginVertical: 20}}>
        <View style={styles.wrap}>
          <Text
            style={styles.regular}
            content={{id: 'Biaya Bagasi', en: 'Baggage Charge'}}
          />
          <Text style={styles.regular}>0</Text>
        </View>
        <View style={styles.linehorizon} />
        <View style={[styles.wrap, {marginVertical: 10}]}>
          <Text
            style={styles.bold}
            content={{id: 'Harga yang anda bayar', en: 'Price You Pay'}}
          />
          <Text style={[styles.bold, {color: Color.oceanBlue}]}>
            Rp
            {moneyMoon()}
          </Text>
        </View>
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
    fontFamily: 'NunitoSans-SemiBold',
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

export default Total;
