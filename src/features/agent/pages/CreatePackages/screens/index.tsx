import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Header, SubHeader} from '../../../../../components';
import Content from './Content';
import {Modal, ModalVisited} from '../components';

const Orders = (props: any) => {
  // Props
  const {
    navigation: {goBack, navigate},
  } = props;

  // State
  const [isVisible, setVisible] = useState('');

  // Function
  const onField = (type: string) => {
    setVisible(type);
  };

  // Main Render
  return (
    <SafeAreaView style={{backgroundColor: '#f0f0f0', flex: 1}}>
      <Header
        content={{id: 'Buat Paket Resmi', en: 'Create Official Packages'}}
        callback={() => goBack()}
      />
      <SubHeader />
      <Content
        onSubmit={() => navigate('CreatePackagesNext')}
        onField={onField}
      />

      {/* Modal Holiday */}
      <Modal
        isVisible={isVisible === 'holiday'}
        onDismiss={() => setVisible('')}
      />

      {/* Modal Visited */}
      <ModalVisited
        isVisible={isVisible === 'visited'}
        onDismiss={() => setVisible('')}
      />
    </SafeAreaView>
  );
};

export default Orders;
