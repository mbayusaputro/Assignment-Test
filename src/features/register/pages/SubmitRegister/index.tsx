import React from 'react';
import {InteractionManager} from 'react-native';
import {NavigationActions, StackActions, ScrollView} from 'react-navigation';
import {oc} from 'ts-optchain';
import _ from 'lodash';
// Redux
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionSignUp3} from '../../../../reduxs/profile/action';
import {actionListCountry} from '../../../../reduxs/master/action';
import {
  getFetchSignUp,
  getPayloadSignUp1,
} from '../../../../reduxs/profile/selector';
import {getFetchCountry, getCountry} from '../../../../reduxs/master/selector';
// Components
import {HighSafeArea, LoadingBook, AlertModal} from '../../../../components';
import {Content, Header} from './screen';
import {ModalContext, dataCountry} from './components';
import {Props} from '../../interface/types';
import {validateEmailFormat} from '../../../../helpers/helpers';

const SubmitRegister = (props: Props) => {
  // State
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [validMail, setValidMail] = React.useState(true);
  const [mobilePre, setMobilePre] = React.useState('62');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [nationality, setNationality] = React.useState('');
  const [theCountry, setTheCountry] = React.useState();
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [modal, showModal] = React.useState(false);
  const [modalOut, setModalOut] = React.useState(false);
  const [selectedCountry, chooseCountry] = React.useState('');
  const [typeScreen, setTypeScreen] = React.useState(); // for getTypeNavigation

  React.useEffect(() => {
    checkTypeScreen();
    // listCountry();
  });

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const checkTypeScreen = () => {
    const {
      navigation: {getParam},
      payloadSignUp1,
    } = props;
    const theType = getParam('typeNav');
    if (theType === 'email') {
      const emailProps = oc(payloadSignUp1).email('yourname@mail.com');
      setEmail(emailProps);
    } else if (theType === 'mobile') {
      const mobilePreProps = oc(payloadSignUp1).mobileNoPrefix('62');
      const mobileNumProps = oc(payloadSignUp1).mobileNo('');
      setMobilePre(mobilePreProps);
      setMobileNumber(mobileNumProps);
    }
    setTypeScreen(theType);
  };

  const changeEmail = (txt: string) => {
    let checkMail = validateEmailFormat(txt);
    if (checkMail) {
      setEmail(txt);
      setValidMail(true);
    } else {
      setEmail(txt);
      setValidMail(false);
    }
  };

  const onModal = (show: boolean) => {
    if (!show) {
      setNationality('');
    }
    showModal(show);
  };

  // const listCountry = () => {
  //   const { country } = props;
  //   if (country.length !== 0) {
  //     props.actionListCountry();
  //   }
  // };

  const searchCountry = (txt: string) => {
    let findCountry: any = _.find(dataCountry, ['nicename', txt]);
    let array: any = new Array(0);
    array.push(findCountry);
    setNationality(array);
  };

  const setUpCountry = () => {
    showModal(false);
    const text: any = nationality[0];
    setTheCountry(text);
  };

  const submit = () => {
    const payload = {
      fullname,
      passwd: password,
      mobileNoPrefix: mobilePre,
      mobileNo: mobileNumber,
      email,
      countryID: 100,
    };
    if (
      fullname !== '' &&
      password !== '' &&
      mobilePre !== '' &&
      mobileNumber !== '' &&
      email !== ''
    ) {
      if (confirmPassword !== password) {
        alert('Password combination is not match');
      } else {
        props.actionSignUp3(payload).then((res: any) => {
          if (res.type === 'REGISTER3_SUCCESS') {
            setModalOut(true);
          } else {
            alert(res.message);
          }
        });
      }
    } else {
      alert('Please enter all field');
    }
  };

  const goHome = () => {
    setModalOut(false);
    const {
      navigation: {dispatch},
    } = props;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Tabs',
          action: NavigationActions.navigate({
            routeName: 'Profile',
          }),
        }),
      ],
    });
    setTimeout(() => dispatch(resetAction), 500);
  };

  // Main Render
  return (
    <HighSafeArea>
      <Header callback={onBack} />
      <ModalContext.Provider
        value={{countryID: oc(theCountry).nicename(''), isVisible: modal}}>
        <ScrollView>
          <Content
            onChangeFullname={(text: string) => setFullname(text)}
            onChangeEmail={(text: string) => changeEmail(text)}
            onChangeMobilePrefix={(text: string) => setMobilePre(text)}
            onChangeMobileNumber={(text: string) => setMobileNumber(text)}
            onChangeNationality={(text: string) => searchCountry(text)}
            onChangePassword={(text: string) => setPassword(text)}
            onChangeConfirmPassword={(text: string) => setConfirmPassword(text)}
            valueEmail={email}
            validEmail={validMail}
            typeEmail={typeScreen === 'email' ? false : true}
            typeMobile={typeScreen === 'mobile' ? false : true}
            valueMobilePrefix={mobilePre}
            valueMobileNumber={mobileNumber}
            onSubmit={submit}
            // Modal
            onShowModal={() => onModal(true)}
            onDismiss={() => onModal(false)}
            onSelectCountry={setUpCountry}
            dataCountry={nationality}
            titleCountry={theCountry}
            // Loading
            loading={props.fetchSignUp}
          />
        </ScrollView>
      </ModalContext.Provider>
      <LoadingBook isVisible={props.fetchSignUp} />
      <AlertModal
        isVisible={modalOut}
        title={{id: 'Sukses', en: 'Success'}}
        desc={{
          id: 'Berhasil, anda dapat masuk sekarang',
          en: 'Successful, you can login right now',
        }}
        btnOk={{id: 'OK', en: 'OK'}}
        onOk={goHome}
      />
    </HighSafeArea>
  );
};

const mapStateToProps = (state: any) => ({
  fetchSignUp: getFetchSignUp(state),
  fetchCountry: getFetchCountry(state),
  country: getCountry(state),
  payloadSignUp1: getPayloadSignUp1(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionSignUp3: (_1: object) => actionSignUp3(_1),
      actionListCountry: () => actionListCountry(),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(SubmitRegister);
