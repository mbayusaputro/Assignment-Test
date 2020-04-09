import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, Card} from '../../../../../components';
import {styles} from '../components';
import {FieldDataProps as Props} from '../../../interface/types';
import {moneyFormat} from '../../../../../helpers/helpers';
import moment from 'moment';

export default (props: Props) => {
  // Props
  const {name, type, date, amount, onPress} = props;

  // Main Render
  return (
    <Touch onPress={onPress}>
      <Card style={styles.card2}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View>
            <Text style={styles.textName}>
              {name.length > 20 ? name.slice(0, 20) + '...' : name}
            </Text>
            <Text style={{fontFamily: 'NunitoSans-Regular'}}>{type}</Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text style={{fontFamily: 'NunitoSans-Regular'}}>
              {moment(date).format('DD-MMM-YY')}
            </Text>
            <Text style={styles.textPrice}>Rp{moneyFormat(amount)}</Text>
          </View>
        </View>
      </Card>
    </Touch>
  );
};
