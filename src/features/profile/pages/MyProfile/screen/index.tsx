import React from 'react';
import {InteractionManager, View, StyleSheet, Alert} from 'react-native';
import {HighSafeArea} from '../../../../../components';
import {Content, Header} from '../components';
import {SigninProps} from '../../../interface/types';
import {Color} from '../../../../../constants/Color';

export default (props: SigninProps) => {
  // Function
  const logOut = () => {
    const {logout} = props;
    const alert = Alert.alert(
      'My Account',
      'Are you sure you want to log out?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => logout(),
        },
      ],
    );
    InteractionManager.runAfterInteractions(() => alert);
  };
  const navProfileEdit = () => {
    const {
      navigation: {navigate},
    } = props;
    navigate('ProfileEdit');
  };

  // Main Render
  const {container} = styles;
  const {profile} = props;
  return (
    <HighSafeArea>
      <View style={container}>
        <Header />
        <Content
          {...props}
          profile={profile}
          onLogOut={logOut}
          goToProfileEdit={navProfileEdit}
        />
      </View>
    </HighSafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.backWhite,
    flex: 1,
  },
});
