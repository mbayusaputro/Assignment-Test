import React from 'react';
import {View, TouchableOpacity as Touch, Platform} from 'react-native';
import {Text, Card, Imaging} from '../../../../../components';
import styles from '../components/styles';
import {ContentProps} from '../interface/types';

export default (props: ContentProps) => {
  const {imgProfile, fullname, email, mobilePre, mobileNo} = props;
  return (
    <View style={[styles.container, styles.content]}>
      <Card style={styles.vertical}>
        <View style={[styles.content, styles.rowDirection]}>
          <Imaging
            source={{uri: imgProfile}}
            resizeMode={Platform.OS === 'ios' ? 'contain' : 'cover'}
            style={styles.imgCircle}
          />
          <Text style={styles.textLight}>Customize your profile picture</Text>
        </View>
        <View style={styles.hr} />
        <View style={styles.content}>
          <View style={styles.rowBetween}>
            <Text style={styles.textBold}>Fullname</Text>
            <Touch>
              <Text style={styles.textBlue}>Edit Profile</Text>
            </Touch>
          </View>
          <View style={styles.hr} />
          <View>
            <Text style={styles.textRegular}>{fullname}</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.vertical}>
        <View style={styles.content}>
          <Text style={styles.textBold}>Email</Text>
          <View style={styles.hr} />
          <View>
            <Text style={styles.textRegular}>{email}</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.vertical}>
        <View style={styles.content}>
          <Text style={styles.textBold}>Mobile Number</Text>
          <View style={styles.hr} />
          <View>
            <Text
              style={styles.textRegular}>{`+${mobilePre} ${mobileNo}`}</Text>
          </View>
        </View>
      </Card>
    </View>
  );
};
