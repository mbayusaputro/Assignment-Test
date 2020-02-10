import React from 'react';
import {View, TouchableOpacity as Touch, FlatList} from 'react-native';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, Imaging} from '../../../../../components';
import {moneyFormat} from '../../../../../helpers/helpers';
import {styles, HolidayListContext as Context} from '../components';
import {Color} from '../../../../../constants/Color';
import {start_from} from '../../../interface/strings';

export default () => {
  // Context
  const {data, onDetail} = React.useContext(Context);

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
            source={{uri: item.img}}
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
              <Text style={styles.textTitle}>{item.title}</Text>
            </View>
            <View style={[styles.row, styles.vertical]}>
              <Icon
                name="calendar-check"
                color={Color.greyish}
                size={20}
                style={{marginRight: 7.5}}
              />
              <Text style={styles.textSubTitle}>
                {dayjs(new Date()).format('DD MMM')} -{' '}
                {dayjs(new Date()).format('DD MMM YYYY')}
              </Text>
            </View>
            <View style={styles.rowBetween}>
              <Text style={styles.textSubTitle} content={start_from} />
              <Text style={styles.textPrice}>
                Rp
                {moneyFormat(343274)}
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
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.content}
      />
    </View>
  );
};
