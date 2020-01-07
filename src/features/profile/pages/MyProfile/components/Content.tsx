import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text} from '../../../../../components';
import {MyProfileProps} from '../../../interface/types';

export default (props: MyProfileProps) => {
  const {onLogOut} = props;
  return (
    <View>
      <Touch onPress={onLogOut}>
        <Text>Sign Out</Text>
      </Touch>
    </View>
  );
};
