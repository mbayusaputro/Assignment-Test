import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import Method from './Method';
import {Header, SubHeader} from '../../components';

const Default = (props: any) => {
  return (
    <SafeAreaView style={{backgroundColor: '#f5f5f5', flex: 1}}>
      <ScrollView>
        <Header title="Select Payment Method" />
        <SubHeader id="8787878" />
        <Method />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Default;
