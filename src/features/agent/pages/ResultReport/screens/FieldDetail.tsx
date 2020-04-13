import React from 'react';
import {View} from 'react-native';
import {Text, Card} from '../../../../../components';
import styles from '../components/styles';
import {FieldDetailProps as Props} from '../../../interface/types';

export default (props: Props) => {
  // Props
  const {label1, label2, label3, label4, sub1, sub2, sub3, sub4} = props;

  return (
    <Card style={styles.card2}>
      <Text
        style={[styles.textBlue, styles.textGrey]}
        content={{id: label1.id, en: label1.en}}
      />
      <Text style={[styles.textBold, styles.top]}>{sub1}</Text>
      <View style={styles.line} />
      <Text
        style={[styles.textBlue, styles.textGrey]}
        content={{id: label2.id, en: label2.en}}
      />
      <Text style={[styles.textBold, styles.top]}>{sub2}</Text>
      <View style={styles.line} />
      <Text
        style={[styles.textBlue, styles.textGrey]}
        content={{id: label3.id, en: label3.en}}
      />
      <Text
        style={
          label4
            ? [styles.textBold, {color: '#a2195b'}]
            : [styles.textBold, styles.top]
        }>
        {sub3}
      </Text>
      {label4 ? (
        <View>
          <View style={styles.line} />
          <Text
            style={[styles.textBlue, styles.textGrey]}
            content={{id: label4.id, en: label4.en}}
          />
          <Text style={[styles.textBold, styles.top]}>{sub4}</Text>
        </View>
      ) : (
        []
      )}
    </Card>
  );
};
