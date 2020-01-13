import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../../../../constants/Color';
import {WIDTH_SCREEN, HEIGHT_SCREEN} from '../../../../../constants/Dimension';

const Tabs = ({children}) => {
  const [actTab, setActive] = React.useState(0);
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        {children.map(({props: {title}}, i) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={i === actTab ? styles.active : styles.nonactive}
              key={i}
              onPress={() => setActive(i)}>
              <Text
                style={i === actTab ? styles.textactive : styles.textnonactive}>
                {title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{height: HEIGHT_SCREEN}}>{children[actTab]}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: Color.white,
    width: WIDTH_SCREEN,
    height: 40,
    justifyContent: 'space-between',
  },
  active: {
    borderBottomWidth: 3,
    borderColor: Color.orange,
    width: WIDTH_SCREEN / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nonactive: {
    borderBottomWidth: 1,
    borderColor: Color.labelgray,
    width: WIDTH_SCREEN / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textactive: {
    fontFamily: 'NunitoSans-Bold',
    color: Color.orange,
  },
  textnonactive: {
    fontFamily: 'NunitoSans-Bold',
    color: Color.brownishGrey,
  },
});

export default Tabs;
