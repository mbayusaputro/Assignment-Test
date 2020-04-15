import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Imaging} from '../../components';
import {WIDTH_SCREEN} from '../../constants/Dimension';
import {moneyFormat, starLength} from '../../helpers/helpers';

export default (props: any) => {
  // Props
  const {data} = props;

  // Main Render
  return (
    <ScrollView>
      <Imaging
        source={{uri: data.img}}
        resizeMode="center"
        style={{height: WIDTH_SCREEN - 50, width: '100%'}}
      />
      <View style={{marginHorizontal: 20, marginBottom: 70}}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>Rp{moneyFormat(data.price)}</Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginBottom: 5}}>
          <Text style={styles.stock}>Produk dari</Text>
          <Text
            style={[
              styles.official,
              {color: data.official ? '#7A08C9' : '#23900a'},
            ]}>
            {data.official ? 'Official Store' : 'Power Merchant'}
          </Text>
        </View>
        <Text style={styles.stock}>{`Stock tersedia`}</Text>
        <View style={styles.row}>{starLength(data.star)}</View>
      </View>
    </ScrollView>
  );
};

// Style
const styles = StyleSheet.create({
  title: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,
    marginTop: 15,
  },
  price: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: 18,
    color: '#ea6520',
    marginVertical: 5,
  },
  official: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    marginLeft: 7,
  },
  stock: {
    fontFamily: 'NunitoSans-Regular',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 5,
  },
});
