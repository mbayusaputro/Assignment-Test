import React from 'react';
import LottieView from 'lottie-react-native';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import normalize from '../../../../../constants/normalize';

export default () => (
  <LottieView
    autoPlay
    loop
    source={require('../../../../../assets/animation/empty.json')}
    style={{
      width: WIDTH_SCREEN,
      height: normalize(300),
      alignSelf: 'center',
    }}
  />
);
