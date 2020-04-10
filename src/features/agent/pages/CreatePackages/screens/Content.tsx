import React from 'react';
import {View} from 'react-native';
import {styles} from '../components';
import {ContentProps as Props} from '../../../interface/types';
import {Button} from '../../../../../components/';
import Field from './Field';

export default (props: Props) => {
  const {onSubmit, onField, formData} = props;
  let titleValue = {
    id: 'Masukkan Judul',
    en: 'Enter Title',
  };
  if (formData.title) {
    titleValue = {
      id: formData.title,
      en: formData.title,
    };
  }
  let durationDaysValue = {
    id: 'Durasi Hari',
    en: 'Duration Day',
  };
  if (formData.duration_days) {
    durationDaysValue = {
      id: formData.duration_days,
      en: formData.duration_days,
    };
  }
  let COTValue = {
    id: 'Enter Cut Off Time',
    en: 'Enter Cut Off Time',
  };
  if (formData.cut_of_time) {
    COTValue = {
      id: formData.cut_of_time,
      en: formData.cut_of_time,
    };
  }
  let QuotaPersonValue = {
    id: 'Quota Participants',
    en: 'Quota Participants',
  };
  if (formData.quotaPerson) {
    QuotaPersonValue = {
      id: formData.quotaPerson,
      en: formData.quotaPerson,
    };
  }
  let QuotaPackagesValue = {
    id: 'Quota Packages',
    en: 'Quota Packages',
  };
  if (formData.quotaOrder) {
    QuotaPackagesValue = {
      id: formData.quotaOrder,
      en: formData.quotaOrder,
    };
  }
  let MinPaxValue = {
    id: 'Minimum Participants',
    en: 'Minimum Participants',
  };
  if (formData.min_pax) {
    MinPaxValue = {
      id: formData.min_pax,
      en: formData.min_pax,
    };
  }

  return (
    <View style={styles.container}>
      <Field
        onPress={() => onField('topImage')}
        label={{
          id: 'Choose Picture',
          en: 'Choose Picture',
        }}
      />
      <Field
        onPress={() => onField('tour_category_id')}
        label={{
          id: 'Kategori Wisata',
          en: 'Tour Category',
        }}
        fieldValue={{
          id: 'Pilih Kategori',
          en: 'Choose Category',
        }}
        type={0}
      />
      <Field
        onPress={() => onField('title')}
        label={{
          id: 'Judul',
          en: 'Title',
        }}
        fieldValue={titleValue}
        type={0}
      />
      <Field
        onPress={() => onField('duration_days')}
        label={{
          id: 'Durasi Hari',
          en: 'Duration Days',
        }}
        fieldValue={durationDaysValue}
        type={0}
      />
      <Field
        onPress={() => onField('tour_trip_dates')}
        label={{
          id: 'Tanggal Liburan',
          en: 'Holiday Date',
        }}
      />
      <Field
        onPress={() => onField('cut_of_time')}
        label={{
          id: 'Cut Off Time',
          en: 'Cut Off Time',
        }}
        fieldValue={COTValue}
        type={0}
      />
      <Field
        onPress={() => onField('quotaPerson')}
        label={{
          id: 'Quota Participants',
          en: 'Quota Participants',
        }}
        fieldValue={QuotaPersonValue}
        type={0}
      />
      <Field
        onPress={() => onField('quotaOrder')}
        label={{
          id: 'Quota Packages',
          en: 'Quota Packages',
        }}
        fieldValue={QuotaPackagesValue}
        type={0}
      />
      <Field
        onPress={() => onField('min_pax')}
        label={{
          id: 'Minimum Participants',
          en: 'Minimum Participants',
        }}
        fieldValue={MinPaxValue}
        type={0}
      />
      <Field
        onPress={() => onField('price_config')}
        label={{
          id: 'Price Config',
          en: 'Price Config',
        }}
      />
      <Field
        onPress={() => onField('visit_cities')}
        label={{
          id: 'Tempat yang dikunjungi',
          en: 'Visited Place',
        }}
      />
      <Field
        onPress={() => onField('tour_itineraries')}
        label={{
          id: 'Itinerary',
          en: 'Itinerary',
        }}
      />
      <Field
        onPress={() => onField('info_included')}
        label={{
          id: 'Include',
          en: 'Include',
        }}
      />
      <Field
        onPress={() => onField('info_excluded')}
        label={{
          id: 'Exclude',
          en: 'Exclude',
        }}
      />

      <Button
        customStyle={{marginVertical: 26, borderRadius: 20}}
        type="primary"
        fullWidth={true}
        isUpperCase={true}
        content={{id: 'Publish', en: 'Publish'}}
        onPress={onSubmit}
      />
    </View>
  );
};
