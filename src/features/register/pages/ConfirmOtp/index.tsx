import React from 'react';
import {oc} from 'ts-optchain';
// Redux
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionSignUp2} from '../../../../reduxs/profile/action';
import {
  getFetchSignUp,
  getPayloadSignUp1,
} from '../../../../reduxs/profile/selector';
// Components
import {HighSafeArea, LoadingBook} from '../../../../components';
import {Content, Header} from './screen';
import {Props} from '../../interface/types';
import {InteractionManager, ScrollView} from 'react-native';

const ConfirmOTP = (props: Props) => {
  // State
  const [otp, setOtp] = React.useState('');

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const sendCode = () => {
    const type = getParam('typeNav');
    const payloadBefore = props.payloadSignUp1;
    let payload: any;
    if (type === 'mobile') {
      payload = {
        mobileNoPrefix: oc(payloadBefore).mobileNoPrefix(''),
        mobileNo: oc(payloadBefore).mobileNo(''),
        otp,
      };
    } else if (type === 'email') {
      payload = {
        email: oc(payloadBefore).email(''),
        otp,
      };
    }

    if (otp !== '' || otp.length === 6) {
      goSubmit(payload, type);
    } else {
      alert('Please enter OTP Code until 6 digit');
    }
  };

  const goSubmit = (payload: object, typeNav: string) => {
    const {navigation} = props;
    let typeAPI: string;
    if (typeNav === 'mobile') {
      typeAPI = 'mobileno';
    } else if (typeNav === 'email') {
      typeAPI = 'email';
    }

    props.actionSignUp2(payload, 'apply-verified', typeAPI).then((res: any) => {
      if (res.type === 'REGISTER2_SUCCESS') {
        setTimeout(() => {
          navigation.navigate('SubmitRegister', {typeNav});
        }, 500);
      } else {
        alert(res.message);
      }
    });
  };

  // Main Render
  const {
    navigation: {getParam},
    fetchSignUp,
  } = props;
  return (
    <HighSafeArea>
      <Header callback={onBack} />
      <ScrollView>
        <Content
          type={getParam('typeNav')}
          onChangeText={(text: string) => setOtp(text)}
          onSend={sendCode}
          loading={fetchSignUp}
        />
      </ScrollView>
      <LoadingBook isVisible={props.fetchSignUp} />
    </HighSafeArea>
  );
};

const mapStateToProps = (state: any) => ({
  fetchSignUp: getFetchSignUp(state),
  payloadSignUp1: getPayloadSignUp1(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionSignUp2: (_1: object, _2: string, _3: string) =>
        actionSignUp2(_1, _2, _3),
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmOTP);
