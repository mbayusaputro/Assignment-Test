import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import dayjs from 'dayjs';
import dayID from 'dayjs/locale/id';
import dayEN from 'dayjs/locale/en';
import {Text, Imaging} from '../../../../../components';
import {styles} from '../components';
import {roomLang, guestLang} from '../../../interface/string';
import {Color} from '../../../../../constants/Color';

type Props = {
  checkIn: any;
  checkOut: any;
  statusSubHeader: boolean;
  setStatus: () => void;
};

export default (props: Props) => {
  // Component
  const subNow = () => (
    <Touch
      onPress={props.setStatus}
      activeOpacity={0.5}
      style={styles.filterSubHeader}>
      <View style={styles.rowBetween}>
        <View style={styles.rowDirection}>
          <View style={[styles.rowDirection, {marginRight: 5}]}>
            <Imaging
              source={require('../../../../../assets/icons/room.png')}
              resizeMode="contain"
              style={styles.iconSubHeader}
            />
            <Text style={styles.textWhite}>1</Text>
          </View>
          <View style={[styles.rowDirection, {marginRight: 5}]}>
            <Imaging
              source={require('../../../../../assets/icons/guest.png')}
              resizeMode="contain"
              style={styles.iconSubHeader}
            />
            <Text style={styles.textWhite}>2</Text>
          </View>
        </View>
        <View style={styles.stick} />
        <View style={styles.rowDirection}>
          <Text
            style={styles.textWhite}
            content={{
              id: dayjs(props.checkIn)
                .locale('id', dayID)
                .format('DD MMM YYYY'),
              en: dayjs(props.checkIn)
                .locale('en', dayEN)
                .format('DD MMM YYYY'),
            }}
          />
          <Text style={[styles.textWhite, {marginHorizontal: 5}]}>-</Text>
          <Text
            style={styles.textWhite}
            content={{
              id: dayjs(props.checkOut)
                .locale('id', dayID)
                .format('DD MMM YYYY'),
              en: dayjs(props.checkOut)
                .locale('en', dayEN)
                .format('DD MMM YYYY'),
            }}
          />
        </View>
      </View>
    </Touch>
  );

  const subLater = () => (
    <View style={styles.filterSubHeader}>
      <View style={[styles.rowBetween, {marginBottom: 7.5}]}>
        <View style={styles.row}>
          <Imaging
            source={require('../../../../../assets/icons/room.png')}
            resizeMode="contain"
            style={styles.iconSubHeader}
          />
          <Text style={styles.textWhite} content={roomLang} />
        </View>
        <View style={[styles.rowBetween, styles.rangeSubHeader]}>
          <Touch style={styles.btnSubHeader}>
            <FeatherIcon name="minus" color={Color.white} size={20} />
          </Touch>
          <Text style={styles.textWhite}>1</Text>
          <Touch style={styles.btnSubHeader}>
            <FeatherIcon name="plus" color={Color.white} size={20} />
          </Touch>
        </View>
      </View>
      <View style={[styles.rowBetween]}>
        <View style={styles.row}>
          <Imaging
            source={require('../../../../../assets/icons/guest.png')}
            resizeMode="contain"
            style={styles.iconSubHeader}
          />
          <Text style={styles.textWhite} content={guestLang} />
        </View>
        <View style={[styles.rowBetween, styles.rangeSubHeader]}>
          <Touch style={styles.btnSubHeader}>
            <FeatherIcon name="minus" color={Color.white} size={20} />
          </Touch>
          <Text style={styles.textWhite}>1</Text>
          <Touch style={styles.btnSubHeader}>
            <FeatherIcon name="plus" color={Color.white} size={20} />
          </Touch>
        </View>
      </View>
    </View>
  );

  // Main Render
  return (
    <View style={styles.subHeader}>
      {props.statusSubHeader ? subLater() : subNow()}
    </View>
  );
};
