import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components';
import {WIDTH_SCREEN} from '../../constants/Dimension';
import {moneyFormat} from '../../helpers/helpers';

export type Props = {
  total: number;
};

export default (props: Props) => {
  // Props
  const {total} = props;

  // Main Render
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        zIndex: 1,
        bottom: 0,
        position: 'absolute',
        width: WIDTH_SCREEN,
        backgroundColor: '#FFFFFF',
        borderTopWidth: 2,
        borderColor: '#f0f0f0',
      }}>
      <View>
        <Text
          style={{
            fontFamily: 'NunitoSans-Bold',
            fontSize: 14,
          }}>
          Total Harga
        </Text>
        <Text
          style={{
            fontFamily: 'NunitoSans-ExtraBold',
            fontSize: 18,
            color: '#ea6520',
          }}>
          Rp{moneyFormat(total)}
        </Text>
      </View>
      <Button text="Beli" type="primary" />
    </View>
  );
};
