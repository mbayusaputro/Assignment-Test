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
  onDetailRoom: (item: any) => void;
  onBookRoom: (item: any) => void;
  path: string;
  detailHotel: any;
};

export default (props: Props) => {
  // Props
  const {
    dataFilter,
    dataRoom,
    selectFilter,
    selectedFilter,
    onBookRoom,
    onDetailRoom,
    path,
    detailHotel,
  } = props;

  // Flatlist
  const keyExtractor = (__: any, index: number) => index.toString();
  const renderItem = ({item, index}: any) => {
    const getImage = (code: any) => {
      const images = detailHotel.images;
      const rooms = dataRoom;
      const roomImage = groupingRoomImages(images, rooms, code);
      return path + roomImage;
    };
    return (
      <Card
        key={index}
        title={item.name}
        photo={getImage(item.code)}
        maxGuest={item.rates[0].max_occupancy}
        facility={[]}
        price={item.rates[0].net}
        onDetailRoom={() => onDetailRoom(item)}
        onBookRoom={() => onBookRoom(item)}
      />
    );
  };
  const renderFilter = ({item, index}: any) => (
    <Touch
      key={index}
      onPress={() => selectFilter(item, index)}
      activeOpacity={0.5}
      style={[
        styles.cardFilter,
        selectedFilter === item ? styles.cardSelected : null,
      ]}>
      <Text>{item}</Text>
    </Touch>
  );

  // Main Render
  return (
    <View style={styles.content}>
      <FlatList
        data={dataFilter}
        keyExtractor={keyExtractor}
        renderItem={renderFilter}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[styles.horizontal, styles.vertical]}
      />
      <View style={styles.hr} />
      <FlatList
        data={dataRoom}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{paddingBottom: 300}}
      />
    </View>
  );
};
