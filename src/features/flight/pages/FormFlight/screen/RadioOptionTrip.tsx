import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../../../../constants/Color';

type Props = {
  OptionTripPress: () => void;
  OptionTrip: string;
};

const RadioOptionTrip = (props: Props) => {
  let {OptionTripPress, OptionTrip} = props;
  return (
    <View style={styles.radioSection}>
      <TouchableOpacity
        onPress={OptionTripPress}
        style={[
          styles.radionOneWay,
          OptionTrip === 'oneway' ? styles.radioSelected : styles.radioDefault,
        ]}>
        <Text
          style={
            OptionTrip === 'oneway'
              ? styles.radioTextSelected
              : styles.radioTextDefault
          }>
          One Way
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={OptionTripPress}
        style={[
          styles.radioReturn,
          OptionTrip === 'return' ? styles.radioSelected : styles.radioDefault,
        ]}>
        <Text
          style={
            OptionTrip === 'return'
              ? styles.radioTextSelected
              : styles.radioTextDefault
          }>
          Return
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  radioSection: {
    flexDirection: 'row',
  },
  radionOneWay: {
    padding: 15,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    marginRight: 5,
  },
  radioReturn: {
    padding: 15,
    borderRadius: 50,
    flex: 1,
    alignItems: 'center',
    marginLeft: 5,
  },
  radioDefault: {
    backgroundColor: Color.mediumgray,
  },
  radioSelected: {
    backgroundColor: Color.tealBlue,
  },
  radioTextDefault: {
    fontFamily: 'NunitoSans-ExtraBold',
  },
  radioTextSelected: {
    color: Color.white,
    fontFamily: 'NunitoSans-ExtraBold',
  },
});

export default RadioOptionTrip;
