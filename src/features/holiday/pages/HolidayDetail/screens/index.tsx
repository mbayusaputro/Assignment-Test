import React from 'react';
import {Animated} from 'react-native';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import {
  HEADER_SCROLL_DISTANCE,
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
} from '../components/valueScroll';
import {HolidayDetailContext as Context} from '../components';
import {HighSafeArea} from '../../../../../components';

export default props => {
  const {
    navigation: {getParam},
  } = props;
  const dataParam = getParam('item');
  // State
  const [scrollY] = React.useState(new Animated.Value(0));

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

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
    <HighSafeArea style={{flex: 1}}>
      <Context.Provider
        value={{
          title: dataParam.title,
        }}>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false},
          )}>
          <Content />
        </Animated.ScrollView>
        <Header
          header={headerHeight}
          opacity={imageOpacity}
          translate={imageTranslate}
          headerTitle={headerOpacity}
          callback={onBack}
          photo={dataParam.img}
          title={dataParam.title}
        />
        <Footer price={34124} onSelect={() => alert('Selected Holiday')} />
      </Context.Provider>
    </HighSafeArea>
  );
};
