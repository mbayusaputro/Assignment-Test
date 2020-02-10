import React from 'react';
import {HighSafeArea, Header} from '../../../components';
import {styles, HomeContext} from '../components';
import Content from './Content';
import {Props} from '../types';
import Login from './Login';

export default (props: Props) => {
  // Props
  const {isLogin} = props;

  // Function
  const onNavigate = (route: string) => {
    const {
      navigation: {navigate},
    } = props;
    navigate(route);
  };

  // Main Render
  return (
    <HighSafeArea style={styles.container}>
      <Header homeIcon={true} />
      <HomeContext.Provider
        value={{
          onNavigate: (item: any) => onNavigate(item),
          onLogin: () => onNavigate('Account'),
        }}>
        <Content />
        {!isLogin && <Login />}
      </HomeContext.Provider>
    </HighSafeArea>
  );
};
