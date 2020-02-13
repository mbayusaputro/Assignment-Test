import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Card, Text, Button} from '../../../../../components';
import {participant} from '../../../interface/strings';
import {styles} from '../components';
import {Color} from '../../../../../constants/Color';

const dataParticipant = [
  {
    title: {id: 'Dewasa', en: 'Adults'},
    require: {id: '12 tahun +', en: '12 years +'},
  },
  {
    title: {id: 'Anak-anak', en: 'Children'},
    require: {id: '2 - 12 tahun +', en: '2 - 12 years +'},
  },
];

type Props = {
  addAdult: () => void;
  minAdult: () => void;
  addChild: () => void;
  minChild: () => void;
  totalAdult: number;
  totalChild: number;
  onPress: () => void;
};

export default (props: Props) => {
  return (
    <Card style={styles.cardModal}>
      <Text style={styles.textMedium} content={participant} />
      <View style={[styles.hr, styles.vertical]} />
      {dataParticipant.map((item: any, index: number) => (
        <View key={index} style={styles.rowBetween}>
          <View>
            <Text content={item.title} />
            <Text style={styles.textSubTitle} content={item.require} />
          </View>
          <View style={styles.row}>
            <Touch
              onPress={index === 0 ? props.minAdult : props.minChild}
              style={styles.btnCircle}>
              <Icon name="minus" color={Color.tealBlue} size={20} />
            </Touch>
            <Text style={{marginHorizontal: 10}}>
              {index === 0 ? props.totalAdult : props.totalChild}
            </Text>
            <Touch
              onPress={index === 0 ? props.addAdult : props.addChild}
              style={styles.btnCircle}>
              <Icon name="plus" color={Color.tealBlue} size={20} />
            </Touch>
          </View>
        </View>
      ))}
      <View style={[styles.hr, styles.vertical]} />
      <View style={{alignItems: 'flex-end'}}>
        <Button
          isUpperCase
          content={{id: 'Lanjutkan', en: 'Continue'}}
          customStyle={styles.btnFooter}
          onPress={props.onPress}
        />
      </View>
    </Card>
  );
};
