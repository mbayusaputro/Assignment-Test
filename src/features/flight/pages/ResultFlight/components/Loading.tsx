import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Placeholder, PlaceholderMedia, Fade} from 'rn-placeholder';

const Load = () => {
  return (
    <Placeholder Animation={Fade}>
      <PlaceholderMedia style={styles.small} />
    </Placeholder>
  );
};

const Loading = () => {
  const [number, setNumber] = React.useState([1, 2, 3, 4, 5]);
  return (
    <View>
      {number.map((_: any, i: number) => {
        return (
          <View key={i} style={styles.card1}>
            <Placeholder Animation={Fade}>
              <PlaceholderMedia style={styles.xlarge} />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <PlaceholderMedia style={styles.medium} />
                <PlaceholderMedia style={styles.medium} />
              </View>
            </Placeholder>
          </View>
        );
      })}
    </View>
  );
};

const LoadingDate = () => {
  return (
    <View style={styles.card2}>
      <Placeholder Animation={Fade}>
        <PlaceholderMedia style={styles.large} />
      </Placeholder>
    </View>
  );
};

const styles = StyleSheet.create({
  card1: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  card2: {
    backgroundColor: 'white',
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  small: {
    height: 18,
    width: '85%',
    alignSelf: 'center',
  },
  xlarge: {
    height: 47,
    width: '100%',
    marginBottom: 10,
  },
  medium: {
    height: 20,
    width: '35%',
  },
  large: {
    height: 30.5,
    width: '100%',
    marginBottom: 10,
  },
});

export {Load, Loading, LoadingDate};
