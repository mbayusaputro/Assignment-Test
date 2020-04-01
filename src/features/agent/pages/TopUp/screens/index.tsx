import React, {useState, useEffect, useRef} from 'react';
import {HighSafeArea} from '../../../../../components';
import {Header, SubHeader} from '../../../../../components/Header';
import Content from './Content';
import {TopUp as Props} from '../../../interface/types';
import {InteractionManager} from 'react-native';
import {styles, Modal} from '../components';
import {oc} from 'ts-optchain';
import Toast from 'react-native-easy-toast';

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
    profile,
    getProfile,
  } = props;

  // Ref
  const toastRef: any = useRef();

  // Lifecycle
  useEffect(() => {
    gettingProfile();
  }, []);

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
            productID: res.data.code,
          });
        }, 500);
      } else {
        toastRef.current.show(res.message, 1500);
      }
    });
  };

  const gettingProfile = () => {
    getProfile(token);
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
      <Toast ref={toastRef} />
      <Header
        callback={onBack}
        content={{id: 'Top Up Setoran', en: 'Top Up Deposit'}}
      />
      <SubHeader />
      <Content
        balance={oc(profile).balance(0)}
        onSubmit={() => onTopUp(isAmount)}
        modalInput={onModal}
        modalSelect={() => onModal('select')}
        amount={isAmount}
      />
      <Modal
        isVisible={isVisible}
        onDismiss={() => setVisible(null)}
        onSave={(_1: number) => onSave(_1)}
        model={isModel}
      />
    </HighSafeArea>
  );
};
