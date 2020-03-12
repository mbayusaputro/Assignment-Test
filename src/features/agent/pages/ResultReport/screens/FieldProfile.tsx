import React from 'react';
import {View, Image} from 'react-native';
import {Text, Card} from '../../../../../components';
import {styles} from '../components';
import {FieldProfileProps as Props} from '../../../interface/types';
import {moneyFormat} from '../../../../../helpers/helpers';

export default (props: Props) => {
  // Props
  const {
    img,
    name,
    amountPrev,
    amountNext,
    amountSubTotal,
    amountTotal,
  } = props;

  // Main Render
  return (
    <Card style={styles.card1}>
      <View style={styles.rowProf}>
        <Image source={img} resizeMode="contain" style={styles.imgProf} />
        <Text style={styles.textProf}>{name}</Text>
      </View>
      <View style={styles.row1}>
        <Text style={styles.textPrev}>Previous Period</Text>
        <Text style={styles.textValue}>Rp{moneyFormat(amountPrev)}</Text>
      </View>
      <View
        style={amountTotal ? styles.row1 : [styles.row1, {paddingBottom: 0}]}>
        <Text style={styles.textPrev}>Next Period</Text>
        <Text style={styles.textValue}>Rp{moneyFormat(amountNext)}</Text>
      </View>
      {amountTotal ? (
        <View>
          <View style={styles.row1}>
            <Text style={styles.textPrev}>Sub Total</Text>
            <Text style={styles.textValue}>
              Rp{moneyFormat(amountSubTotal)}
            </Text>
          </View>
          <View style={[styles.row1, {paddingBottom: 0}]}>
            <Text style={styles.textPrev}>Total All Period</Text>
            <Text style={styles.textValue}>Rp{moneyFormat(amountTotal)}</Text>
          </View>
        </View>
      ) : (
        []
      )}
    </Card>
  );
};
