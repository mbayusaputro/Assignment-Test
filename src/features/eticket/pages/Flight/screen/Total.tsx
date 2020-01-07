import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';

interface Props {
  data: any;
}

const Total = (props: Props) => {
  const {data} = props;
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
        Total Payment
      </Text>
      <View style={{marginVertical: 20}}>
        <View style={styles.wrap}>
          <Text style={styles.regular}>Baggage Charge</Text>
          <Text style={styles.regular}>0</Text>
        </View>
        <View style={styles.linehorizon} />
        <View style={[styles.wrap, {marginVertical: 10}]}>
          <Text style={styles.bold}>Price You Pay</Text>
          <Text style={[styles.bold, {color: Color.oceanBlue}]}>
            Rp
            {(
              data.flightSelected.price_adult * data.adult +
              data.flightSelected.price_child * data.child +
              data.flightSelected.price_infant * data.infant +
              (!data.flightSelectedReturn
                ? 0
                : data.flightSelectedReturn.price_adult * data.adult) +
              (!data.flightSelectedReturn
                ? 0
                : data.flightSelectedReturn.price_child * data.child) +
              (!data.flightSelectedReturn
                ? 0
                : data.flightSelectedReturn.price_infant * data.infant)
            ).toLocaleString('id-ID')}
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
