import React from 'react';
import {
  View,
  ScrollView,
  Animated,
  TouchableOpacity as Touch,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Text, Imaging} from '../../../../../components';
import {styles, DetailHotelContext} from '../components';
import {
  HEADER_SCROLL_DISTANCE,
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
} from '../components/valuesScroll';
import Header from './Header';
import {
  facilityLang,
  aboutHotelLang,
  showDirectionLang,
  showMapLang,
  locationLang,
} from '../../../interface/string';
import {dataFacility} from '../components/data';
import {starLength} from '../../../../../helpers/helpers';
import {Color} from '../../../../../constants/Color';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

type Props = {
  titleHotel: string;
  rate: number;
  photo: any;
  accommodationType: string;
  location: string;
  callback: () => void;
  openMaps: () => void;
};

export default (props: Props) => {
  const context = React.useContext(DetailHotelContext);

  // State
  const [scrollY] = React.useState(new Animated.Value(0));

  // Scroll Animated
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [-50, 0],
    extrapolate: 'clamp',
  });

  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  // Main Render
  return (
    <View>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        contentContainerStyle={{paddingBottom: 100}}>
        <View style={styles.scrollViewContent}>
          {/* TITLE */}
          <View style={[styles.vertical, styles.content]}>
            <View style={styles.rowBetween}>
              <Text style={styles.textTitle}>{props.titleHotel}</Text>
              <Touch>
                <Imaging
                  source={require('../../../../../assets/icons/bookmark.png')}
                  resizeMode="contain"
                  style={styles.icon}
                />
              </Touch>
            </View>
            <View style={styles.rowDirection}>
              <View style={[styles.rowBetween, {marginRight: 10}]}>
                {starLength(props.rate)}
              </View>
              <Text style={styles.textMedium}>{props.accommodationType}</Text>
            </View>
          </View>

          {/* FACILITIES */}
          <View style={styles.vertical}>
            <View style={styles.content}>
              <Text style={styles.textBlue} content={facilityLang} />
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={styles.vertical}>
              {dataFacility.map((item: any, index: number) => (
                <View key={index} style={styles.facilitySpace}>
                  <Imaging
                    source={item.icon}
                    resizeMode="contain"
                    style={styles.iconFacility}
                  />
                  <Text style={[styles.textMedium, {textAlign: 'center'}]}>
                    {item.title}
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>

          {/* ABOUT */}
          <Touch
            onPress={context.onShowAbout}
            activeOpacity={0.5}
            style={styles.vertical}>
            <View style={styles.hr} />
            <View
              style={[
                styles.rowBetween,
                styles.content,
                styles.vertical,
                {alignItems: 'center'},
              ]}>
              <Text style={styles.textReguler} content={aboutHotelLang} />
              <FeatherIcon name="chevron-down" size={25} />
            </View>
            <View style={styles.hr} />
          </Touch>

          {/* LOCATION */}
          <View style={styles.vertical}>
            {/* <View style={styles.content}>
              <View>
                <Text style={styles.textBlue} content={locationLang} />
              </View>
              <View style={styles.rowDirection}>
                <MaterialIcon
                  name="location-on"
                  size={17.5}
                  color={Color.greyish}
                />
                <Text style={styles.textSubTitle}>{props.location}</Text>
              </View>
            </View> */}
            <Touch style={[styles.map, styles.vertical]} activeOpacity={0.75}>
              {/* <MapView
                provider={PROVIDER_GOOGLE}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
                  title={'marker.title'}
                  description={'marker.description'} />
              </MapView> */}
              <Text>MAPS</Text>
            </Touch>
            <View style={[styles.rowBetween, {marginTop: -35}]}>
              <Touch
                onPress={props.openMaps}
                activeOpacity={0.5}
                style={{width: '50%', alignItems: 'center'}}>
                <Imaging
                  source={require('../../../../../assets/icons/map_direction.png')}
                  resizeMode="contain"
                  style={styles.iconFacility}
                />
                <Text style={styles.textMedium} content={showDirectionLang} />
              </Touch>
              <Touch
                activeOpacity={0.5}
                style={{width: '50%', alignItems: 'center'}}>
                <Imaging
                  source={require('../../../../../assets/icons/map_location.png')}
                  resizeMode="contain"
                  style={styles.iconFacility}
                />
                <Text style={styles.textMedium} content={showMapLang} />
              </Touch>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
      <Header
        header={headerHeight}
        opacity={imageOpacity}
        translate={imageTranslate}
        headerTitle={headerOpacity}
        photo={props.photo}
        title={props.titleHotel}
        callback={props.callback}
        onShowImage={context.onShowImage}
      />
    </View>
  );
};
