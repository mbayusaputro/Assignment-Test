import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Header, SubHeader} from '../../components';
import Content from './screen/Content';

const Default = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Header title="Jakarta" />
        <SubHeader departure="Jakarta (CGK)" destination="Denpasar (DPS)" />
        <Content />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Default;
