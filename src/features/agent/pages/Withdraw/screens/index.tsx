import React, {useState, useEffect} from 'react';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import {Header} from '../../../../../components/Header';
import Content from './Content';
import {Withdraw as Props} from '../../../interface/types';
import {InteractionManager} from 'react-native';
import {styles, ModalInput, Modal} from '../components';
import {oc} from 'ts-optchain';

export default (props: Props) => {
  // State
  const [isVisible, setVisible] = useState('');
  const [isAmount, setAmount] = useState(0);
  const [isAccountNumber, setAccountNumber] = useState('');
  const [isBank, setBank] = useState({bankName: '', bankCode: ''});

  // Props
  const {
    navigation: {goBack, navigate},
    token,
    actionWithdraw,
    isLoading,
    profile,
  } = props;

  // Function
  const onBack = () => {
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const onSubmit = () => {
    let payload = {
      amount: isAmount,
      bank_account_id: parseInt(isBank.bankCode),
      bank_account_name: isBank.bankName,
      bank_account_no: isAccountNumber,
      source: 'DEPOSIT',
    };
    actionWithdraw(token, payload).then((res: any) => {
      if (res.type === 'WITHDRAW_SUCCESS') {
        console.log(res.data);
      } else {
        console.log(res.message);
      }
    });
  };

  const onSave = (value: any, type: string) => {
    type === 'amount'
      ? setAmount(parseInt(value))
      : type === 'bank'
      ? setBank(value)
      : setAccountNumber(value);
    setVisible('');
  };

  const onModal = (value: string) => {
    setVisible(value);
  };

  // Main Render
  return (
    <HighSafeArea style={styles.SafeContainer}>
      <Header
        callback={onBack}
        content={{id: 'Permintaan Penarikan', en: 'Withdrawal Request'}}
      />
      <Content
        balance={oc(profile).commision(0)}
        onSubmit={() => onSubmit()}
        modalInput={onModal}
        modalSelect={() => onModal('bank')}
        amount={isAmount}
        accountNumber={isAccountNumber}
        bankName={isBank.bankName}
      />
      <LoadingBook isVisible={isLoading} />

      {/* Select Bank Name */}
      <Modal
        isVisible={isVisible === 'bank'}
        onDismiss={() => setVisible('')}
        onSave={(_data: any) => onSave(_data, 'bank')}
      />

      {/* Account Number */}
      <ModalInput
        isVisible={isVisible === 'account_number'}
        onDismiss={() => setVisible('')}
        onSave={(_data: any) => onSave(_data, 'account_number')}
      />

      {/* Enter Amount */}
      <ModalInput
        isVisible={isVisible === 'amount'}
        onDismiss={() => setVisible('')}
        onSave={(_data: any) => onSave(_data, 'amount')}
      />
    </HighSafeArea>
  );
};
