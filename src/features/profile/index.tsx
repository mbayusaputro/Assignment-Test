import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {setLogin} from '../../reduxs/profile/action';
import {getIsLogin} from '../../reduxs/profile/selector';
import {SigninProps} from './interface/types';
import {SignIn} from './pages/Profile';

const mapStateToProps = (state: any) => ({
  isLogin: getIsLogin(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setLogin: (data: any) => setLogin(data),
    },
    dispatch,
  );

const Default = (props: SigninProps) => {
  const {isLogin} = props;
  return isLogin ? (
    <View>
      <Text>My Profile</Text>
    </View>
  ) : (
    <SignIn {...props} />
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);
