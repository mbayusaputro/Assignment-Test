import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, Card, Imaging} from '../../../components';
import {styles, HomeContext} from '../components';
import {dataMenu} from '../components/data';

export default () => {
  const {onNavigate} = React.useContext(HomeContext);

  // Main Render
  return (
    <View style={styles.contentMenu}>
      {dataMenu.map((item: any, index) => (
        <Touch
          onPress={() => onNavigate(item.route)}
          activeOpacity={0.5}
          key={index}
          style={styles.rowMenu}>
          <Card style={styles.itemMenu}>
            <Imaging
              source={item.img}
              resizeMode="contain"
              style={styles.iconMenu}
            />
          </Card>
          <Text content={item.title} />
        </Touch>
      ))}
    </View>
  );
};
