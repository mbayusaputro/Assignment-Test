import React from 'react';
import {View} from 'react-native';
import {oc} from 'ts-optchain';
import {Text, Button} from '../../../../../components';
import {styles} from '../components';
import {
  startFromLang,
  btnSelectRoomLang,
  btnBookLang,
} from '../../../interface/string';
import {moneyFormat} from '../../../../../helpers/helpers';

type Props = {
  price: number;
  onSelectRoom: () => void;
};

export default (props: Props) => {
  return (
    <View style={[styles.footer, styles.rowBetween]}>
      <View>
        <Text style={styles.textSubTitle} content={startFromLang} />
        <Text style={styles.textPrice}>
          Rp{moneyFormat(oc(props.price)(0))}
        </Text>
      </View>
      <View>
        <Button
          onPress={props.onSelectRoom}
          isUpperCase={true}
          content={btnBookLang}
          customStyle={styles.btnFooter}
        />
      </View>
    </View>
  );
};
