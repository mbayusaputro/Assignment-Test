import React from 'react';
import {View, TouchableOpacity as Touch, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Imaging} from '../../../../../components';
import {moneyFormat} from '../../../../../helpers/helpers';
import {styles, HolidayListContext as Context} from '../components';
import Empty from './Empty';
import Loading from './Loading';

export default () => {
  // Context
  const {data, onDetail, fetchList, navigate} = React.useContext(Context);

  // Flatlist CONF
  const keyExtractor = (__: any, index: number) => index.toString();
  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.contentCard}>
        <Touch
          onPress={() => onDetail(item)}
          activeOpacity={0.5}
          style={styles.img}>
          <Imaging
            source={{uri: item.image_thumbnail}}
            style={styles.img}
            resizeMode="cover"
          />
        </Touch>
        <Touch
          onPress={() => onDetail(item)}
          activeOpacity={0.5}
          style={[styles.card, styles.rowBetween]}>
          <View style={{width: '35%'}} />
          <View style={{width: '65%'}}>
            <View>
              <Text style={styles.textTitle}>
                {item.title.slice(0, 13) +
                  (item.title.length > 11 ? '...' : '')}
              </Text>
            </View>
            <View style={[styles.row, styles.vertical]}>
              <Icon
                name="calendar-check"
                color={'#aaaaaa'}
                size={20}
                style={{marginRight: 7.5}}
              />
              <Text
                style={styles.textSubTitle}
                content={{
                  id: `${item.duration_days} hari, ${item.duration_night} malam`,
                  en: `${item.duration_days} day, ${item.duration_night} night`,
                }}
              />
            </View>
            <View style={styles.rowBetween}>
              <Text
                style={styles.textSubTitle}
                content={{id: 'Mulai dari', en: 'Start from'}}
              />
              <Text style={styles.textPrice}>
                Rp
                {moneyFormat(item.price_adult)}
              </Text>
            </View>
          </View>
        </Touch>
      </View>
    );
  };

  // Main Render
  return (
    <View style={styles.container}>
      <FlatList
        data={fetchList ? [] : data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
        ListEmptyComponent={
          fetchList ? <Loading /> : <Empty onCreate={navigate} />
        }
      />
    </View>
  );
};
