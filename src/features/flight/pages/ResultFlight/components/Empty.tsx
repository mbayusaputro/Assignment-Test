import React from 'react';
import {View, Image, Text} from 'react-native';
import {scale, verticalScale} from '../../../../../constants/ScaleUtils';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import {Button} from '../../../../../components';

const NoFlight = (props: any) => {
  // Props
  const {
    navigation: {goBack},
  } = props;
  return (
    <View>
      <Image
        style={{
          height: verticalScale(300),
          width: scale(WIDTH_SCREEN - 40),
        }}
        source={require('../../../../../assets/flight/empty.png')}
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
          marginHorizontal: 20,
        }}>
        Please search for another date or you may click the Change Search button
        below
      </Text>
      <Button
        customStyle={{
          marginTop: 20,
          marginHorizontal: 20,
          borderRadius: 20,
          backgroundColor: '#148ea4',
        }}
        customTextStyle={{color: '#fff'}}
        type="third"
        isUpperCase={true}
        fullWidth={true}
        content={{id: 'Change Search', en: 'Change Search'}}
        onPress={() => goBack()}
      />
    </View>
  );
};

export default NoFlight;
