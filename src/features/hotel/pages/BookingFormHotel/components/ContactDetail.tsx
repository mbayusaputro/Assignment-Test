import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, Card, Imaging} from '../../../../../components';
import styles from './styles';

type Props = {
  onShowContact: () => void;
};

export default (props: Props) => {
  const {onShowContact} = props;
  // Main Render
  return (
    <View style={[styles.content, styles.vertical]}>
      <View>
        <Text style={styles.textBold}>Contact Detail</Text>
      </View>
      <Touch onPress={onShowContact} activeOpacity={0.5}>
        <Card style={[styles.rowBetween, styles.cardItem, styles.vertical]}>
          <Text style={styles.textSemi}>Contact Person</Text>
          <Imaging
            source={require('../../../../../assets/icons/chevron_right.png')}
            resizeMode="contain"
            style={{width: 30, height: 30}}
          />
        </Card>
      </Touch>
      <View>
        <Text style={styles.textRed}>*Please fill in contact details</Text>
      </View>
    </View>
  );
};
