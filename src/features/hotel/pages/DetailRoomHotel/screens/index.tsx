import React from 'react';
import {HighSafeArea, Text} from '../../../../../components';
import Content from './Content';
import {View} from 'react-native';

export default (props: any) => {
  return (
    <HighSafeArea>
      <View>
        <Text>This is Header</Text>
      </View>
      <Content />
    </HighSafeArea>
  );
};
