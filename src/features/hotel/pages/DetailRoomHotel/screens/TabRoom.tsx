import React from 'react';
import {View, ScrollView, TouchableOpacity as Touch} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {Text, Imaging} from '../../../../../components';
import {styles} from '../components';
import {dataFacilities} from '../components/data';
import {Color} from '../../../../../constants/Color';

type Props = {
  title: string;
};

export default (props: Props) => {
  return (
    <ScrollView>
      {/* ======== DETAIL ROOM ======== */}
      <View style={[styles.content, styles.marginTitle]}>
        <Text style={styles.textTitle}>{props.title}</Text>
        <View style={[styles.row, styles.vertical]}>
          {dataFacilities.map((item: any, index: number) => (
            <View key={index} style={[styles.row, {marginRight: 7.5}]}>
              <Imaging
                source={item.photo}
                resizeMode="contain"
                style={styles.imgFacility}
              />
              <Text>{item.title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* ======== ROOM OVERVIEW ======== */}
      <Touch activeOpacity={0.5}>
        <View style={styles.hr} />
        <View style={[styles.rowBetween, styles.vertical, styles.content]}>
          <Text>Room Overview</Text>
          <FeatherIcon name="chevron-down" size={25} />
        </View>
      </Touch>

      {/* ======== ROOM FACILITIES ======== */}
      <Touch activeOpacity={0.5}>
        <View style={styles.hr} />
        <View style={[styles.rowBetween, styles.vertical, styles.content]}>
          <Text>Room Facilities</Text>
          <FeatherIcon name="chevron-down" size={25} />
        </View>
        <View style={styles.hr} />
      </Touch>

      {/* ======== POLICY ======== */}
      <Touch activeOpacity={0.5} style={[styles.vertical, styles.content]}>
        <View
          style={[
            styles.vertical,
            styles.rowBetween,
            styles.cardCancel,
            {alignSelf: 'center'},
          ]}>
          <View style={styles.row}>
            <Imaging
              source={require('../../../../../assets/icons/cancel_policy.png')}
              resizeMode="contain"
              style={styles.iconCancelPolicy}
            />
            <Text>Cancelation Policy</Text>
          </View>
          <FeatherIcon name="chevron-right" size={25} color={Color.tealBlue} />
        </View>
      </Touch>
    </ScrollView>
  );
};