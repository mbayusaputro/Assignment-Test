import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, Card, Imaging} from '../../../../../components';
import styles from './styles';

type Props = {
  onShowContact: () => void;
  dataContact: any;
};

export default (props: Props) => {
  const {onShowContact, dataContact} = props;
  // Main Render
  return (
    <View style={[styles.content, styles.vertical]}>
      <View>
        <Text style={styles.textBold}>Contact Detail</Text>
      </View>
      <Touch onPress={onShowContact} activeOpacity={0.5}>
        <Card style={[styles.rowBetween, styles.cardItem, styles.vertical]}>
          <Text style={styles.textSemi}>
            {dataContact !== null
              ? `${dataContact.name} ${dataContact.surname}`
              : 'Contact Detail'}
          </Text>
          <Imaging
            source={require('../../../../../assets/icons/chevron_right.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </Card>
      </Touch>
      {dataContact === null && (
        <View>
          <Text style={styles.textRed}>*Please fill in contact details</Text>
        </View>
      )}
    </View>
  );
};
