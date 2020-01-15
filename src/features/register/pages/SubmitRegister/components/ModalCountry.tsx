import React from 'react';
import Modal from 'react-native-modal';
import {
  View,
  TouchableOpacity as Touch,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Text} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import {HEIGHT_SCREEN} from '../../../../../constants/Dimension';

type Props = {
  children?: React.ReactNode;
  isVisible: boolean;
  onDismiss: () => void;
};

export default (props: Props) => {
  const {children, isVisible, onDismiss} = props;
  return (
    <Modal
      useNativeDriver={true}
      isVisible={isVisible}
      children={
        <View style={styles.container}>
          <Touch onPress={onDismiss} style={styles.close}>
            <Text>Close</Text>
          </Touch>
          <ScrollView style={styles.content}>{children}</ScrollView>
        </View>
      }
      avoidKeyboard={true}
      onBackButtonPress={onDismiss}
      onBackdropPress={onDismiss}
      style={styles.modal}
    />
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: Color.white,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    height: HEIGHT_SCREEN,
  },
  content: {
    justifyContent: 'center',
    padding: 20,
  },
  close: {
    paddingVertical: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.greyish,
    alignItems: 'center',
  },
});
