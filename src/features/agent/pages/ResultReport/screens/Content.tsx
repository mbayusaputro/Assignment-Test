import React from 'react';
import {View, FlatList} from 'react-native';
import styles from '../components/styles';
import {ContentReportProps as Props} from '../../../interface/types';
import FieldProfile from './FieldProfile';
import FieldData from './FieldData';
import {oc} from 'ts-optchain';

export default (props: Props) => {
  // Props
  const {onField, data, stats, onMore, meta, isLoading, type} = props;

  // Item
  const renderItem = ({item, index}) =>
    type === 'sales' ? (
      <FieldData
        key={index}
        name={oc(item).customer_name('')}
        type={oc(item).product_code('')}
        date={oc(item).order_date(new Date())}
        amount={oc(item).total_amount(0)}
        onPress={() => onField(item)}
      />
    ) : (
      <FieldData
        key={index}
        name={oc(item).title('')}
        type={oc(item).transaction_type('') === 'IN' ? 'Debit' : 'Credit'}
        date={oc(item).transaction_date(new Date())}
        amount={oc(item).amount(0)}
        onPress={() => onField(item)}
      />
    );

  let onEndReachedCalledDuringMomentum: any = true;

  // Main Render
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(__: any, index: number) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <FieldProfile
            img={require('../../../../../assets/icons/avatar.png')}
            name={'Bayu Saputro'}
            amountTotal={stats}
          />
        }
        onEndReachedThreshold={0.01}
        onMomentumScrollBegin={() => (onEndReachedCalledDuringMomentum = false)}
        onEndReached={() => {
          if (!onEndReachedCalledDuringMomentum) {
            onMore(meta + 1); // LOAD MORE DATA
            onEndReachedCalledDuringMomentum = true;
          }
        }}
      />
    </View>
  );
};
