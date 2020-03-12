import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Button} from '../../../../../components';
import {HEIGHT_SCREEN, WIDTH_SCREEN} from '../../../../../constants/Dimension';

const NoEmpty = (props: any) => {
  // Props
  const {
    navigation: {navigate},
    isLogin,
  } = props;

  return (
    <View style={styles.container}>
      <Image
        style={{
          height: verticalScale(230),
          width: scale(80),
          marginBottom: 10,
        }}
        source={require('../../../../../assets/order/order.png')}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: 'NunitoSans-Bold',
          fontSize: 16,
          marginVertical: 10,
        }}>
        No Purchases Found
      </Text>
      <Text style={{fontFamily: 'NunitoSans-Regular'}}>
        You haven’t made any purchases
      </Text>
      <Button
        customStyle={styles.button}
        customTextStyle={{color: '#fff'}}
        type="third"
        isUpperCase={true}
        fullWidth={true}
        content={{id: 'Order Now', en: 'Order Now'}}
        onPress={
          isLogin ? () => navigate('Flight') : () => navigate('FormRegister')
        }
      />
    </View>
  );
};

export default NoEmpty;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT_SCREEN - 300,
  },
  button: {
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#148ea4',
    width: WIDTH_SCREEN / 2,
  },
});
