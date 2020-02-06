import React from 'react';
import {View, TouchableOpacity as Touch, FlatList} from 'react-native';
import {Text} from '../../../../../components';
import {styles, Card} from '../components';
import {eurToIdr, groupingRoomImages} from '../../../../../helpers/helpers';

type Props = {
  dataFilter: Array<any>;
  dataRoom: Array<any>;
  selectedFilter: any;
  selectFilter: (item: any, index: number) => void;
  onDetailRoom: () => void;
  onBookRoom: (item: any) => void;
  path: string;
  detailHotel: any;
};

export default (props: Props) => {
  // Flatlist
  const keyExtractor = (__: any, index: number) => index.toString();
  const renderItem = ({item, index}: any) => {
    const getImage = (code: any) => {
      const images = props.detailHotel.images;
      const rooms = props.dataRoom;
      const roomImage = groupingRoomImages(images, rooms, code);
      return props.path + roomImage;
    };
    return (
      <Card
        key={index}
        title={item.name}
        photo={getImage(item.code)}
        maxGuest={item.rates[0].allotment}
        facility={[]}
        price={item.rates[0].net}
        onDetailRoom={props.onDetailRoom}
        onBookRoom={() => props.onBookRoom(item)}
      />
    );
  };
  const renderFilter = ({item, index}: any) => (
    <Touch
      key={index}
      onPress={() => props.selectFilter(item, index)}
      activeOpacity={0.5}
      style={[
        styles.cardFilter,
        props.selectedFilter === item ? styles.cardSelected : null,
      ]}>
      <Text>{item}</Text>
    </Touch>
  );

  // Main Render
  return (
    <View style={styles.content}>
      <FlatList
        data={props.dataFilter}
        keyExtractor={keyExtractor}
        renderItem={renderFilter}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.horizontal, styles.vertical]}
      />
      <View style={styles.hr} />
      <FlatList
        data={props.dataRoom}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 300}}
      />
    </View>
  );
};
