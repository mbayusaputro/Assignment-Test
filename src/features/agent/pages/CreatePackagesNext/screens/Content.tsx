import React from 'react';
import {View} from 'react-native';
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
          id: 'Rencana Perjalanan',
          en: 'Itinerary',
        }}
      />
      <Field
        onPress={() => onField('select')}
        label={{
          id: 'Termasuk',
          en: 'Include',
        }}
      />
      <Field
        onPress={() => onField('select')}
        label={{
          id: 'Tidak Termasuk',
          en: 'Exclude',
        }}
      />
      <Field
        onPress={() => onField('select')}
        label={{
          id: 'Gambar Dokumentasi',
          en: 'Documentation Picture',
        }}
        type={0}
      />
      <Button
        customStyle={{marginVertical: 26, borderRadius: 20}}
        type="primary"
        fullWidth={true}
        isUpperCase={true}
        content={{id: 'Terbitkan', en: 'Publish'}}
        onPress={onSubmit}
      />
    </View>
  );
};
