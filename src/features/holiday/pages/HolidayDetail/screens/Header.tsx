import React from 'react';
import {Animated, TouchableOpacity as Touch, Image} from 'react-native';
import styles from '../components/styles';
import {Imaging, Header, Text} from '../../../../../components';
import FastImage from 'react-native-fast-image';

type Props = {
  callback: () => void;
  onShowImage: () => void;
  header: any;
  opacity: any;
  translate: any;
  headerTitle: any;
  photo: string;
  title: string;
};

export default (props: Props) => {
  // Component
  const leftIcon = () => (
    <Touch onPress={props.callback} style={styles.btnBack}>
      <Image
        source={require('../../../../../assets/icons/arrow_left_black.png')}
        resizeMode="contain"
        style={styles.iconBack}
      />
    </Touch>
  );

  // const rightIcon = () => (
  //   <Touch onPress={() => alert('asd')} style={styles.btnShare}>
  //     <Imaging
  //       source={require('../../../../../assets/icons/share_button.png')}
  //       resizeMode="contain"
  //       style={styles.iconShare}
  //     />
  //   </Touch>
  // );

  // Main Render
  const {header, opacity, translate, headerTitle, title} = props;
  return (
    <Animated.View style={[styles.header, {height: header}]}>
      <Animated.View
        style={[
          styles.backgroundImage,
          {opacity, transform: [{translateY: translate}]},
        ]}>
        <Touch
          onPress={props.onShowImage}
          activeOpacity={0.5}
          style={styles.backgroundImage}>
          <Image
            source={{uri: props.photo}}
            style={styles.backgroundImage}
            resizeMode="contain"
          />
          <Animated.View style={styles.centerImage}>
            <Text
              style={[styles.textMedium, styles.textWhite]}
              content={{
                id: 'Tampilkan gambar lebih banyak',
                en: 'Show more image',
              }}
            />
          </Animated.View>
        </Touch>
        {leftIcon()}
        {/* {rightIcon()} */}
      </Animated.View>
      <Animated.View style={{transform: [{translateY: headerTitle}]}}>
        <Header
          title={title}
          style={styles.bar}
          textStyle={styles.headerTitle}
          callback={props.callback}
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
