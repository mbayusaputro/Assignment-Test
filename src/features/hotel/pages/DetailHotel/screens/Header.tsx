import React from 'react';
import {Animated, TouchableOpacity as Touch} from 'react-native';
import {styles} from '../components';
import {Header, Imaging} from '../../../../../components';

type Props = {
  header: any;
  opacity: any;
  translate: any;
  headerTitle: any;
};

export default (props: Props) => {
  // Component
  const leftIcon = () => (
    <Touch style={styles.btnBack}>
      <Imaging
        source={require('../../../../../assets/icons/arrow_left_black.png')}
        resizeMode="contain"
        style={styles.iconBack}
      />
    </Touch>
  );

  const rightIcon = () => (
    <Touch onPress={() => alert('asd')} style={styles.btnShare}>
      <Imaging
        source={require('../../../../../assets/icons/share_button.png')}
        resizeMode="contain"
        style={styles.iconShare}
      />
    </Touch>
  );

  // Main Render
  const {header, opacity, translate, headerTitle} = props;
  return (
    <Animated.View style={[styles.header, {height: header}]}>
      <Animated.Image
        style={[
          styles.backgroundImage,
          {opacity, transform: [{translateY: translate}]},
        ]}
        source={{
          uri:
            'https://pix10.agoda.net/hotelImages/104/104972/104972_16072716330044991252.jpg',
        }}
      />
      <Animated.View
        style={[styles.bar, {opacity, transform: [{translateY: translate}]}]}>
        {leftIcon()}
        {rightIcon()}
      </Animated.View>
      <Animated.View style={{transform: [{translateY: headerTitle}]}}>
        <Header
          title="TITLE_HOTEL"
          style={styles.bar}
          textStyle={styles.headerTitle}
          callback={() => {}}
          iconLeft={
            <Imaging
              source={require('../../../../../assets/icons/arrow_left_black.png')}
              resizeMode="contain"
              style={[styles.iconBack, {marginLeft: 10}]}
            />
          }
        />
      </Animated.View>
    </Animated.View>
  );
};
