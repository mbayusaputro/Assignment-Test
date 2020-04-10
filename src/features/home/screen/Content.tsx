import React from 'react';
import {View, TouchableOpacity as Touch} from 'react-native';
import {Text, Card, Imaging} from '../../../components';
import {styles, HomeContext} from '../components';
import {dataMenu} from '../components/data';

export default () => {
  const {onNavigate} = React.useContext(HomeContext);

  return (
    <View style={styles.contentMenu}>
      {dataMenu.map((item: any, index) => (
        <View key={index} style={styles.rowMenu}>
          <Touch onPress={() => onNavigate(item.route)} activeOpacity={0.9}>
            <Card style={styles.itemMenu}>
              <Imaging
                source={item.img}
                resizeMode="contain"
                style={styles.iconMenu}
              />
            </Card>
          </Touch>
          <Text content={item.title} />
        </View>
      ))}
    </View>
  );
};
