import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import normalize from '../../../../../constants/normalize';
import {Text} from '../../../../../components';
import {HolidayItineraryContext as Context} from '../components/Context';
import fonts from '../../../../../constants/Fonts';
import {Color} from '../../../../../constants/Color';
import HTML from 'react-native-render-html';

export default () => {
  const [isShow, setShow] = useState(null);
  const context = React.useContext(Context);
  const {dataItinerary} = context;

  const onShow = (i: number) => {
    isShow === i ? setShow(null) : setShow(i);
  };
  return (
    <View style={styles.container}>
      {dataItinerary &&
        dataItinerary.map((item, i) => {
          return (
            <View style={styles.card} key={i}>
              <View style={styles.row1}>
                <View style={styles.row2}>
                  <Text
                    style={styles.day}
                    content={{
                      id: `Hari ${i + 1}`,
                      en: `Day ${i + 1}`,
                    }}
                  />
                  <Text style={styles.title}>{item.title}</Text>
                </View>
                <Icon onPress={() => onShow(i)} name="chevron-down" size={25} />
              </View>
              {isShow === i ? (
                <View style={styles.description}>
                  <View style={{marginTop: 10}} />
                  <HTML html={item.description} />
                </View>
              ) : (
                []
              )}
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: Color.white,
    borderRadius: 6.66,
    padding: 15,
    marginBottom: 10,
  },
  row1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  day: {
    backgroundColor: Color.berry,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginRight: 10,
    color: Color.white,
    borderRadius: 6.66,
    fontFamily: fonts.fontBold,
  },
  title: {
    fontFamily: fonts.fontBold,
  },
  description: {
    borderTopWidth: 1,
    borderTopColor: Color.mediumgray,
    marginTop: 10,
  },
  container: {
    marginHorizontal: 15,
    marginTop: normalize(-30, 'height'),
  },
});
