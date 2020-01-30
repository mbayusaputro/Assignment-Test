import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../../../components';
import {moneyFormat} from '../../../../../helpers/helpers';
import {styles} from '../components';

const data = [1, 2, 3, 4, 5, 6, 7];

export default (props: any) => {
  return (
    <View>
      {/* ======== DETAIL PRICE ======== */}
      <View style={[styles.vertical, styles.content]}>
        <Text style={styles.textTitle}>Fee & Tax Details</Text>
        <View style={styles.rowBetween}>
          <Text style={styles.textSemi}>TITLE_ROOM</Text>
          <Text style={styles.textSemi}>Rp {moneyFormat(2325000)}</Text>
        </View>
      </View>

      {/* ======= PRICE LIST ======== */}
      <View>
        {data.map((__: any, index: number) => (
          <View key={index}>
            <Text>ICON</Text>
            <Text>Night {index + 1} x 1 Room</Text>
            <Text>Rp {moneyFormat(502200)}</Text>
          </View>
        ))}
      </View>

      {/* ======= TOTAL PRICE ======== */}
      <View />
      <View>
        <Text>Total Payment</Text>
        <Text>Rp{moneyFormat(3515400)}</Text>
      </View>
    </View>
  );
};
