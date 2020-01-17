import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {date} from '../data';

const DateSlide = () => {
  return (
    <View style={styles.card}>
      {date.map((item: any, i: number) => {
        return (
          <View style={styles.content} key={i}>
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
          </View>
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
