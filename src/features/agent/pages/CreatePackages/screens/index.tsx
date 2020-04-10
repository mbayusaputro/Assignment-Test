import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, Alert} from 'react-native';
import {Header, SubHeader} from '../../../../../components';
import Content from './Content';
import {
  Modal,
  ModalVisited,
  ModalInput,
  ModalPriceConfig,
  ModalItineraries,
  ModalInclude,
  ModailExclude,
} from '../components';
import ImagePicker, {
  ImagePickerOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {oc} from 'ts-optchain';

const CreatePackages = (props: any) => {
  const {
    navigation: {goBack, navigate},
    isLoading,
    actionHolidayInsert,
    token,
  } = props;

  const [isVisible, setVisible] = useState(null);
  const [titleModalInput, setTitleModalInput] = useState('Enter Title');
  const [formData, setFormData] = useState<any>({
    tour_category_id: '',
    title: '',
    topImage: '',
    thumbnailImage: '',
    duration_days: '',
    duration_night: '',
    cut_of_time: '',
    quotaPerson: '',
    quotaOrder: '',
    info_excluded: [],
    info_included: [],
    terms_conditions: [],
    cancellation_policy: [],
    accomodation_flight: false,
    accomodation_hotel: true,
    accomodation_bus: true,
    price_adult: '',
    price_child: '',
    itinerary_file: null,
    min_pax: '',
    max_pax: -1,
    price_config: [],
    tour_itineraries: [],
    media: [],
    tour_trip_dates: [],
    visit_cities: [],
    mr_countries: 100,
    info_hotel: {
      code: 'jakarta',
      type: 'city',
      geo_id: '102813',
      city_name: 'Jakarta',
      name: 'Jakarta',
    },
    info_flight: {
      airport_code: 'CGK',
      city_name: 'Jakarta',
      country_code: '360',
      area_code: 'JKTA',
      timezone: 'Asia/Pontianak',
      international_airport_name: 'Soekarno Hatta Intl Airport',
      icao_code: 'WIII',
    },
  });

  useEffect(() => {
    if (isVisible === 'duration_days') {
      setTitleModalInput('Enter Duration Days');
    } else if (isVisible === 'quotaPerson') {
      setTitleModalInput('Enter Participant');
    } else if (isVisible === 'price') {
      setTitleModalInput('Enter Price');
    } else if (isVisible === 'tour_category_id') {
      setTitleModalInput('Choose Tour Category');
    } else if (isVisible === 'cut_of_time') {
      setTitleModalInput('Enter Cut Off Time');
    } else if (isVisible === 'quotaPerson') {
      setTitleModalInput('Enter Quota Participants');
    } else if (isVisible === 'quotaOrder') {
      setTitleModalInput('Enter Quota Packages');
    } else if (isVisible === 'min_pax') {
      setTitleModalInput('Enter Minimum Participants');
    } else {
      setTitleModalInput('Enter Title');
    }
  }, [isVisible]);

  const openImagePicker = () => {
    const options: ImagePickerOptions = {
      title: 'Select Image',
      cancelButtonTitle: 'Cancel',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (res: ImagePickerResponse) => {
      if (res) {
        setFormData({
          ...formData,
          ['topImage']: oc(res).data(''),
          ['thumbnailImage']: oc(res).data(''),
        });
      }
    });
  };

  const onField = (type: string) => {
    if (type === 'topImage') {
      openImagePicker();
    } else {
      setVisible(type);
    }
  };

  const handleModalTextInput = (value: any, key: any) => {
    setVisible(null);
    if (key === 'tour_category_id') {
      let newValue = 1;
      if (value === 'Private') {
        newValue = 2;
      }
      setFormData({...formData, [key]: newValue});
    } else {
      setFormData({...formData, [key]: value});
    }
  };

  const handleModalInput = (value: any, key: any) => {
    setVisible(null);
    if (key === 'tour_trip_dates') {
      setFormData({
        ...formData,
        [key]: formData.tour_trip_dates.concat(value),
      });
    } else if (key === 'price_config') {
      setFormData({
        ...formData,
        [key]: formData.price_config.concat(value),
      });
    } else if (key === 'visit_cities') {
      setFormData({
        ...formData,
        [key]: formData.visit_cities.concat(value),
      });
    } else if (key === 'tour_itineraries') {
      setFormData({
        ...formData,
        [key]: formData.tour_itineraries.concat(value),
      });
    } else if (key === 'info_included') {
      setFormData({
        ...formData,
        [key]: formData.info_included.concat(value),
      });
    } else if (key === 'info_excluded') {
      setFormData({
        ...formData,
        [key]: formData.info_excluded.concat(value),
      });
    }
  };

  const submitPreview = () => {
    if (
      !isLoading &&
      formData.tour_category_id !== '' &&
      formData.title !== ''
    ) {
      actionHolidayInsert(formData, token).then((res: any) => {
        if (res.type === 'HOLIDAYINSERT_SUCCESS') {
          navigate.navigation.goBack();
        } else {
          Alert.alert(res.message);
        }
      });
    } else {
      Alert.alert('Please fill all data correctly');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        content={{id: 'Buat Paket Resmi', en: 'Create Official Packages'}}
        callback={() => goBack()}
      />
      <ScrollView>
        <SubHeader />
        <Content
          onSubmit={submitPreview}
          onField={onField}
          formData={formData}
        />
      </ScrollView>

      <ModalInput
        isVisible={
          isVisible === 'title' ||
          isVisible === 'duration_days' ||
          isVisible === 'quotaPerson' ||
          isVisible === 'price' ||
          isVisible === 'tour_category_id' ||
          isVisible === 'cut_of_time' ||
          isVisible === 'quotaPerson' ||
          isVisible === 'quotaOrder' ||
          isVisible === 'min_pax'
        }
        onDismiss={() => setVisible(null)}
        title={titleModalInput}
        model={isVisible}
        onSave={handleModalTextInput}
        inputType={isVisible === 'tour_category_id' ? 'select' : 'default'}
      />
      <Modal
        isVisible={isVisible === 'tour_trip_dates'}
        onDismiss={() => setVisible(null)}
        model={isVisible}
        onSave={handleModalInput}
      />
      <ModalPriceConfig
        isVisible={isVisible === 'price_config'}
        onDismiss={() => setVisible(null)}
        model={isVisible}
        onSave={handleModalInput}
      />
      <ModalVisited
        isVisible={isVisible === 'visit_cities'}
        onDismiss={() => setVisible(null)}
        model={isVisible}
        onSave={handleModalInput}
      />
      <ModalItineraries
        isVisible={isVisible === 'tour_itineraries'}
        onDismiss={() => setVisible(null)}
        model={isVisible}
        onSave={handleModalInput}
      />
      <ModalInclude
        isVisible={isVisible === 'info_included'}
        onDismiss={() => setVisible(null)}
        model={isVisible}
        onSave={handleModalInput}
      />
      <ModailExclude
        isVisible={isVisible === 'info_excluded'}
        onDismiss={() => setVisible(null)}
        model={isVisible}
        onSave={handleModalInput}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
  },
});
export default CreatePackages;
