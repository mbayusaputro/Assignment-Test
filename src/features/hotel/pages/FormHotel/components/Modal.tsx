import React from 'react';
import Modal from 'react-native-modal';
import {StyleSheet} from 'react-native';

type Props = {
  isVisible: any;
  onDismiss: () => void;
  children: React.ReactNode;
};

export default (props: Props) => {
  return (
    <Modal
      avoidKeyboard={true}
      propagateSwipe={true}
      useNativeDriver={true}
      style={styles.modal}
      children={props.children}
      isVisible={props.isVisible}
      onBackdropPress={props.onDismiss}
      onBackButtonPress={props.onDismiss}
    />
  );
};

const styles = StyleSheet.create({
  // Layout
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
    margin: 0,
  },
});
