import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {
  MEDIUM_FONT_SIZE,
  HEADER_FONT_SIZE,
} from '../../../../../constants/TextSize';

const FieldFromTo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <View>
          <Text style={styles.label}>From</Text>
        </View>
        <View>
          <Text style={styles.title}>Jakarta</Text>
        </View>
        <View>
          <Text style={styles.title}>(CGK)</Text>
        </View>
      </View>
      <View style={styles.middleSection}>
        <Text>Middle</Text>
      </View>
      <View style={styles.rightSection}>
        <View>
          <Text style={styles.label}>To</Text>
        </View>
        <View>
          <Text style={styles.title}>Denpasar</Text>
        </View>
        <View>
          <Text style={styles.title}>(DPS)</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: Color.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 5,
  },
  leftSection: {
    flex: 4,
    alignItems: 'flex-start',
  },
  middleSection: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSection: {
    flex: 4,
    alignItems: 'flex-end',
  },
  label: {
    fontSize: MEDIUM_FONT_SIZE,
    color: Color.labelgray,
    fontFamily: 'NunitoSans-SemiBold',
  },
  title: {
    fontSize: HEADER_FONT_SIZE,
    color: Color.superBlack,
    fontFamily: 'NunitoSans-ExtraBold',
  },
});
export default FieldFromTo;
