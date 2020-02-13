import React from 'react';
import LottieView from 'lottie-react-native';
import {View} from 'react-native';
import {Text} from '../../../../../components';
import {styles} from '../components';
import {payment_success} from '../../../interface/strings';

const email = 'bayuputra9a@gmail.com';

export default () => (
  <View style={styles.center}>
    <LottieView
      autoPlay
      loop={false}
      style={styles.img}
      source={require('../../../../../assets/animation/correct_check.json')}
    />
    <Text style={styles.textTitleBold} content={payment_success} />
    {/* <Text style={styles.textSubTitle}>{email}</Text> */}
    <View style={[styles.hr, styles.vertical]} />
    <View style={[styles.vertical, styles.content]}>
      <Text
        style={styles.textSubTitle}
        content={{
          id: `Silakan periksa kotak masuk email / folder spam Anda untuk mendapatkan E-Ticket`,
          en: `Please check your email inbox/spam folder to obtain E-Ticket`,
        }}
      />
    </View>
  </View>
);
