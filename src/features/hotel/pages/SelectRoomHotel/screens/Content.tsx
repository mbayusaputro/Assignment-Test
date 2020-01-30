import React from 'react';
import {View, TouchableOpacity as Touch, FlatList} from 'react-native';
import {Text} from '../../../../../components';
import {styles, Card} from '../components';

type Props = {
  dataFilter: Array<any>;
  dataRoom: Array<any>;
  selectFilter: (item: any, index: number) => void;
  selectedFilter: any;
};

export default (props: Props) => {
  // Flatlist
  const keyExtractor = (__: any, index: number) => index.toString();
  const renderItem = ({item, index}: any) => (
    <Card
      key={index}
      title={item.title}
      photo={item.photo}
      maxGuest={item.maxGuest}
      facility={item.facility}
      price={item.price}
    />
  );
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
