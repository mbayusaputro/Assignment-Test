import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import ScrollPicker from 'react-native-wheel-scroll-picker';
import _ from 'lodash';
import {Text, Button} from '../../../../../components';
import {styles} from '../components';
import {Color} from '../../../../../constants/Color';
import {dataTotal, dataDummy} from '../components/data';

type Props = {
  onDismiss: () => void;
  selectedRoom: number;
  selectedGuest: number;
  totalGuest: number;
  onChangeRoom: (data: any) => void;
  onChangeGuest: (data: any) => void;
};

const closeLang = {id: 'Kamar & Tamu', en: 'Room & Guest'};
const titleRoom = {id: 'Jumlah Kamar', en: 'Number of Room'};
const titleGuest = {id: 'Jumlah Tamu', en: 'Number of Guest'};

export default (props: Props) => {
  const {
    onDismiss,
    selectedRoom,
    selectedGuest,
    totalGuest,
    onChangeRoom,
    onChangeGuest,
  } = props;
  return (
    <View style={styles.contentModalCheckout}>
      <Touch style={styles.close} onPress={onDismiss}>
        <Text style={styles.textClose} content={closeLang} />
      </Touch>
      <View style={styles.rowBetween}>
        {dataDummy.map((item: string, index: number) => (
          <View key={index} style={{width: '47.5%'}}>
            <View style={[styles.vertical, styles.center]}>
              <Text content={item === 'room' ? titleRoom : titleGuest} />
            </View>
            <View style={[styles.vertical, styles.rowBetween]}>
              <ScrollPicker
                dataSource={
                  item === 'room'
                    ? _.chunk(dataTotal, totalGuest)[0]
                    : dataTotal
                }
                selectedIndex={item === 'room' ? selectedRoom : selectedGuest}
                onValueChange={(data: any, id: number) =>
                  item === 'room' ? onChangeRoom(data) : onChangeGuest(data)
                }
                wrapperHeight={100}
                wrapperWidth={150}
                itemColor={Color.black}
                itemHeight={60}
                highlightBorderWidth={1}
                highlightColor={Color.labelgray}
              />
            </View>
          </View>
        ))}
      </View>
      <Button
        isUpperCase
        onPress={props.onDismiss}
        content={{id: 'Selesai', en: 'done'}}
        customStyle={styles.btnFooter}
        fullWidth
      />
    </View>
  );
};