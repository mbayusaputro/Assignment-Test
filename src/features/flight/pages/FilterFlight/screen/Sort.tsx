import React from 'react';
import {View, Text, Picker} from 'react-native';
import styles from '../styles';

const Sort = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.bold}>Sort By</Text>
      <Picker style={{width: '50%', height: 30}} itemStyle={styles.regular}>
        <Picker.Item label="Recommended" value="Recommended" />
        <Picker.Item label="Low Price" value="Low Price" />
        <Picker.Item label="High Price" value="High Price" />
      </Picker>
    </View>
  );
};

export default Sort;
