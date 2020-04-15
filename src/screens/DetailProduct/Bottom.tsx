import React from 'react';
import {View} from 'react-native';
import {Button} from '../../components';
import {WIDTH_SCREEN} from '../../constants/Dimension';

export type Props = {
  onPress: () => void;
};

export default (props: Props) => {
  // Props
  const {onPress} = props;

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
      <Button text="Beli" type="secondary" />
      <Button text="Tambah Keranjang" type="primary" onPress={onPress} />
    </View>
  );
};
