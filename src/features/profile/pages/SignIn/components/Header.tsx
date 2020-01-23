import React from 'react';
import {TouchableOpacity as Touch, StyleSheet} from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {Header} from '../../../../../components';
import {Color} from '../../../../../constants/Color';

type Props = {
  title: string;
  onSetting?: () => void;
};
export default (props: Props) => {
  return (
    <Header
      title={props.title}
      right={
        <Touch style={styles.rightBtn} onPress={props.onSetting}>
          <EntypoIcon
            name="dots-three-vertical"
            color={Color.white}
            size={20}
          />
        </Touch>
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.marineBlue,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightBtn: {
    width: '25%',
    alignItems: 'flex-end',
  },
});
