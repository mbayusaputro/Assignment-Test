import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import {Text, Button} from '../../../../../components';
import {styles} from '../components';
import {Color} from '../../../../../constants/Color';
import {
  titleDurationLang,
  subTitleDurationLang,
  langBtnDone,
} from '../../../interface/string';

type Props = {
  onDismiss: () => void;
  selectedIndex: number;
  onValueChange: (data: any) => void;
};

export default (props: Props) => {
  return (
    <View style={styles.contentModalCheckout}>
      <Touch style={styles.close} onPress={props.onDismiss}>
        <Text style={styles.textClose}>Check Out</Text>
      </Touch>
      <View style={[styles.vertical, styles.center]}>
        <Text style={styles.textBold} content={titleDurationLang} />
        <Text style={styles.textSubTitle} content={subTitleDurationLang} />
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
      <Button
        isUpperCase
        onPress={props.onDismiss}
        content={langBtnDone}
        customStyle={styles.btnFooter}
        fullWidth
      />
    </View>
  );
};
