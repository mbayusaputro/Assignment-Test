import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {WIDTH_SCREEN, HEIGHT_SCREEN} from '../../../../../constants/Dimension';
import {Button} from '../../../../../components';

const NoEmpty = (props: any) => {
  const {onCreate} = props;
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: verticalScale(HEIGHT_SCREEN / 6),
          width: scale(WIDTH_SCREEN - 150),
          marginBottom: 20,
        }}
        source={require('../../../../../assets/agent/create-packages.png')}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: 'NunitoSans-Bold',
          fontSize: 18,
          marginVertical: 10,
        }}>
        No Packages Found
      </Text>
      <Text style={{fontFamily: 'NunitoSans-Regular', fontSize: 16}}>
        You haven’t made any holiday packages
      </Text>
      <Button
        customStyle={styles.button}
        customTextStyle={{color: '#fff'}}
        type="primary"
        isUpperCase={true}
        fullWidth={true}
        content={{id: 'BUAT PAKET', en: 'CREATE PACKAGES'}}
        onPress={onCreate}
      />
    </View>
  );
};

export default NoEmpty;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT_SCREEN - 240,
  },
  button: {
    marginTop: HEIGHT_SCREEN / 15,
    borderRadius: 20,
    width: WIDTH_SCREEN / 2,
  },
});
