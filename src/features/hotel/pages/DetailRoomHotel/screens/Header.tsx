import React from 'react';
import {Animated, TouchableOpacity as Touch} from 'react-native';
import {styles} from '../components';
import {Header, Imaging} from '../../../../../components';
import FastImage from 'react-native-fast-image';

type Props = {
  header: any;
  opacity: any;
  translate: any;
  headerTitle: any;
  callback: () => void;
  photo: any;
  title: string;
};

export default (props: Props) => {
  // Component
  const leftIcon = () => (
    <Touch onPress={props.callback} style={styles.btnBack}>
      <Imaging
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
        <Imaging
          source={{uri: props.photo, priority: FastImage.priority.high}}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
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
