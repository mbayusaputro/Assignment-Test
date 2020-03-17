import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity as Touch} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {date} from '../data';
import {generateDateSlider} from '../../../../../helpers/helpers';

type Props = {
  date: any;
  onPress: (_: any) => void;
};

const DateSlide = (props: Props) => {
  // Props
  const {date, onPress} = props;

  // State
  const [isDate, setDate] = useState([]);

  // Lifecycle
  useEffect(() => {
    setDate(generateDateSlider(date));
  }, []);

  // Main Render
  return (
    <View style={styles.card}>
      {isDate &&
        isDate.map((item: any, i: number) => {
          return (
            <Touch
              onPress={
                item.disabled ? () => {} : () => onPress(item.selectDate)
              }
              style={styles.content}
              key={i}>
              <Text
                style={[
                  styles.date,
                  item.disabled ? styles.grey : item.active ? styles.blue : {},
                ]}>
                {item.date}
              </Text>
              <Text
                style={[
                  styles.day,
                  item.disabled ? styles.grey : item.active ? styles.blue : {},
                ]}>
                {item.day.toUpperCase()}
              </Text>
              {item.active ? <View style={styles.circle} /> : []}
            </Touch>
          );
        })}
    </View>
  );
};

export default DateSlide;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
  },
  circle: {
    height: 5,
    width: 5,
    borderRadius: 5,
    backgroundColor: Color.orange,
  },
  blue: {
    color: Color.orange,
  },
  grey: {
    color: Color.brownGreyF,
  },
  date: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: 16,
  },
  day: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 10,
  },
});
