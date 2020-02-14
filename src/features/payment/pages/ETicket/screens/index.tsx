import React from 'react';
import {HighSafeArea} from '../../../../../components';
import {styles} from '../components';
import {BackHandler} from 'react-native';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import {ETicketProps as Props} from '../../../interface/types';
import {StackActions, NavigationActions, ScrollView} from 'react-navigation';

export default class ETicket extends React.PureComponent<Props, any> {
  // Declaration Function
  backButton: any;

  componentDidMount() {
    this.setState({isVisible: 1});
    this.backButton = BackHandler.addEventListener('hardwareBackPress', () => {
      this.goHome();
      return true;
    });
  }

  componentWillUnmount() {
    this.backButton.remove();
  }

  goHome = () => {
    const {
      navigation: {dispatch},
    } = this.props;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Tabs',
          action: NavigationActions.navigate({
            routeName: 'Order',
          }),
        }),
      ],
    });
    dispatch(resetAction);
  };

  render() {
    // Main Render
    return (
      <HighSafeArea style={styles.container}>
        <ScrollView style={{width: '100%'}}>
          <Header />
          <Content />
          <Footer callback={this.goHome} />
        </ScrollView>
      </HighSafeArea>
    );
  }
}
