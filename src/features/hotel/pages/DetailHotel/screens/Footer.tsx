import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '../../../../../components';
import {styles} from '../components';
import {startFromLang, btnSelectRoomLang} from '../../../interface/string';
import {moneyFormat} from '../../../../../helpers/helpers';
import {oc} from 'ts-optchain';

type Props = {
  price: number;
  onSelectHotel: () => void;
};

export default (props: Props) => {
  return (
    <View style={[styles.footer, styles.rowBetween]}>
      <View>
        <Text style={styles.textSubTitle} content={startFromLang} />
        <Text style={styles.textBlue}>Rp{moneyFormat(oc(props.price)(0))}</Text>
      </View>
      <View>
        <Button
          onPress={props.onSelectHotel}
          isUpperCase={true}
          content={btnSelectRoomLang}
          customStyle={styles.btnFooter}
        />
      </View>
    </View>
  );
};