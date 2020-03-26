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
          id: 'Judul',
          en: 'Title',
        }}
        fieldValue={{
          id: 'Masukkan Judul',
          en: 'Enter Title',
        }}
        type={0}
      />
      <Field
        onPress={() => onField('select')}
        label={{
          id: 'Maksimal Peserta',
          en: 'Maximum Participants',
        }}
        fieldValue={{
          id: '1 Orang',
          en: '1 Person',
        }}
        type={0}
      />
      <Field
        onPress={() => onField('select')}
        label={{
          id: 'Total Harga',
          en: 'Total Price',
        }}
        fieldValue={{
          id: 'Rp.',
          en: 'Rp.',
        }}
        type={0}
      />
      <Field
        onPress={() => onField('holiday')}
        label={{
          id: 'Tanggal Liburan',
          en: 'Holiday Date',
        }}
      />
      <Field
        onPress={() => onField('visited')}
        label={{
          id: 'Tempat yang dikunjungi',
          en: 'Visited Place',
        }}
      />
      <Button
        customStyle={{marginVertical: 26, borderRadius: 20}}
        type="primary"
        fullWidth={true}
        isUpperCase={true}
        content={{id: 'Selanjutnya', en: 'Next'}}
        onPress={onSubmit}
      />
    </View>
  );
};
