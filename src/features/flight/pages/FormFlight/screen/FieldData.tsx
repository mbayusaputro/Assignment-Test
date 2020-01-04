import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {
  MEDIUM_FONT_SIZE,
  HEADER_FONT_SIZE,
} from '../../../../../constants/TextSize';
type Props = {
  label: string;
  fieldValue: string;
  onPress: () => void;
};
const FieldData = (props: Props) => {
  let {label, fieldValue, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.leftSection}>
        <View>
          <Text style={styles.title}>ICON</Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <View>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View>
          <Text style={styles.title}>{fieldValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.white,
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  leftSection: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightSection: {
    flex: 8,
    alignItems: 'flex-start',
    justifyContent: 'center',
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
export default FieldData;
