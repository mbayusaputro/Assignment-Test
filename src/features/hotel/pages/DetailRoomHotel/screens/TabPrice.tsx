import React from 'react';
import {View, ScrollView} from 'react-native';
import Octicon from 'react-native-vector-icons/Octicons';
import {Text} from '../../../../../components';
import {moneyFormat} from '../../../../../helpers/helpers';
import {styles} from '../components';
import {Color} from '../../../../../constants/Color';

type Props = {
  title: string;
  totalPrice: number;
  price: number;
  totalRoom: Array<any>;
};

export default (props: Props) => {
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 100}}>
      {/* ======== DETAIL PRICE ======== */}
      <View style={[styles.vertical, styles.content, styles.marginTitle]}>
        <Text style={styles.textTitle}>Fee & Tax Details</Text>
        <View style={[styles.rowBetween, {marginTop: 10}]}>
          <Text style={styles.textSemi}>{props.title}</Text>
          <Text style={styles.textSemi}>
            Rp {moneyFormat(props.totalPrice)}
          </Text>
        </View>
      </View>

      {/* ======= PRICE LIST ======== */}
      <View style={styles.content}>
        {props.totalRoom.map((__: any, index: number) => (
          <View style={[styles.rowBetween, {marginBottom: 5}]} key={index}>
            <View style={styles.rowBetween}>
              <Octicon
                name="primitive-dot"
                color={Color.greyish}
                style={styles.iconDot}
              />
              <Text style={styles.textSubTitle}>
                Night {index + 1} x 1 Room
              </Text>
            </View>
            <Text style={styles.textSubTitle}>
              Rp {moneyFormat(props.price)}
            </Text>
          </View>
        ))}
      </View>

      {/* ======= TOTAL PRICE ======== */}
      <View style={[styles.hr, styles.vertical]} />
      <View style={[styles.vertical, styles.content, styles.rowBetween]}>
        <Text style={styles.textSemi}>Total Payment</Text>
        <Text style={styles.textPrice}>Rp{moneyFormat(props.totalPrice)}</Text>
      </View>
    </ScrollView>
  );
};
