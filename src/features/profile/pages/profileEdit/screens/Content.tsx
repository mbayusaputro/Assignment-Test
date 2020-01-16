import React from 'react';
import {View, TouchableOpacity as Touch, Platform} from 'react-native';
import dayjs from 'dayjs';
import {Text, Card, Imaging} from '../../../../../components';
import styles from '../components/styles';
import {ContentProps} from '../interface/types';

export default (props: ContentProps) => {
  const {
    onImage,
    imgProfile,
    salutation,
    fullname,
    email,
    mobilePre,
    mobileNo,
    address,
    birthDate,
  } = props;
  return (
    <View style={[styles.container, styles.content]}>
      <Card style={styles.vertical}>
        <View style={[styles.content, styles.rowDirection]}>
          <Touch onPress={onImage} activeOpacity={0.9}>
            <Imaging
              source={{uri: imgProfile}}
              resizeMode={Platform.OS === 'ios' ? 'contain' : 'cover'}
              style={styles.imgCircle}
            />
          </Touch>
          <Text style={styles.textLight}>Customize your profile picture</Text>
        </View>
        <View style={styles.hr} />
        <View style={styles.content}>
          <View style={styles.rowBetween}>
            <Text style={styles.textBold}>Fullname</Text>
            <Touch onPress={props.onShowModalEdit}>
              <Text style={styles.textBlue}>Edit Profile</Text>
            </Touch>
          </View>
          <View style={styles.hr} />
          <View style={styles.rowBetween}>
            <Text style={styles.textRegular}>
              {salutation}. {fullname}
            </Text>
            <Text style={styles.textRegular}>
              {dayjs(birthDate).format('D MMMM, YYYY')}
            </Text>
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
          <Text style={styles.textRegular}>{`+${mobilePre} ${mobileNo}`}</Text>
        </View>
      </Card>

      <Card style={styles.vertical}>
        <View style={styles.content}>
          <Text style={styles.textBold}>Address</Text>
          <View style={styles.hr} />
          <Text style={styles.textRegular}>{address}</Text>
        </View>
      </Card>
    </View>
  );
};
