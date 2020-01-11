import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {
  MEDIUM_FONT_SIZE,
  HEADER_FONT_SIZE,
} from '../../../../../constants/TextSize';
type Props = {
  label: string;
  fieldValue: string;
  onPress: () => void;
  icons: ImageSourcePropType;
};
const FieldData = (props: Props) => {
  let {label, fieldValue, onPress, icons} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.leftSection}>
        <View>
          <Image
            source={icons}
            style={{tintColor: Color.tealBlue, height: 25, width: 25}}
            resizeMode="cover"
          />
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
