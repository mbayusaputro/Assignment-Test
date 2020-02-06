import React from 'react';
import {View} from 'react-native';
import {Text, Button} from '../../../components';
import {styles, HomeContext} from '../components';
import {titleLoginLang, subTitleLoginLang, btnLoginLang} from '../strings';

export default () => {
  const {onLogin} = React.useContext(HomeContext);

  // Main Render
  return (
    <View style={styles.contentLogin}>
      <Text style={styles.textTitle} content={titleLoginLang} />
      <Text style={styles.textSubTitle} content={subTitleLoginLang} />
      <View style={styles.vertical}>
        <Button
          onPress={onLogin}
          type="primary"
          content={btnLoginLang}
          isUpperCase={true}
          fullWidth={true}
          customStyle={styles.btnLogin}
        />
      </View>
    </View>
  );
};
