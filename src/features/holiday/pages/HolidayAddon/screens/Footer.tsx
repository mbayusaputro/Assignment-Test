import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '../../../../../components';
import {styles} from '../components';
import {moneyFormat} from '../../../../../helpers/helpers';

type Props = {
  price: number;
  onContinue: () => void;
};

export default (props: Props) => {
  return (
    <View style={[styles.footer, styles.rowBetween]}>
      <View>
        <Text
          style={styles.textSubTitle}
          content={{id: 'Jumlah', en: 'Total'}}
        />
        <Text style={styles.textBlue}>Rp{moneyFormat(props.price)}</Text>
      </View>
      <View>
        <Button
          onPress={props.onContinue}
          isUpperCase={true}
          content={{id: 'Lanjutkan', en: 'Continue'}}
          customStyle={styles.btnFooter}
        />
      </View>
    </View>
  );
};
