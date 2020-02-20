import React, {useState, useEffect} from 'react';
import {HighSafeArea, Header, LoginModal} from '../../../components';
import {styles, HomeContext} from '../components';
import Content from './Content';
import {Props} from '../types';
import Login from './Login';
import PopularHoliday from './PopularHoliday';
import {ScrollView, ActivityIndicator, Button} from 'react-native';

export default (props: Props) => {
  // State
  const [popularHoliday, setPopularHoliday] = useState([]);

  useEffect(() => {
    loadPopular();
  }, []);

  // Props
  const {isLogin, fetchList} = props;

  // Function
  const onNavigate = (route: string) => {
    const {
      navigation: {navigate},
    } = props;
    navigate(route);
  };

  const loadPopular = () => {
    const {token, actionHolidayList} = props;
    if (popularHoliday.length === 0) {
      actionHolidayList(isLogin ? token : null).then((res: any) => {
        if (res.type === 'HOLIDAYLIST_SUCCESS') {
          setPopularHoliday(res.data);
        } else {
          alert(res.message);
        }
      });
    }
  };

  const onDetail = (item: any) => {
    const {
      navigation: {navigate},
    } = props;
    navigate('HolidayDetail', {id: item.id});
  };

  // Main Render
  return (
    <HighSafeArea style={styles.container}>
      <Header homeIcon={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeContext.Provider
          value={{
            onNavigate: (item: any) => onNavigate(item),
            onLogin: () => onNavigate('Account'),
            onDetail: (item: any) => onDetail(item),
            dataPopular: popularHoliday,
          }}>
          <Content />
          {!isLogin && <Login />}
          {!fetchList ? <PopularHoliday /> : <ActivityIndicator />}
        </HomeContext.Provider>
      </ScrollView>
    </HighSafeArea>
  );
};
