import React from 'react';
import Header from './Header';
import {View, Animated} from 'react-native';
import {
  HEADER_SCROLL_DISTANCE,
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
} from '../components/valueScroll';

type Props = {
  callback: () => void;
};

export default (props: Props) => {
  // State
  const [scrollY, setScrollY] = React.useState(new Animated.Value(0));

  // Scroll Animated
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [-50, 0],
    extrapolate: 'clamp',
  });

  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  // Main Render
  return (
    <View>
      <Header
        header={headerHeight}
        opacity={imageOpacity}
        translate={imageTranslate}
        headerTitle={headerOpacity}
        callback={props.callback}
        photo={
          'https://r-cf.bstatic.com/images/hotel/max1024x768/625/62570076.jpg'
        }
        title={'TITLE_HOTEL'}
      />
    </View>
  );
};
