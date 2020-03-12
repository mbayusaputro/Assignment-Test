import React from 'react';
import {View} from 'react-native';
import {styles} from '../components';
import {ReportProps as Props} from '../../../interface/types';
import FieldProfile from './FieldProfile';
import FieldData from './FieldData';

export default (props: Props) => {
  // Props
  const {onField} = props;

  // Main Render
  return (
    <View style={styles.container}>
      <FieldProfile
        img={require('../../../../../assets/icons/avatar.png')}
        name={'Bayu Saputro'}
        amountPrev={25000000}
        amountNext={5000000}
        amountSubTotal={11000000}
        amountTotal={42000000}
      />
      <FieldData
        name={'Bayu Saputro'}
        type={'Flight'}
        date={new Date()}
        amount={90000}
        onPress={onField}
      />
    </View>
  );
};
