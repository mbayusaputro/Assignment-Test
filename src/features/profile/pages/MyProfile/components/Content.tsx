import React from 'react';
import {View, TouchableOpacity as Touch, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Text, Card, Imaging} from '../../../../../components';
import {MyProfileProps} from '../../../interface/types';
import {dataMenu} from './data';
import styles from './styles';
import {Color} from '../../../../../constants/Color';

export default (props: MyProfileProps) => {
  const IconRight = () => (
    <Icon name="navigate-next" color={Color.oceanBlue} size={30} />
  );

  const {onLogOut, profile} = props;
  return (
    <View style={[styles.content, styles.container]}>
      {/* Account */}
      <Card>
        <View style={[styles.content, styles.rowDirection]}>
          <Imaging
            source={{uri: profile.photo}}
            resizeMode={Platform.OS === 'ios' ? 'contain' : 'cover'}
            style={styles.imgCircle}
          />
          <View style={styles.leftMargin}>
            <Text style={styles.textExtraBold}>{profile.fullname}</Text>
            <Text style={styles.textSmall}>{profile.email}</Text>
          </View>
        </View>
        <View style={styles.hr} />
        <Touch style={[styles.content, styles.rowBetween]}>
          <View style={styles.rowBetween}>
            <Text style={styles.rightMargin}>ICON</Text>
            <Text style={styles.textBold}>Account Setting</Text>
          </View>
          <IconRight />
        </Touch>
      </Card>

      {/* Menu */}
      <Card style={styles.vertical}>
        {dataMenu.map((item: any, index: number) => (
          <View key={index}>
            <Touch style={[styles.content, styles.rowBetween]}>
              <View style={styles.rowBetween}>
                <Text style={styles.rightMargin}>ICON</Text>
                <Text style={styles.textBold}>{item.title}</Text>
              </View>
              <IconRight />
            </Touch>
            {index !== dataMenu.length - 1 ? <View style={styles.hr} /> : null}
          </View>
        ))}
      </Card>

      {/* Log Out */}
      <Card style={styles.vertical}>
        <Touch onPress={onLogOut} style={[styles.content, styles.rowBetween]}>
          <View style={styles.rowBetween}>
            <Text style={styles.rightMargin}>ICON</Text>
            <Text style={styles.textBold}>Log Out</Text>
          </View>
        </Touch>
      </Card>
    </View>
  );
};
