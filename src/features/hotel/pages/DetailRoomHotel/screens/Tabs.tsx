import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';
import {Color} from '../../../../../constants/Color';
import {styles} from '../components';
import {Text} from '../../../../../components';
import {tabDetailRoomLang, tabPriceRoomLang} from '../../../interface/string';
import {WIDTH_SCREEN} from '../../../../../constants/Dimension';
import TabRoom from './TabRoom';
import TabPrice from './TabPrice';

const LazyLoad = (): any => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color={Color.marineBlue} />
  </View>
);

export default class Tabs extends React.PureComponent<any, any> {
  state = {
    index: 0,
    routes: [
      {key: 'room', title: 'Room Details'},
      {key: 'price', title: 'Price Details'},
    ],
  };

  // TAB SETTING
  handleTab = (index: number) => this.setState({index});

  renderTabBar = (props: any) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: Color.tealBlue}}
      style={{backgroundColor: Color.white}}
      activeColor={Color.tealBlue}
      inactiveColor={Color.black}
      renderLabel={({route, focused, color}) => (
        <Text
          style={[styles.textTab, {color}]}
          content={route.key === 'room' ? tabDetailRoomLang : tabPriceRoomLang}
        />
      )}
    />
  );

  renderTabContent = ({route}): any => {
    switch (route.key) {
      case 'room':
        return <TabRoom />;
      case 'price':
        return <TabPrice />;

      default:
        return <View />;
    }
  };

  renderLazyLoad = (): any => <LazyLoad />;

  // Main Render
  render() {
    const {index, routes} = this.state;
    return (
      <TabView
        lazy
        navigationState={{index, routes}}
        onIndexChange={this.handleTab}
        initialLayout={{width: WIDTH_SCREEN}}
        style={styles.container}
        renderScene={this.renderTabContent}
        renderLazyPlaceholder={this.renderLazyLoad}
        renderTabBar={this.renderTabBar}
      />
    );
  }
}
