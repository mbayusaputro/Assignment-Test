import React from 'react';
import {View, TouchableOpacity as Touch, Switch} from 'react-native';
import {Text, Card} from '../../../../../components';
import {styles} from '../components';
import {ContentChangeProps as Props} from '../../../interface/types';

export default (props: Props) => {
  const [valueSwitch, onSwitch] = React.useState(false);

  // Main Render
  return (
    <View style={styles.container}>
      <Card style={[styles.card, styles.rowBetween]}>
        <Text style={styles.textBold}>Password</Text>
        <Touch onPress={props.onShowModal}>
          <Text style={styles.textBlue}>Change</Text>
        </Touch>
      </Card>

      <Card style={[styles.card, styles.vertical]}>
        <View style={styles.rowBetween}>
          <View style={{width: '80%'}}>
            <Text style={styles.textBold}>Enable log in verification</Text>
          </View>
          <View style={{width: '15%'}}>
            <Switch
              value={valueSwitch}
              onValueChange={() => onSwitch(!valueSwitch)}
            />
          </View>
        </View>
        <View style={{width: '80%'}}>
          <Text>
            Send me a verification code every time I log in from a new device
          </Text>
        </View>
      </Card>
    </View>
  );
};
