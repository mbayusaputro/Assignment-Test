import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import {Text} from '../../../../../components';
import {styles} from '../components';
import {Color} from '../../../../../constants/Color';

type Props = {
  onDismiss: () => void;
  selectedIndex: number;
  onValueChange: (data: any) => void;
};

const titleLang = {id: 'Jumlah Durasi', en: 'Number of Duration'};
const subTitleLang = {id: '/malam', en: '/night'};

export default (props: Props) => {
  return (
    <View style={styles.contentModalCheckout}>
      <Touch style={styles.close} onPress={props.onDismiss}>
        <Text style={styles.textClose}>Check Out</Text>
      </Touch>
      <View style={[styles.vertical, styles.center]}>
        <Text style={styles.textBold} content={titleLang} />
        <Text style={styles.textSubTitle} content={subTitleLang} />
      </View>
      <View style={[styles.vertical, styles.rowBetween]}>
        <ScrollPicker
          dataSource={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
          selectedIndex={props.selectedIndex}
          onValueChange={(data: any, index: number) => {
            props.onValueChange(data);
          }}
          wrapperHeight={100}
          wrapperWidth={150}
          itemColor={Color.black}
          itemHeight={60}
          highlightBorderWidth={1}
          highlightColor={Color.labelgray}
        />
      </View>
    </View>
  );
};
