import React from 'react';
import {View, Image, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import Card from './components/Card';
import {dataFlight} from './data';
import {verticalScale, scale} from '../../../../constants/ScaleUtils';
import {Color} from '../../../../constants/Color';
import {WIDTH_SCREEN, HEIGHT_SCREEN} from '../../../../constants/Dimension';
import {Button} from '../../../../components/';
import {moneyFormat} from '../../../../helpers/helpers';

const Active = (props: any) => {
  const {
    navigation: {navigate, state},
  } = props;
  return (
    <View style={{height: HEIGHT_SCREEN - 150}}>
      <ScrollView style={{margin: 20}} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={styles.title}>
            {state.params.detail[0].departure_city_name}
          </Text>
          <Image
            style={styles.img}
            source={require('../../../../assets/icons/icon_header_flight_result.png')}
            resizeMode="contain"
          />
          <Text style={styles.title}>
            {
              state.params.detail[state.params.detail.length - 1]
                .arrival_city_name
            }
          </Text>
        </View>
        <Card data={state.params} />
        <View style={{paddingBottom: 125}}>
          {state.params.detail.map((item: any, i: number) => {
            return (
              <View key={i}>
                <Text
                  style={{
                    fontFamily: 'NunitoSans-Bold',
                    marginVertical: 10,
                  }}>
                  {item.check_in_baggage > 0
                    ? item.operated_by +
                      ` (${item.flight_number})` +
                      ' - Facilities'
                    : item.operated_by +
                      ` (${item.flight_number})` +
                      ' - No Facilities'}
                </Text>
                <View style={{flexDirection: 'row', marginBottom: 5}}>
                  {item.check_in_baggage > 0 ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Image
                        style={{
                          height: verticalScale(20),
                          width: scale(20),
                          tintColor: Color.orange,
                        }}
                        source={require('../../../../assets/icons/bag.png')}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          marginHorizontal: 10,
                          fontFamily: 'NunitoSans-SemiBold',
                        }}>
                        Baggage {item.check_in_baggage} kg
                      </Text>
                    </View>
                  ) : (
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image
                        style={{
                          height: verticalScale(20),
                          width: scale(20),
                        }}
                        source={require('../../../../assets/icons/bag.png')}
                        resizeMode="contain"
                      />
                      <Text style={{marginHorizontal: 10}}>
                        Baggage (buy at booking)
                      </Text>
                    </View>
                  )}
                  {item.has_food !== '0' ? (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        flex: 1,
                      }}>
                      <Image
                        style={{
                          height: verticalScale(20),
                          width: scale(20),
                          tintColor: Color.orange,
                        }}
                        source={require('../../../../assets/icons/meals.png')}
                        resizeMode="contain"
                      />
                      <Text
                        style={{
                          marginHorizontal: 10,
                          fontFamily: 'NunitoSans-SemiBold',
                        }}>
                        Meals
                      </Text>
                    </View>
                  ) : (
                    []
                  )}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: WIDTH_SCREEN,
          bottom: 0,
          backgroundColor: Color.white,
        }}>
        <View style={styles.bot}>
          <Text style={{fontFamily: 'NunitoSans-Bold'}}>Total Payment</Text>
          <Text style={{fontFamily: 'NunitoSans-Bold', color: Color.orange}}>
            Rp {moneyFormat(state.params.price_adult)}
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
    marginTop: 2,
    marginHorizontal: 10,
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
