import React, {useState} from 'react';
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

type Props = {
  isModalVisible: boolean;
  toggleModal: () => void;
  airport: Array<object>;
  handleSelect: (payload: any) => void;
};

const Aiports = (props: any) => {
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

const SearchAirport = (props: Props) => {
  const [isOnFocus, setOnFocus] = useState(false);

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
                isOnFocus ? {marginLeft: 30} : {textAlign: 'center'},
              ]}
              onFocus={() => setOnFocus(!isOnFocus)}
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
              data={props.airport}
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
    padding: 20,
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
    flex: 1,
    fontFamily: 'NunitoSans-Regular',
  },
});
