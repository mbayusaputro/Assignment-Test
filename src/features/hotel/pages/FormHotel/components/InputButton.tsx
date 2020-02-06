import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
} from 'react-native';
import {FastImageSource} from 'react-native-fast-image';
import {Imaging, Text} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import {
  MEDIUM_FONT_SIZE,
  HEADER_FONT_SIZE,
  SMALL_FONT_SIZE,
} from '../../../../../constants/TextSize';
import normalize from '../../../../../constants/normalize';
import fonts from '../../../../../constants/Fonts';

type contentValue = {id: string; en: string};
type Props = {
  labelContent?: contentValue;
  label?: string;
  contentValue?: contentValue;
  subContentValue?: contentValue;
  fieldValue?: string;
  onPress?: () => void;
  icons: FastImageSource;
  custom?: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
};

const FieldData = (props: Props) => {
  let {label, fieldValue, onPress, icons, custom} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, props.customStyle]}>
      <View style={styles.leftSection}>
        <View>
          <Imaging
            source={icons}
            style={styles.iconImage}
            resizeMode="contain"
            tintColor={Color.tealBlue}
          />
        </View>
      </View>
      <View style={styles.rightSection}>
        {custom ? (
          custom
        ) : (
          <View>
            <View>
              {props.labelContent ? (
                <Text style={styles.label} content={props.labelContent} />
              ) : (
                <Text style={styles.label}>{label}</Text>
              )}
            </View>
            <View style={styles.rowBetween}>
              {props.contentValue ? (
                <Text style={styles.title} content={props.contentValue} />
              ) : (
                <Text style={styles.title}>{fieldValue}</Text>
              )}
              {props.subContentValue && (
                <Text style={styles.subTitle} content={props.subContentValue} />
              )}
            </View>
          </View>
        )}
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
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
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
  subTitle: {
    fontFamily: fonts.fontLight,
    color: Color.brownGrey,
    fontSize: SMALL_FONT_SIZE,
  },
  iconImage: {
    height: normalize(25, 'height'),
    width: normalize(25, 'width'),
  },
});
export default FieldData;
