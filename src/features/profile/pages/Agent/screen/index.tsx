import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  HighSafeArea,
  AlertModal,
  LoadingBook,
  SubHeader,
} from '../../../../../components';
import {Content, Header} from '../components';
import {SigninProps} from '../../../interface/types';
import {Color} from '../../../../../constants/Color';

export default (props: SigninProps) => {
  // State
  const [modal, setModal] = React.useState(false);
  // Props
  const {
    navigation: {navigate},
    logout,
    profile,
    fetchProfile,
  } = props;

  // Function
  const showModalLogout = () => {
    setModal(true);
  };
  const onLogOut = () => {
    setModal(false);
    setTimeout(() => logout(), 500);
  };

  const navProfileEdit = () => {
    navigate('ProfileEdit');
  };
  const navigateMenu = (menu: any) => {
    navigate(menu);
  };

  // Main Render
  const {container} = styles;
  return (
    <HighSafeArea style={styles.container}>
      <Header onSetting={() => navigateMenu('MainSetting')} />
      <ScrollView>
        <View style={container}>
          <SubHeader />
          <Content
            {...props}
            profile={profile}
            onLogOut={showModalLogout}
            goToProfileEdit={navProfileEdit}
            navigateMenu={(menu: any) => navigateMenu(menu)}
          />
        </View>
      </ScrollView>
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
