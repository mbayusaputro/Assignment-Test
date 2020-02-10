import React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../../../../components';
import {btn_footer} from '../../../interface/strings';
import {moneyFormat} from '../../../../../helpers/helpers';
import styles from '../components/styles';

type Props = {
  price: number;
  onSelect: () => void;
};

export default (props: Props) => {
  // Main Render
  return (
    <View style={[styles.footer, styles.rowBetween]}>
      <View style={{width: '45%'}}>
        <Text style={styles.textSubTitle}>Start from</Text>
        <Text style={styles.textBlue}>Rp{moneyFormat(props.price)}</Text>
      </View>
      <View style={{width: '50%'}}>
        <Button
          isUpperCase={true}
          onPress={props.onSelect}
          content={btn_footer}
          customStyle={styles.btnFooter}
          fullWidth
        />
      </View>
    </View>
  );
};
