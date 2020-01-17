import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import styles from './styles';
import {Text} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import TabMobile from './TabMobile';
import TabEmail from './TabEmail';
import {HEADER_FONT_SIZE} from '../../../../../constants/TextSize';
import {TabProps} from '../../../interface/types';

const LazyLoad = (): any => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color={Color.marineBlue} />
  </View>
);

export default class TabForm extends React.PureComponent<TabProps, any> {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Mobile Number'},
      {key: 'second', title: 'Email'},
    ],
  };

  // Function
  handleChange = (index: number) => this.setState({index});

  // Tab Setting
  renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: Color.tealBlue}}
      style={{backgroundColor: Color.white}}
      activeColor={Color.tealBlue}
      inactiveColor={Color.black}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            fontFamily: fonts.fontSemiBold,
            fontSize: HEADER_FONT_SIZE,
            color,
          }}>
          {route.title}
        </Text>
      )}
    />
  );

  renderTabContent = ({route}): any => {
    const {
      validEmail,
      onChangeMobilePre,
      valueMobilePre,
      onChangeMobile,
      onChangeEmail,
      onRegisterMobile,
      onRegisterEmail,
      onFacebook,
      onGoogle,
      loading,
    } = this.props;
    switch (route.key) {
      case 'first':
        return (
          <TabMobile
            onChangeMobilePre={onChangeMobilePre}
            valueMobilePre={valueMobilePre}
            onChangeMobile={onChangeMobile}
            onRegisterMobile={onRegisterMobile}
            onGoogle={onGoogle}
            onFacebook={onFacebook}
            loading={loading}
          />
        );
      case 'second':
        return (
          <TabEmail
            onChangeEmail={onChangeEmail}
            onRegisterEmail={onRegisterEmail}
            onGoogle={onGoogle}
            onFacebook={onFacebook}
            validEmail={validEmail}
            loading={loading}
          />
        );
      default:
        return <View />;
    }
  };

  renderLazyLoad = (): any => <LazyLoad />;

  // Render
  render() {
    const {index, routes} = this.state;
    return (
      <TabView
        lazy={true}
        navigationState={{index, routes}}
        onIndexChange={this.handleChange}
        initialLayout={{width: WIDTH_SCREEN}}
        style={styles.container}
        renderScene={this.renderTabContent}
        renderLazyPlaceholder={this.renderLazyLoad}
        renderTabBar={this.renderTabBar}
      />
    );
  }
}
