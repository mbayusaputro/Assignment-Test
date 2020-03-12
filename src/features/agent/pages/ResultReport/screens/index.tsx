import React, {useState, useEffect} from 'react';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import {Header, SubHeader} from '../../../../../components/Header';
import {styles, Modal} from '../components';
import Content from './Content';

export default (props: any) => {
  // State
  const [isVisible, setVisible] = useState(false);

  // Props
  const {
    navigation: {goBack, navigate},
  } = props;

  // Function
  const onBack = () => {
    goBack();
  };

  // Main Render
  return (
    <HighSafeArea style={styles.SafeContainer}>
      <Header
        callback={onBack}
        content={{id: 'Laporan Sales', en: 'Sales Report'}}
      />
      <SubHeader />
      <Content onField={() => setVisible(true)} />
      <Modal isVisible={isVisible} onDismiss={() => setVisible(false)} />
    </HighSafeArea>
  );
};
