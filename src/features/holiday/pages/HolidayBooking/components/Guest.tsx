import React from 'react';
import {View, TouchableOpacity as Touch, Switch} from 'react-native';
import {Text, Card, Imaging} from '../../../../../components';
import styles from './styles';

type Props = {
  totalGuest: number;
  onShowGuest: (item: any, type: string) => void;
  guest: Array<any>;
  sameContact: boolean;
  onChangeSame: () => void;
};

export default (props: Props) => {
  const {onShowGuest, guest, sameContact, onChangeSame} = props;

  const loopGuest = (numGuest: Array<any>) => {
    let arrays = [];
    for (let i = 0; i < numGuest.length; i++) {
      arrays.push(
        <Touch
          onPress={() => onShowGuest(i, numGuest[i].type)}
          activeOpacity={0.5}
          key={i}>
          <Card style={[styles.rowBetween, styles.cardItem, styles.vertical]}>
            <Text style={styles.textSemi}>
              #{i + 1}{' '}
              {guest[i].first_name === ''
                ? numGuest[i].type
                : guest[i].first_name + guest[i].last_name}
            </Text>
            <Imaging
              source={require('../../../../../assets/icons/chevron_right.png')}
              resizeMode="contain"
              style={{width: 30, height: 30}}
            />
          </Card>
          {guest[i].name === '' && (
            <View>
              <Text style={styles.textRed}>
                *Please fill in contact details
              </Text>
            </View>
          )}
        </Touch>,
      );
    }
    return arrays;
  };

  // Main Render
  return (
    <View style={[styles.content, styles.vertical]}>
      <View>
        <Text style={styles.textBold}>Guest</Text>
        <View style={styles.rowBetween}>
          <Text
            content={{
              id: 'Sama seperti detail kontak',
              en: 'Same as contact detail',
            }}
          />
          <Switch value={sameContact} onValueChange={onChangeSame} />
        </View>
      </View>
      {loopGuest(guest)}
    </View>
  );
};
