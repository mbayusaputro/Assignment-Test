import React from 'react';
import {View, Text, CheckBox, TouchableOpacity} from 'react-native';
import styles from '../styles';

const Filter = (props: any) => {
  const [act, setAct] = React.useState(false);
  return (
    <View style={props.bot ? {paddingBottom: 50} : {}}>
      <View style={styles.line} />
      <Text style={styles.bold}>{props.name}</Text>
      {props.data.map((item: any, i: number) => {
        if (i <= (act ? props.data.length : 2)) {
          return (
            <View key={i} style={styles.content}>
              <Text style={styles.regular}>{item.name}</Text>
              <CheckBox />
            </View>
          );
        }
      })}
      <TouchableOpacity onPress={() => setAct(!act)}>
        <Text style={[styles.regular, styles.blue]}>
          {act ? 'Hide a few' : 'Show All'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;
