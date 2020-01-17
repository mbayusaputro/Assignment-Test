import React, {ReactNode} from 'react';
import {View, StyleSheet, ViewStyle, StyleProp} from 'react-native';
import {Color} from '../constants/Color';

type CardProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
};
export default (props: CardProps) => (
  <View style={[styles.card, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: Color.white,
  },
});
