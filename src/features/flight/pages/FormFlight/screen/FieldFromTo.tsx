import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {
  MEDIUM_FONT_SIZE,
  HEADER_FONT_SIZE,
} from '../../../../../constants/TextSize';

type Props = {
  fromPressed: () => void;
  toPressed: () => void;
  fromCity: string;
  fromAirport: string;
  toCity: string;
  toAirport: string;
};

const FieldFromTo = (props: Props) => {
  let {
    fromPressed,
    toPressed,
    fromCity,
    fromAirport,
    toCity,
    toAirport,
  } = props;
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={fromPressed}>
          <View>
            <Text style={styles.label}>From</Text>
          </View>
          <View>
            <Text style={styles.title}>{fromCity}</Text>
          </View>
          <View>
            <Text style={styles.title}>({fromAirport})</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.middleSection}>
        <Image
          source={require('../../../../../assets/icons/flight_oneway.png')}
          style={{tintColor: Color.tealBlue, height: 30, width: 60}}
          resizeMode="contain"
        />
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity onPress={toPressed}>
          <View style={{alignSelf: 'flex-end'}}>
            <Text style={styles.label}>To</Text>
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <Text style={styles.title}>{toCity}</Text>
          </View>
          <View style={{alignSelf: 'flex-end'}}>
            <Text style={styles.title}>({toAirport})</Text>
          </View>
        </TouchableOpacity>
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
