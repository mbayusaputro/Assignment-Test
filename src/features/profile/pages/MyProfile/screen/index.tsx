import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HighSafeArea, AlertModal, LoadingBook} from '../../../../../components';
import {Content, Header} from '../components';
import {SigninProps} from '../../../interface/types';
import {Color} from '../../../../../constants/Color';

export default (props: SigninProps) => {
  // State
  const [modal, setModal] = React.useState(false);

  // Function
  const showModalLogout = () => {
    setModal(true);
  };
  const onLogOut = () => {
    setModal(false);
    const {logout} = props;
    setTimeout(() => logout(), 500);
  };

  const navProfileEdit = () => {
    const {
      navigation: {navigate},
    } = props;
    navigate('ProfileEdit');
  };
  const navigateMenu = (menu: any) => {
    const {navigation} = props;
    navigation.navigate(menu);
  };

  // Main Render
  const {container} = styles;
  const {profile, fetchProfile} = props;
  return (
    <HighSafeArea>
      <View style={container}>
        <Header onSetting={() => navigateMenu('MainSetting')} />
        <Content
          {...props}
          profile={profile}
          onLogOut={showModalLogout}
          goToProfileEdit={navProfileEdit}
          navigateMenu={(menu: any) => navigateMenu(menu)}
        />
      </View>
      <AlertModal
        qna={true}
        isVisible={modal}
        title={{id: 'Keluar', en: 'Log Out'}}
        desc={{
          id: 'Anda yakin ingin keluar?',
          en: 'Are you sure want log out?',
        }}
        btnOk={{id: 'Ya, keluar sekarang', en: 'Yes, log out now'}}
        btnCancel={{id: 'Batal', en: 'Cancel'}}
        onDismiss={() => setModal(false)}
        onOk={onLogOut}
      />
      <LoadingBook isVisible={fetchProfile} />
    </HighSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.backWhite,
    flex: 1,
  },
});
