import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Text, Card} from '../../../../../components';
import styles from './styles';
import {Color} from '../../../../../constants/Color';
import {eurToIdr, moneyFormat} from '../../../../../helpers/helpers';

type Props = {
  price: number;
};

export default (props: Props) => {
  const {price} = props;

  // Main Render
  return (
    <View style={[styles.content, styles.vertical]}>
      <View style={styles.rowBetween}>
        <Text style={styles.textBold}>Total Payment</Text>
        <Touch style={[styles.row, {justifyContent: 'center'}]}>
          <Text style={styles.textBlue}>Price Details</Text>
          <FeatherIcon name="chevron-right" size={20} color={Color.oceanBlue} />
        </Touch>
      </View>
      <Touch activeOpacity={0.5}>
        <Card style={[styles.rowBetween, styles.cardItem, styles.vertical]}>
          <Text style={styles.textSemi}>Price You Pay</Text>
          <Text style={styles.textPrice}>Rp{moneyFormat(price)}</Text>
        </Card>
      </Touch>
    </View>
  );
};
