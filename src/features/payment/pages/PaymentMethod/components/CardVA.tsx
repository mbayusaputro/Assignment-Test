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
    <Touch activeOpacity={0.7} onPress={onPress}>
      <View style={[styles.card, styles.rowva]}>
        {title === 'Deposit' ? (
          <Text
            style={{
              fontFamily: fonts.fontBold,
              fontSize: 20,
              color: '#a2195b',
            }}>
            {logo}
          </Text>
        ) : (
          <Image style={styles.logova} source={logo} resizeMode="contain" />
        )}
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
