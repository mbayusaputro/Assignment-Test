import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '../../../../../components';
import {styles} from '../components';
import {startFromLang, btnSelectRoomLang} from '../../../interface/string';
import {moneyFormat} from '../../../../../helpers/helpers';

export default () => {
  return (
    <View style={[styles.footer, styles.rowBetween]}>
      <View>
        <Text style={styles.textSubTitle} content={startFromLang} />
        <Text style={styles.textBlue}>Rp{moneyFormat(3515400)}</Text>
      </View>
      <View>
        <Button
          isUpperCase={true}
          content={btnSelectRoomLang}
          customStyle={styles.btnFooter}
        />
      </View>
    </View>
  );
};
