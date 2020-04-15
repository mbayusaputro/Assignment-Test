import React from 'react';
import {FlatList, View} from 'react-native';
import {Props} from '../../interface/types';
import {HighSafeArea} from '../../components';
import Field from './Field';
import {product} from './data';

export default (props: Props) => {
  // Props
  const {
    navigation: {navigate},
  } = props;

  // Item
  const _renderItem = ({item}) => (
    <Field
      img={item.img}
      title={item.title}
      price={item.price}
      star={item.star}
      official={item.official}
      onPress={() => navigate('Detail', {item})}
    />
  );

  // Main Render
  return (
    <HighSafeArea>
      <FlatList
        data={product}
        keyExtractor={(__: any, index: number) => index.toString()}
        renderItem={_renderItem}
        ListEmptyComponent={<View />}
        numColumns={2}
      />
    </HighSafeArea>
  );
};
