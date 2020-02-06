import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, Image, View} from 'react-native';
import {DotIndicator} from 'react-native-indicators';
import Card from './Card';
import Text from './Text';
import normalize from '../constants/normalize';
import fonts from '../constants/Fonts';
import {MEDIUM_FONT_SIZE, TITLE_FONT_SIZE} from '../constants/TextSize';
import {Color} from '../constants/Color';

type Props = {
  isVisible: any;
};

export default (props: Props) => {
  const Content = () => {
    return (
      <Card style={styles.content}>
        <Image
          source={require('../assets/img/loading.png')}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.vertical}>
          <Text
            style={styles.textTitle}
            content={{id: 'Santai sejenak', en: 'Relaxed for a moment'}}
          />
          <Text
            style={styles.textSubTitle}
            content={{
              id:
                'Kami sedang memproses pemesanan Anda. Ini mungkin memakan waktu beberapa menit.',
              en:
                'We are currently processing your booking. This may take a few minutes.',
            }}
          />
        </View>
        <DotIndicator color={Color.oceanBlue} style={styles.vertical} />
      </Card>
    );
  };

  const MyContent = React.memo(Content);

  // Main Render
  return (
    <Modal
      useNativeDriver={true}
      animationIn="zoomIn"
      animationOut="bounceOut"
      style={styles.modal}
      isVisible={props.isVisible}
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
    marginVertical: 10,
  },
  image: {
    width: normalize(150),
    height: normalize(150),
  },
  textTitle: {
    fontFamily: fonts.fontBold,
    fontSize: TITLE_FONT_SIZE,
    textAlign: 'center',
  },
  textSubTitle: {
    fontSize: MEDIUM_FONT_SIZE,
    textAlign: 'center',
  },
});
