import React from 'react';
import {View} from 'react-native';
import {styles} from '../components';
import {ContentProps as Props} from '../../../interface/types';
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
          id: 'Rencana perjalanan per hari',
          en: 'Trip plans per day',
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
          id: 'Hari 1',
          en: 'Day 1',
        }}
      />
      <Field
        onPress={() => onField('select')}
        label={{
          id: 'Rencana perjalanan per hari',
          en: 'Trip plans per day',
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
          id: 'Hari 2',
          en: 'Day 2',
        }}
      />
      <Field
        onPress={() => onField('select')}
        label={{
          id: 'Rencana perjalanan per hari',
          en: 'Trip plans per day',
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
          id: 'Hari 3',
          en: 'Day 3',
        }}
      />
    </View>
  );
};
