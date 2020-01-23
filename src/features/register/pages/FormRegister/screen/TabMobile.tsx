import React from 'react';
import {View, TouchableOpacity as Touch, Platform} from 'react-native';
import {
  Text,
  InputText,
  Button,
  Imaging,
  ButtonLoading,
} from '../../../../../components';
import styles from './styles';
import {TabProps} from '../../../interface/types';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {Color} from '../../../../../constants/Color';
import {scale} from '../../../../../constants/ScaleUtils';

export default (props: TabProps) => {
  const {
    onChangeMobilePre,
    valueMobilePre,
    onChangeMobile,
    onRegisterMobile,
    onFacebook,
    onGoogle,
    loading,
  } = props;
  return (
    <View style={[styles.container, styles.content, styles.rowSpace]}>
      <View>
        <View style={styles.rowBetween}>
          <View style={{width: '15%'}}>
            <InputText
              placeholder="62"
              value={valueMobilePre}
              onChangeText={onChangeMobilePre}
              keyboardType="phone-pad"
              maxLength={4}
            />
          </View>
          <View style={{width: '83%'}}>
            <InputText
              placeholder="Mobile Number"
              onChangeText={onChangeMobile}
              keyboardType="phone-pad"
            />
          </View>
        </View>

        <View style={styles.rowCenter}>
          <AntIcon name="lock" size={30} />
          <Text
            content={{
              id: 'Data anda akan dilindungi dan sangat aman',
              en: 'Your data will be protected and very safe',
            }}
          />
        </View>

        <View style={[styles.vertical, styles.center]}>
          {loading ? (
            <ButtonLoading />
          ) : (
            <Button
              onPress={onRegisterMobile}
              isUpperCase={true}
              customStyle={styles.btn}
              content={{id: 'DAFTAR', en: 'REGISTER'}}
            />
          )}
        </View>

        <View style={[styles.content, styles.rowCenter]}>
          <View style={styles.hr} />
          <Text style={styles.textSmall}>or register with</Text>
          <View style={styles.hr} />
        </View>

        <View style={[[styles.rowBetween, styles.vertical]]}>
          <Touch onPress={onGoogle} style={styles.btnGoogle}>
            <Imaging
              source={require('../../../../../assets/icons/profile/icon_google.png')}
              resizeMode={Platform.OS === 'ios' ? 'contain' : 'cover'}
              style={styles.iconGoogle}
            />
            <Text style={styles.textSemiBold}>Google</Text>
          </Touch>
          <Touch onPress={onFacebook} style={styles.btnFb}>
            <FontAwesomeIcon
              name="facebook-f"
              color={Color.white}
              size={scale(25)}
            />
            <Text style={styles.textFB}>Facebook</Text>
          </Touch>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.textSmall}>
          By Registering, I agree to Asitaaja
        </Text>
        <Text style={styles.textUnderline}>Terms & Conditions</Text>
        <Text style={styles.textSmall}>and</Text>
        <Text style={styles.textUnderline}>Privacy Policy</Text>
      </View>
    </View>
  );
};
