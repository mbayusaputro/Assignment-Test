import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, View} from 'react-native';
import Card from './Card';
import Text from './Text';
import Button from './Button';
import fonts from '../constants/Fonts';
import {
  TITLE_FONT_SIZE,
  MEDIUM_FONT_SIZE,
  HEADER_FONT_SIZE,
} from '../constants/TextSize';
import {Color} from '../constants/Color';

type Props = {
  desc: {id: string; en: string};
  title: {id: string; en: string};
  isVisible: any;
  qna?: boolean;
  btnOk?: {id: string; en: string};
  btnCancel?: {id: string; en: string};
  onOk?: () => void;
  onDismiss?: () => void;
};

export default (props: Props) => {
  const Content = () => (
    <Card style={styles.content}>
      <Text style={styles.textTitle} content={props.title} />
      <Text style={styles.textSubTitle} content={props.desc} />
      <View style={styles.vertical}>
        <Button
          onPress={props.onOk}
          type="primary"
          content={props.btnOk}
          fullWidth
          customStyle={styles.btn}
        />
        {props.qna && (
          <Button
            onPress={props.onDismiss}
            type="third"
            content={props.btnCancel}
            fullWidth
            customStyle={[styles.btn]}
          />
        )}
      </View>
    </Card>
  );

  const MyContent = React.memo(Content);

  return (
    <Modal
      useNativeDriver={true}
      animationIn="bounceIn"
      animationOut="bounceOut"
      style={styles.modal}
      isVisible={props.isVisible}
      onBackdropPress={props.onDismiss}
      onBackButtonPress={props.onDismiss}
      children={<MyContent />}
    />
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  content: {
    padding: 15,
    alignItems: 'center',
    width: '90%',
  },
  vertical: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
    color: Color.tealBlue,
  },
  textSubTitle: {
    fontFamily: fonts.fontReguler,
    fontSize: HEADER_FONT_SIZE,
    textAlign: 'center',
    paddingTop: 5,
  },
  btn: {
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
  },
});
