import React from 'react';
import {HighSafeArea} from '../../../../../components';
import Header from './Header';
import Content from './Content';
import {ChangePasswordProps as Props} from '../../../interface/types';
import {InteractionManager} from 'react-native';
import {styles, ModalChange} from '../components';

export default (props: Props) => {
  // State
  const [modal, setModal] = React.useState(false);
  const [currentPassword, setCurrentPassword] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const changeModal = (bool: boolean) => {
    const {fetchChangePassword} = props;
    if (!fetchChangePassword) {
      setModal(bool);
    }
  };

  const onChangePassword = () => {
    const {token, actionChangePasswordUser} = props;
    const payload = {
      current_password: currentPassword,
      password: newPassword,
      confirmation_password: confirmPassword,
    };
    if (
      currentPassword !== '' &&
      newPassword !== '' &&
      confirmPassword !== ''
    ) {
      if (newPassword === confirmPassword) {
        InteractionManager.runAfterInteractions(() => {
          actionChangePasswordUser(token, payload).then((res: any) => {
            if (res.type === 'CHANGEPASSWORDUSER_SUCCESS') {
              setModal(false);
            } else {
              alert(res.message);
            }
          });
        });
      } else {
        alert('Password Combination is not match');
      }
    } else {
      alert('Please enter all field');
    }
  };

  // Main Render
  return (
    <HighSafeArea style={styles.SafeContainer}>
      <Header callback={onBack} />
      <Content onShowModal={() => changeModal(true)} />
      <ModalChange
        isVisible={modal}
        onDismiss={() => changeModal(false)}
        onChangeCurrentPassword={(text: any) => setCurrentPassword(text)}
        onChangeNewPassword={(text: any) => setNewPassword(text)}
        onChangeConfirmPassword={(text: any) => setConfirmPassword(text)}
        onChange={onChangePassword}
        isLoading={props.fetchChangePassword}
      />
    </HighSafeArea>
  );
};
