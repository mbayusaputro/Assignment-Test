import React from 'react';
import {View, StyleSheet, Text, ScrollView, Alert} from 'react-native';
import {Color} from '../../../../constants/Color';
import {Button} from '../../../../components/';
import {WIDTH_SCREEN, HEIGHT_SCREEN} from '../../../../constants/Dimension';

const Finished = (props: any) => {
  const {
    navigation: {navigate},
  } = props;
  return (
    <View style={{height: HEIGHT_SCREEN - 125}}>
      <ScrollView style={{margin: 20}}>
        <View style={styles.bot}>
          <Text style={styles.bold}>Reschedule Available</Text>
          <Text style={styles.bold}>Refundable</Text>
        </View>
        <View style={styles.bot}>
          <Text style={styles.regular}>Adult(x1)</Text>
          <Text style={styles.semibold}>Rp1.200.600</Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: Color.labelgray,
            marginVertical: 20,
          }}
        />

        <Text
          style={[styles.bold, {color: Color.superBlack, marginBottom: 10}]}>
          Tax and other fees
        </Text>
        <View style={styles.bot}>
          <Text style={styles.regular}>Service Charge</Text>
          <Text style={[styles.semibold, {color: Color.green}]}>Free</Text>
        </View>
        <View style={styles.bot}>
          <Text style={styles.regular}>Tax</Text>
          <Text style={styles.semibold}>Included</Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          width: WIDTH_SCREEN,
          bottom: 0,
        }}>
        <View style={styles.boto}>
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

export default Finished;

const styles = StyleSheet.create({
  bold: {
    fontFamily: 'NunitoSans-Bold',
    color: Color.green,
  },
  semibold: {
    fontFamily: 'NunitoSans-SemiBold',
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
    color: Color.labelgray,
  },
  bot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 20,
    margin: 20,
    backgroundColor: '#148ea4',
  },
  boto: {
    borderColor: Color.labelgray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
