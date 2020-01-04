import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from '../../../components';
import {LanguageContext} from '../../../helpers/LanguageContext';
import {Props, State} from '../types';

class Home extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      message: 'Selamat Datang di Websiteku',
      user: 'ChatBot',
      timestamp: new Date().getTime(),
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <TouchableOpacity onPress={() => this.props.sendMessage(this.state)}>
          <Text>Send Message</Text>
        </TouchableOpacity> */}
        <Text isUpperCase={true} content={{id: 'Beranda', en: 'Homepage'}} />
        {/* <LanguageContext.Consumer>
          {({changeLanguage}) => (
            <TouchableOpacity onPress={changeLanguage} style={{marginTop: 30}}>
              <Text>Switch Language</Text>
            </TouchableOpacity>
          )}
        </LanguageContext.Consumer> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
export default Home;
