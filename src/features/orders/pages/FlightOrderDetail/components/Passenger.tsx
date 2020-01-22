import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from '../../../../../components';
import {Color} from '../../../../../constants/Color';

type Props = {
  data: any;
  baggage: number;
};

const Passenger = (props: Props) => {
  // Function
  const bigFirstText = (text: string) => {
    const result = `${text.substr(0, 1).toUpperCase()}${text
      .substring(1, text.length)
      .toLowerCase()}`;
    return result;
  };

  // Main Render
  return (
    <View style={{marginTop: 10}}>
      <Text
        style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}
        content={{id: 'Penumpang', en: 'Passenger'}}
      />
      <View style={{marginVertical: 20}}>
        {props.data.map((item: any, i: number) => {
          return (
            <View key={i}>
              <View style={styles.wrap}>
                <Text style={styles.bold}>{`${i + 1}. ${bigFirstText(
                  item.salutation,
                )}. ${item.first_name} ${item.last_name}`}</Text>
                <Text style={styles.regular}>
                  {bigFirstText(item.cabin_type)}
                </Text>
              </View>
              <View style={[styles.wrap, {marginVertical: 10}]}>
                <Text
                  style={[styles.regular, {color: Color.labelgray}]}
                  content={{id: 'Barang', en: 'Baggage'}}
                />
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
