import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text} from '../../../../../components';
import {styles} from '../components';
import {aboutHotelLang} from '../../../interface/string';

type Props = {
  desc: string;
  onClose: () => void;
};

export default (props: Props) => {
  const {desc, onClose} = props;

  // Main Render
  return (
    <View style={styles.modalHeaderRounded}>
      <Touch
        activeOpacity={0.5}
        onPress={onClose}
        style={{width: '100%', alignItems: 'center'}}>
        <Text content={aboutHotelLang} style={styles.headerTitle} />
      </Touch>
      <View style={[styles.hr, styles.vertical]} />
      <View>
        <Text>{desc}</Text>
      </View>
      <View style={styles.vertical} />
    </View>
  );
};
