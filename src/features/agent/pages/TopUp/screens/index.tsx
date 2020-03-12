import React, {useState, useEffect} from 'react';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import {Header} from '../../../../../components/Header';
import Content from './Content';
import {TopUp as Props} from '../../../interface/types';
import {InteractionManager} from 'react-native';
import {styles, Modal} from '../components';
import {oc} from 'ts-optchain';

export default (props: Props) => {
  // State
  const [isVisible, setVisible] = useState(false);
  const [isModel, setModel] = useState('');
  const [isAmount, setAmount] = useState(0);

  // Props
  const {
    navigation: {goBack, navigate},
    token,
    actionTopUp,
    isLoading,
    profile,
  } = props;

  // Function
  const onBack = () => {
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const onTopUp = (value: number) => {
    let payload = {
      amount: value,
    };
    actionTopUp(token, payload).then((res: any) => {
      if (res.type === 'TOP_UP_SUCCESS') {
        setTimeout(() => {
          navigate('PaymentWeb', {
            source: res.data.redirect_url,
            typeScreen: 'agent',
            productID: '',
          });
        }, 500);
      } else {
        alert(res.message);
      }
    });
  };

  const onSave = (value: number) => {
    setAmount(value);
    setVisible(false);
  };

  const onModal = (value: string) => {
    setVisible(true);
    setModel(value);
  };

  // Main Render
  return (
    <HighSafeArea style={styles.SafeContainer}>
      <Header
        callback={onBack}
        content={{id: 'Top Up Setoran', en: 'Top Up Deposit'}}
      />
      <Content
        balance={oc(profile).balance(0)}
        onSubmit={() => onTopUp(isAmount)}
        modalInput={onModal}
        modalSelect={() => onModal('select')}
        amount={isAmount}
      />
      <LoadingBook isVisible={isLoading} />
      <Modal
        isVisible={isVisible}
        onDismiss={() => setVisible(null)}
        onSave={(_1: any) => onSave(_1)}
        model={isModel}
      />
    </HighSafeArea>
  );
};
