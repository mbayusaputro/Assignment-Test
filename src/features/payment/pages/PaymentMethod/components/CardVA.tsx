import React from 'react';
import {View, Image, TouchableOpacity as Touch} from 'react-native';
import styles from '../style';
import fonts from '../../../../../constants/Fonts';
import {Text} from '../../../../../components';

type Props = {
  onPress: () => void;
  logo: any;
  title: string;
};

const Card = (props: Props) => {
  // Props
  const {onPress, logo, title} = props;

  // Main Render
  return (
    <Touch activeOpacity={0.7} style={styles.va} onPress={props.onPress}>
      <View style={styles.rowva}>
        <Image style={styles.logova} source={logo} resizeMode="contain" />
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontFamily: fonts.fontSemiBold, marginHorizontal: 10}}>
            {title}
          </Text>
          <View style={styles.circle} />
        </View>
      </View>
    </Touch>
  );
};

export default Card;
