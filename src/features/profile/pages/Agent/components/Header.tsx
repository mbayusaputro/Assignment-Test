import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Header} from '../../../../../components';
import {Color} from '../../../../../constants/Color';

type Props = {
  onSetting: () => void;
};

export default (props: Props) => {
  const rightContent = () => (
    <Touch onPress={props.onSetting}>
      <EntypoIcon name="dots-three-vertical" color={Color.white} size={20} />
    </Touch>
  );

  // Main Render
  return (
    <View>
      <Header title="My Account" right={rightContent()} />
    </View>
  );
};
