import React from 'react';
import {View, TouchableOpacity as Touch, Switch} from 'react-native';
import {Text, Card, Imaging} from '../../../../../components';
import styles from './styles';

type Props = {
  totalGuest: number;
  onShowGuest: (item: any) => void;
  guest: Array<any>;
  sameContact: boolean;
  onChangeSame: () => void;
};

export default (props: Props) => {
  const {totalGuest, onShowGuest, guest, sameContact, onChangeSame} = props;

  const loopGuest = (total: number) => {
    let arrays = [];
    for (let i = 0; i < total; i++) {
      arrays.push(
        <Touch onPress={() => onShowGuest(i + 1)} activeOpacity={0.5} key={i}>
          <Card style={[styles.rowBetween, styles.cardItem, styles.vertical]}>
            <Text style={styles.textSemi}>
              #{i + 1} {guest[i].name === '' ? 'Guest' : guest[i].name}
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
      {loopGuest(totalGuest)}
    </View>
  );
};
