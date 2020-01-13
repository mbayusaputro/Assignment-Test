import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import Card from './components/Card';
import {dataFlight} from './data';
import {verticalScale, scale} from '../../../../constants/ScaleUtils';
import {Color} from '../../../../constants/Color';
import {WIDTH_SCREEN, HEIGHT_SCREEN} from '../../../../constants/Dimension';
import {Button} from '../../../../components/';

const Active = (props: any) => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <View style={{height: HEIGHT_SCREEN - 125}}>
      <ScrollView style={{margin: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.title}>Jakarta</Text>
          <Image
            style={styles.img}
            source={require('../../../../assets/icons/icon_header_flight_result.png')}
            resizeMode="contain"
          />
          <Text style={styles.title}>Denpasar</Text>
        </View>
        <Card data={dataFlight.flightSelected} />
        <View>
          <Text
            style={{
              fontFamily: 'NunitoSans-Bold',
              marginVertical: 10,
            }}>
            No Facilities
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                height: verticalScale(20),
                width: scale(20),
              }}
              source={require('../../../../assets/icons/bag.png')}
              resizeMode="contain"
            />
            <Text style={{marginHorizontal: 10}}>Baggage (buy at booking)</Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: WIDTH_SCREEN,
          bottom: 0,
        }}>
        <View style={styles.bot}>
          <Text style={{fontFamily: 'NunitoSans-Bold'}}>Total Payment</Text>
          <Text style={{fontFamily: 'NunitoSans-Bold', color: Color.orange}}>
            Rp1.200.600
          </Text>
        </View>
        <Button
          customStyle={styles.button}
          customTextStyle={{color: '#fff'}}
          type="third"
          isUpperCase={true}
          fullWidth={true}
          content={{id: 'Select Flight', en: 'Select Flight'}}
          onPress={() => Alert.alert('Warning', 'Please check your email!')}
        />
      </View>
    </View>
  );
};

export default Active;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'NunitoSans-ExtraBold',
  },
  img: {
    height: verticalScale(16),
    width: scale(40),
    marginTop: 5,
    marginHorizontal: 5,
    tintColor: Color.orange,
  },
  bot: {
    borderColor: Color.labelgray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 20,
    margin: 20,
    backgroundColor: '#148ea4',
  },
});
