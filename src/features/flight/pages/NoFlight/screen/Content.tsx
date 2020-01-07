import React from 'react';
import {View, Image, Text, Alert} from 'react-native';
import {scale, verticalScale} from '../../../../../constants/ScaleUtils';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import {Button} from '../../../../../components';

const NoFlight = (props: any) => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <View style={{paddingHorizontal: 20}}>
      <Image
        style={{
          height: verticalScale(WIDTH_SCREEN - 40),
          width: scale(WIDTH_SCREEN - 40),
          marginTop: 50,
        }}
        source={require('../../../../../assets/flight/no-flight.png')}
        resizeMode="contain"
      />
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'NunitoSans-Bold',
          fontSize: 16,
        }}>
        No Flight Available
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'NunitoSans-Regular',
          marginVertical: 20,
        }}>
        Please search for another date or you may click the Change Search button
        below
      </Text>
      <Button
        customStyle={{
          marginTop: 20,
          borderRadius: 20,
          backgroundColor: '#148ea4',
        }}
        customTextStyle={{color: '#fff'}}
        type="third"
        isUpperCase={true}
        fullWidth={true}
        content={{id: 'Change Search', en: 'Change Search'}}
        onPress={() => navigate('Tabs')}
      />
    </View>
  );
};

export default NoFlight;
