import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text} from '../../../../../components';
import fonts from '../../../../../constants/Fonts';
import {Color} from '../../../../../constants/Color';
import {TITLE_FONT_SIZE} from '../../../../../constants/TextSize';

const alertLang = {
  id: `* Harap jangan keluar dari halaman ini sampai proses pembayaran Anda
selesai. Proses pembayaran ini memakan waktu, pastikan untuk memasukkan data
benar.`,
  en: `*Please do not back from this page until your payment process is
completed. This payment process take, make sure to enter data
correctly.`,
};

export default () => (
  <Card style={styles.content}>
    <Text style={styles.textTitle} content={{id: 'Peringatan', en: 'Alert'}} />
    <Text style={styles.textSubTitle} content={alertLang} />
  </Card>
);

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    padding: 15,
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    color: Color.tealBlue,
    fontSize: TITLE_FONT_SIZE,
  },
  textSubTitle: {
    fontFamily: fonts.fontRegulerItalic,
    color: Color.red,
    textAlign: 'center',
  },
});
