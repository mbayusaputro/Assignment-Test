import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet, Image, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Card from './Card';
import Text from './Text';
import normalize from '../constants/normalize';
import fonts from '../constants/Fonts';
import {MEDIUM_FONT_SIZE, TITLE_FONT_SIZE} from '../constants/TextSize';

type Props = {
  isVisible: any;
  type: 'flight' | 'hotel';
};

export default (props: Props) => {
  const typeLoading = () => {
    if (props.type === 'flight') {
      return (
        <LottieView
          loop
          autoPlay
          style={styles.image}
          source={require('../assets/animation/loading_plane.json')}
        />
      );
    } else if (props.type === 'hotel') {
      return (
        <Image
          source={require('../assets/img/loading.png')}
          resizeMode="contain"
          style={styles.image}
        />
      );
    }
  };

  const Content = () => {
    return (
      <Card style={styles.content}>
        {typeLoading()}
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
