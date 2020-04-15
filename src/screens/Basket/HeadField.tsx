import React, {useState} from 'react';
import {View, Text, StyleSheet, CheckBox, TouchableOpacity} from 'react-native';

export type Props = {
  onSelectAll: (select: boolean) => void;
  onDel: () => void;
};

export default (props: Props) => {
  const {onSelectAll, onDel} = props;
  const [isSelect, setSelect] = useState(false);

  const onChange = () => {
    setSelect(!isSelect);
    onSelectAll(!isSelect);
  };

  // Main Render
  return (
    <View style={[styles.row, {marginBottom: 20}]}>
      <View style={styles.row}>
        <CheckBox
          style={styles.checkbox}
          value={isSelect}
          onValueChange={onChange}
        />
        <Text>Pilih semua produk</Text>
      </View>
      <TouchableOpacity onPress={onDel}>
        <Text
          style={{
            fontFamily: 'NunitoSans-ExtraBold',
            color: '#23900a',
            fontSize: 16,
          }}>
          Hapus
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 6.66,
  },
});
