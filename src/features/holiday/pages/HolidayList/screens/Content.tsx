import React from 'react';
import {View, TouchableOpacity as Touch, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Imaging} from '../../../../../components';
import {moneyFormat} from '../../../../../helpers/helpers';
import {styles, HolidayListContext as Context} from '../components';
import {Color} from '../../../../../constants/Color';
import {start_from} from '../../../interface/strings';
import {
  Placeholder,
  PlaceholderMedia,
  Fade,
  PlaceholderLine,
} from 'rn-placeholder';

const loadData = [1, 2, 3];

export default () => {
  // Context
  const {data, onDetail, fetchList} = React.useContext(Context);

  // Flatlist CONF
  const keyExtractor = (__: any, index: number) => index.toString();
  const renderLoad = ({item, index}) => (
    <View
      key={index}
      style={[
        styles.contentCard,
        {
          marginVertical: 10,
          backgroundColor: Color.white,
          borderRadius: 10,
          padding: 10,
        },
      ]}>
      <Placeholder Animation={Fade} Left={PlaceholderMedia}>
        <PlaceholderLine />
        <PlaceholderLine width={50} />
        <PlaceholderLine width={75} />
      </Placeholder>
    </View>
  );
  const renderItem = ({item, index}) => {
    return (
      <View key={index} style={styles.contentCard}>
        <Touch
          onPress={() => onDetail(item.id)}
          activeOpacity={0.5}
          style={styles.img}>
          <Imaging
            source={{uri: item.city_image}}
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
              <Text style={styles.textTitle}>{item.city_name}</Text>
            </View>
            <View style={[styles.row, styles.vertical]}>
              <Icon
                name="calendar-check"
                color={Color.greyish}
                size={20}
                style={{marginRight: 7.5}}
              />
              <Text
                style={styles.textSubTitle}
                content={{
                  id: `${item.duration_days} hari, ${
                    item.duration_night
                  } malam`,
                  en: `${item.duration_days} day, ${item.duration_night} night`,
                }}
              />
            </View>
            <View style={styles.rowBetween}>
              <Text style={styles.textSubTitle} content={start_from} />
              <Text style={styles.textPrice}>
                Rp
                {moneyFormat(item.price.price_adult)}
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
        data={fetchList ? loadData : data}
        keyExtractor={keyExtractor}
        renderItem={fetchList ? renderLoad : renderItem}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};
