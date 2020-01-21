import React from 'react';
import {View} from 'react-native';
import {Text, Card, Button} from '../../../../../components';
import styles from '../components/style';
import {dataLang} from '../components/data';

type Props = {
  selectedLang: string;
  onChangeLang: (item: any) => void;
};

export default (props: Props) => {
  const {selectedLang, onChangeLang} = props;
  return (
    <View style={styles.container}>
      <Card style={[styles.content, styles.rowBetween]}>
        <View style={{width: '25%'}}>
          <Text>Language</Text>
        </View>
        <View style={[styles.rowBetween, {width: '70%'}]}>
          {dataLang.map((item: any, index: number) => (
            <Button
              key={index}
              customStyle={
                selectedLang === item.id
                  ? styles.btnSelected
                  : styles.btnNonSelected
              }
              customTextStyle={
                selectedLang === item.id ? styles.textWhite : styles.textBlack
              }
              onPress={() => onChangeLang(item)}>
              {item.content}
            </Button>
          ))}
        </View>
      </Card>
    </View>
  );
};
