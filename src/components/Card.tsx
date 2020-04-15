import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';

type CardProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};
export default (props: CardProps) => (
  <View style={[styles.card, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 6.66,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
