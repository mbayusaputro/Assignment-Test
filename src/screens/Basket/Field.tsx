import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  CheckBox,
  TouchableOpacity as Touch,
} from 'react-native';
import {Imaging} from '../../components';
import {WIDTH_SCREEN} from '../../constants/Dimension';
import {moneyFormat} from '../../helpers/helpers';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export type Props = {
  data: any;
  onChange: (type: string) => void;
  onCheck: () => void;
  onDel: () => void;
};

export default (props: Props) => {
  const {data, onChange, onCheck, onDel} = props;
  return (
    <View style={styles.wrap}>
      <Text style={styles.text}>{data.store}</Text>
      <View style={styles.row1}>
        <CheckBox
          style={styles.checkbox}
          value={data.check}
          onValueChange={onCheck}
        />
        <Imaging
          source={{uri: data.img}}
          resizeMode="contain"
          style={{width: 75, height: 75, borderRadius: 6.66, marginRight: 10}}
        />
        <View>
          <Text style={styles.text}>
            {data.title.length > 22
              ? data.title.slice(0, 22) + '...'
              : data.title}
          </Text>
          <Text style={styles.title}>Rp{moneyFormat(data.price)}</Text>
          <View style={[styles.row, {width: WIDTH_SCREEN / 3, marginTop: 10}]}>
            <Touch onPress={onDel}>
              <Icon name="trash" size={15} />
            </Touch>
            <Touch onPress={() => onChange('min')} style={styles.plusmin}>
              <Text style={styles.textPlus}>-</Text>
            </Touch>
            <Text style={[styles.textPlus, {color: '#222'}]}>{data.stock}</Text>
            <Touch onPress={() => onChange('plus')} style={styles.plusmin}>
              <Text style={styles.textPlus}>+</Text>
            </Touch>
          </View>
        </View>
      </View>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  text: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
  },
  title: {
    fontFamily: 'NunitoSans-ExtraBold',
    fontSize: 16,
    color: '#ea6520',
    marginTop: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  plusmin: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: '#23900a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 6.66,
  },
  wrap: {
    borderBottomWidth: 2,
    borderBottomColor: '#f0f0f0',
    marginVertical: 10,
  },
  textPlus: {
    color: '#fff',
    fontFamily: 'NunitoSans-ExtraBold',
  },
});
