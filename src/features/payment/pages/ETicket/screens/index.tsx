import React from 'react';
import {HighSafeArea} from '../../../../../components';
import {styles} from '../components';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default () => {
  return (
    <HighSafeArea style={styles.container}>
      <Header />
      <Content />
      <Footer />
    </HighSafeArea>
  );
};
