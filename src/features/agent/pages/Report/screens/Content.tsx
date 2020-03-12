import React from 'react';
import {View} from 'react-native';
import {Text} from '../../../../../components';
import {styles} from '../components';
import {ContentProps as Props} from '../../../interface/types';
import {Button} from '../../../../../components/';
import Field from './Field';

export default (props: Props) => {
  // Props
  const {onSubmit, onField} = props;

  // Main Render
  return (
    <View style={styles.container}>
      <Field
        onPress={() => onField('select')}
        label={{
          id: 'Tipe',
          en: 'Type',
        }}
        fieldValue={{
          id: 'Pilih Laporan',
          en: 'Select Report',
        }}
        type={0}
      />
      <Text
        style={styles.textTitle}
        content={{id: 'Pilih Periode', en: 'Select Period'}}
      />
      <Field
        onPress={() => onField('from')}
        icons={require('../../../../../assets/icons/icon_departure.png')}
        label={{
          id: 'Dari',
          en: 'From',
        }}
        fieldValue={{
          id: 'Kam, 21 Jan 2020',
          en: 'Wed, 21 Jan 2020',
        }}
        type={1}
      />
      <Field
        onPress={() => onField('to')}
        icons={require('../../../../../assets/icons/icon_departure.png')}
        label={{
          id: 'Sampai',
          en: 'To',
        }}
        fieldValue={{
          id: 'Kam, 21 Jan 2020',
          en: 'Wed, 21 Jan 2020',
        }}
        type={1}
      />

      <Button
        customStyle={{marginVertical: 26, borderRadius: 20}}
        type="primary"
        fullWidth={true}
        isUpperCase={true}
        content={{id: 'Cari Laporan', en: 'Search Report'}}
        onPress={onSubmit}
      />
    </View>
  );
};
