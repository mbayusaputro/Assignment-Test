import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Card, Text, Imaging, Button} from '../../../../../components';
import styles from './styles';
import {
  seeDetailLang,
  subTitleDurationLang,
  selectLang,
} from '../../../interface/string';
import {moneyFormat} from '../../../../../helpers/helpers';

type Props = {
  title: string;
  photo: any;
  maxGuest: number;
  facility: Array<any>;
  price: number;
};

export default (props: Props) => {
  const {title, photo, maxGuest, facility, price} = props;
  return (
    <Card style={styles.cardRoom}>
      <View style={styles.rowBetween}>
        <Text style={styles.textTitle}>{title}</Text>
        <Touch activeOpacity={0.5}>
          <Text style={styles.textDetail} content={seeDetailLang} />
        </Touch>
      </View>
      <View style={[styles.rowBetween, styles.vertical]}>
        <Imaging
          source={{uri: photo, priority: FastImage.priority.high}}
          resizeMode="cover"
          style={styles.imgCardRoom}
        />
        <View style={{width: '65%', alignSelf: 'flex-start'}}>
          <Text
            content={{id: `Maks ${maxGuest} Tamu`, en: `Max ${maxGuest} Guest`}}
          />
          <View style={[styles.row, styles.vertical]}>
            {facility.map((it: any, i: number) => (
              <View key={i} style={[styles.row, {marginRight: 5}]}>
                <Imaging
                  source={
                    it === 'Breakfast'
                      ? require('../../../../../assets/icons/restaurant_no_round.png')
                      : require('../../../../../assets/icons/wifi_no_round.png')
                  }
                  resizeMode="contain"
                  style={styles.iconSubHeader}
                />
                <Text>{it}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.rowBetween}>
        <View style={styles.row}>
          <Text style={styles.textPrice}>Rp{moneyFormat(price)}</Text>
          <Text style={styles.textSubTitle} content={subTitleDurationLang} />
        </View>
        <Button
          content={selectLang}
          isUpperCase
          customStyle={styles.btnFooter}
        />
      </View>
    </Card>
  );
};
