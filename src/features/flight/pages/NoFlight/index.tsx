import React from 'react';
import {SafeAreaView} from 'react-native';
import Content from './screen/Content';
import {Header, SubHeader} from '../../components/SubHeader';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

const Default = (props: Props) => {
  return (
    <SafeAreaView>
      <Header departure="Jakarta" destination="Denpasar" />
      <SubHeader date={new Date()} passenger="1 Adult" class="Economy" />
      <Content {...props} />
    </SafeAreaView>
  );
};

export default Default;
