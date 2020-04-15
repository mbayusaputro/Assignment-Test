import React from 'react';
import {View, StyleSheet, Text, ImageSourcePropType} from 'react-native';
import Modal from 'react-native-modal';
import {Button, Card, Imaging} from '../../components';

export type Props = {
  isVisible: boolean;
  onDismiss: () => void;
  onPress: () => void;
  title: string;
  img: ImageSourcePropType;
};

const ModalSuccess = (props: Props) => {
  // Props
  const {isVisible, onDismiss, onPress, title, img} = props;

  // Main Render
  return (
    <Modal
      isVisible={isVisible}
      backdropColor={'#222'}
      onBackdropPress={onDismiss}
      onBackButtonPress={onDismiss}
      style={{flex: 1, justifyContent: 'flex-end', margin: 0}}>
      <View style={styles.container}>
        <Card style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <Imaging
              source={{uri: img}}
              resizeMode="contain"
              style={{
                width: 75,
                height: 75,
                borderRadius: 6.66,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={styles.text}>Produk berhasil ditambahkan</Text>
              <Text style={styles.title}>
                {title.length > 27 ? title.slice(0, 27) + '...' : title}
              </Text>
            </View>
          </View>
          <Button
            type="third"
            text="Lihat Keranjang"
            fullWidth={true}
            onPress={onPress}
          />
        </Card>
      </View>
    </Modal>
  );
};

export default ModalSuccess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    paddingHorizontal: 20,
    paddingBottom: 35,
    paddingTop: 20,
  },
  text: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
  },
  title: {
    fontFamily: 'NunitoSans-Regular',
  },
});
