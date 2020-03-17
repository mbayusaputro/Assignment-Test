import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity as Touch,
} from 'react-native';
import Modal from 'react-native-modal';
import {Color} from '../../../../../constants/Color';
import {scale, verticalScale} from '../../../../../constants/ScaleUtils';
import Header from '../../../components/Head';
import {SearchAirportProps, AirportProps} from '../types';

const Aiports = (props: AirportProps) => {
  return (
    <Touch style={styles.list} activeOpacity={0.7} onPress={props.onPress}>
      <View>
        <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
          {props.city}
        </Text>
        <Text
          style={{fontFamily: 'NunitoSans-Regular', color: Color.brownGreyF}}>
          {props.airport}
        </Text>
      </View>
      <View style={styles.code}>
        <Text
          style={{
            fontFamily: 'NunitoSans-Regular',
            color: Color.brownGreyTwo,
            fontSize: 12,
          }}>
          {props.code}
        </Text>
      </View>
    </Touch>
  );
};

const SearchAirport = (props: SearchAirportProps) => {
  const [isOnFocus, setOnFocus] = useState(false);
  const [airport, setAirport] = useState([]);

  useEffect(() => {
    setAirport(props.airport);
  }, []);

  const onChange = (event: string) => {
    let tempDataFlight = [];
    if (props.airport.length > 0) {
      props.airport.filter((dest: any) => {
        if (
          dest.city_name.toLowerCase().indexOf(event.toLowerCase()) > -1 ||
          dest.international_airport_name
            .toLowerCase()
            .indexOf(event.toLowerCase()) > -1 ||
          dest.airport_code.toLowerCase().indexOf(event.toLowerCase()) > -1
        ) {
          tempDataFlight.push(dest);
        }
      });
    }
    setAirport(tempDataFlight);
  };

  return (
    <View style={{flex: 1}}>
      <Modal
        isVisible={props.isModalVisible}
        backdropColor={Color.lightgray}
        backdropOpacity={1}
        onBackButtonPress={props.toggleModal}
        style={{marginHorizontal: 0}}>
        <SafeAreaView style={{flex: 1}}>
          <Header title="Select Departure" goBack={props.toggleModal} />
          <View style={styles.search}>
            <Image
              style={{
                height: verticalScale(20),
                width: scale(20),
                tintColor: Color.orange,
              }}
              source={require('../../../../../assets/icons/map.png')}
              resizeMode="contain"
            />
            <TextInput
              // value={'Place'}
              placeholder="Select City or Airport"
              style={[
                styles.text,
                isOnFocus ? {marginLeft: 15} : {textAlign: 'center'},
              ]}
              onChangeText={(text: string) => onChange(text)}
              onFocus={() => setOnFocus(true)}
            />
          </View>
          <View style={styles.title}>
            <Text
              style={{
                fontFamily: 'NunitoSans-Regular',
                color: Color.brownGreyF,
                fontSize: 16,
                marginBottom: 10,
              }}>
              Popular Destinations
            </Text>
            <FlatList
              data={airport}
              keyExtractor={(__: any, index: number) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <Aiports
                    onPress={() => props.handleSelect(item)}
                    key={index}
                    city={item.city_name}
                    airport={item.international_airport_name}
                    code={item.airport_code}
                  />
                );
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default SearchAirport;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
  },
  code: {
    backgroundColor: Color.lightgray,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 7,
  },
  search: {
    flexDirection: 'row',
    backgroundColor: Color.white,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: -30,
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    backgroundColor: Color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    padding: 20,
  },
  text: {
    fontFamily: 'NunitoSans-Regular',
  },
});
