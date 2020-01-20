import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import styles from './styles';
import {Text} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import fonts from '../../../../../constants/Fonts';
import {HEADER_FONT_SIZE} from '../../../../../constants/TextSize';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import TabMobile from './TabMobile';
import TabEmail from './TabEmail';

const LazyLoad = (): any => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color={Color.marineBlue} />
  </View>
);

type Props = {
  onChangeMobile: (text: string) => void;
  onSubmitMobile: () => void;
  onSubmitEmail: () => void;
  validEmail: boolean;
  onChangeEmail: (text: string) => void;
  loading: boolean;
};

export default class TabForm extends React.PureComponent<Props, any> {
  state = {
    index: 0,
    routes: [
      {key: 'first', title: 'Mobile Number'},
      {key: 'second', title: 'Email'},
    ],
  };

  // Function
  handleChange = (index: number) => this.setState({index});

  // Tab Bar Setting
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

  renderTabComponent = ({route}): any => {
    switch (route.key) {
      case 'first':
        return (
          <TabMobile
            onChangeMobile={(text: string) => this.props.onChangeMobile(text)}
            onSubmitMobile={this.props.onSubmitMobile}
            loading={this.props.loading}
          />
        );
      case 'second':
        return (
          <TabEmail
            onChangeEmail={(text: string) => this.props.onChangeEmail(text)}
            onSubmitEmail={this.props.onSubmitEmail}
            validEmail={this.props.validEmail}
            loading={this.props.loading}
          />
        );
      default:
        return null;
    }
  };

  renderLazyLoad = () => <LazyLoad />;

  // Main Render
  render() {
    const {index, routes} = this.state;
    return (
      <TabView
        lazy={true}
        navigationState={{index, routes}}
        onIndexChange={this.handleChange}
        initialLayout={{width: WIDTH_SCREEN}}
        style={styles.container}
        renderScene={this.renderTabComponent}
        renderLazyPlaceholder={this.renderLazyLoad}
        renderTabBar={this.renderTabBar}
      />
    );
  }
}
