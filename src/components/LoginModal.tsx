import React, {useState} from 'react';
import {TouchableOpacity as Touch, StyleSheet, View} from 'react-native';
import {google, facebook} from 'react-native-simple-auth';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
// Redux
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionSignIn, actionGetProfile} from '../reduxs/profile/action';
import {
  getProfile,
  getFetchSignIn,
  getFetchProfile,
} from '../reduxs/profile/selector';
// Component
import Card from './Card';
import Text from './Text';
import Imaging from './Imaging';
import fonts from '../constants/Fonts';
import {TITLE_FONT_SIZE} from '../constants/TextSize';
import {InputText, InputPassword} from './InputText';
import Button from './Button';
import normalize from '../constants/normalize';
import {Color} from '../constants/Color';
import {validateEmailFormat} from '../helpers/helpers';
import {googleAndroid, facebookConf} from '../services/signinProvider';

type Props = {
  isVisible: boolean;
  onDismiss: () => void;
  callbackLogin: (item: any) => void;
  profile?: any;
  signInAction?: (item: any) => Promise<void>;
  getProfileAction?: (item: any) => Promise<void>;
  fetchSignIn?: boolean;
  fetchProfile?: boolean;
};

const LoginModal = (props: Props): any => {
  // State
  const [email, setEmail] = useState('');
  const [validMail, setValidMail] = useState(true);
  const [password, setPassword] = useState('');

  // CHANGE TEXT
  const onChangeText = (text: string, type: string) => {
    if (type === 'email') {
      let valid: boolean = validateEmailFormat(text);
      setEmail(text);
      setValidMail(valid);
    } else {
      setPassword(text);
    }
  };

  // ON GOOGLE LOGIN
  const pressGoogle = () => {
    google(googleAndroid)
      .then((res: any) => {
        signinSocmed(res.credentials.id_token, 'google');
      })
      .catch((err: any) => {
        alert(JSON.stringify(err));
      });
  };

  // ON FACEBOOK LOGIN
  const pressFacebook = () => {
    facebook(facebookConf)
      .then((res: any) => {
        signinSocmed(res.credentials.access_token, 'facebook');
      })
      .catch((err: any) => {
        alert(JSON.stringify(err));
      });
  };

  // ON PRESSED LOGIN FOR SOCMED
  const signinSocmed = (code: string, authType: string) => {
    const payload = {
      email: '',
      password: '',
      code,
      authType,
    };
    lastSignIn(payload);
  };

  // ON PRESSED GENERAL LOGIN
  const onGeneralLogin = () => {
    const payload = {
      email,
      password,
    };
    if (email !== '' && password !== '') {
      lastSignIn(payload);
    } else {
      alert('Please enter all field');
    }
  };

  // LAST STEP LOGIN FOR ALL
  const lastSignIn = (payload: object) => {
    const {signInAction, getProfileAction} = props;
    signInAction(payload).then((res: any) => {
      if (res.type === 'SIGNIN_FAILED') {
        alert(res.message);
      } else {
        const tokenNow = res.data.access_token;
        setTimeout(() => {
          getProfileAction(tokenNow).then((res2: any) => {
            if (res2.type === 'GETPROFILE_FAILED') {
              alert(res2.message);
            } else {
              props.callbackLogin(res2.data);
            }
          });
        }, 500);
      }
    });
  };

  // Main Render
  return (
    <Modal
      useNativeDriver
      propagateSwipe
      animationIn="bounceIn"
      animationOut="fadeOut"
      isVisible={props.isVisible}
      style={styles.modal}
      onBackButtonPress={props.onDismiss}
      onBackdropPress={props.onDismiss}>
      <Card
        style={[
          styles.card,
          props.profile !== null ? {backgroundColor: Color.tealBlue} : null,
        ]}>
        {props.fetchProfile || props.fetchSignIn ? (
          <LottieView
            autoPlay
            loop
            source={require('../assets/animation/loading_original.json')}
            style={styles.loadingImage}
          />
        ) : props.profile === null ? (
          <View style={{width: '100%', alignItems: 'center'}}>
            <Text
              content={{id: 'Masuk', en: 'Log In'}}
              style={styles.textTitle}
            />

            {/* SOCMED LOGIN */}
            <View style={[styles.vertical, styles.rowBetween]}>
              <Touch
                onPress={pressGoogle}
                activeOpacity={0.75}
                style={styles.btnGoogle}>
                <Imaging
                  source={require('../assets/icons/profile/icon_google.png')}
                  resizeMode="contain"
                  style={styles.iconGoogle}
                />
                <Text style={styles.textSemiBold}>Google</Text>
              </Touch>
              <Touch
                onPress={pressFacebook}
                activeOpacity={0.75}
                style={styles.btnFb}>
                <Icon
                  name="facebook-f"
                  color={Color.white}
                  size={normalize(25)}
                />
                <Text style={styles.textFB}>Facebook</Text>
              </Touch>
            </View>

            <View style={[styles.rowBetween]}>
              <View style={styles.hr} />
              <Text content={{id: 'atau', en: 'or'}} />
              <View style={styles.hr} />
            </View>

            {/* GENERAL LOGIN */}
            <View style={styles.vertical}>
              <View style={{width: '100%'}}>
                <Text>Email</Text>
                <InputText
                  placeholder="Email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  onChangeText={(text: string) => onChangeText(text, 'email')}
                />
                {validMail ? null : (
                  <Text
                    style={styles.textRed}
                    content={{
                      id: 'Mohon masukkan alamat email yang benar',
                      en: 'Please enter a valid email address',
                    }}
                  />
                )}
              </View>
              <View style={{width: '100%'}}>
                <Text content={{id: 'Kata Sandi', en: 'Password'}} />
                <InputPassword
                  placeholder="Password"
                  onChangeText={(text: string) =>
                    onChangeText(text, 'password')
                  }
                />
              </View>
            </View>

            {/* BUTTON */}
            <Button
              content={{id: 'Masuk', en: 'Log In'}}
              customStyle={styles.btnLogin}
              onPress={onGeneralLogin}
            />
          </View>
        ) : (
          <View style={{width: '100%', alignItems: 'center'}}>
            <LottieView
              autoPlay
              loop={false}
              source={require('../assets/animation/correct_check.json')}
              style={styles.loadingImage}
            />
            <Text
              style={[styles.textTitle, {color: Color.white}]}
              content={{id: 'Anda telah Masuk', en: 'You have been Logged In'}}
            />
          </View>
        )}
      </Card>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  profile: getProfile(state),
  fetchSignIn: getFetchSignIn(state),
  fetchProfile: getFetchProfile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      signInAction: (payload: object) => actionSignIn(payload),
      getProfileAction: (token: string) => actionGetProfile(token),
    },
    dispatch,
  );

type DefaultProps = {
  isVisible: boolean;
  onDismiss: () => void;
  callbackLogin: (item: any) => void;
};
const Default = (props: DefaultProps) => (
  <LoginModal
    {...props}
    isVisible={props.isVisible}
    onDismiss={props.onDismiss}
    callbackLogin={(item: any) => props.callbackLogin(item)}
  />
);

export default connect(mapStateToProps, mapDispatchToProps)(Default);

const styles = StyleSheet.create({
  // Layout
  modal: {
    margin: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 15,
    alignItems: 'center',
  },
  vertical: {
    marginVertical: 10,
    width: '100%',
  },
  rowBetween: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  // Text
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
  },
  textSemiBold: {
    fontFamily: fonts.fontSemiBold,
    color: Color.black,
  },
  textFB: {
    fontFamily: fonts.fontSemiBold,
    color: Color.white,
  },
  textRed: {
    color: Color.red,
    fontFamily: fonts.fontRegulerItalic,
  },

  // Component
  btnLogin: {
    width: '100%',
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 0,
  },
  btnGoogle: {
    width: '47.5%',
    backgroundColor: Color.white,
    borderWidth: 1,
    borderColor: Color.mediumgray,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btnFb: {
    backgroundColor: Color.fbColor,
    width: '47.5%',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconGoogle: {
    width: normalize(25),
    height: normalize(25),
  },
  loadingImage: {
    width: normalize(150),
    height: normalize(150),
  },
  hr: {
    width: '40%',
    height: 1,
    backgroundColor: Color.greyish,
    marginHorizontal: 5,
  },
});
