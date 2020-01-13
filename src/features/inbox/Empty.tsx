import React from 'react';
import {View, Text, Image, StyleSheet, Alert} from 'react-native';
import {verticalScale, scale} from '../../constants/ScaleUtils';
import {WIDTH_SCREEN, HEIGHT_SCREEN} from '../../constants/Dimension';

const NoEmpty = (props: any) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: verticalScale(WIDTH_SCREEN - 120),
          width: scale(WIDTH_SCREEN - 120),
          marginBottom: 20,
        }}
        source={require('../../assets/inbox/inbox-empty.png')}
        resizeMode="contain"
      />
      <Text
        style={{
          fontFamily: 'NunitoSans-Bold',
          fontSize: 16,
          marginVertical: 10,
        }}>
        No Inbox Found
      </Text>
      <Text style={{fontFamily: 'NunitoSans-Regular'}}>
        You haven’t made any purchases
      </Text>
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
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: '#148ea4',
    width: WIDTH_SCREEN / 2,
  },
});
