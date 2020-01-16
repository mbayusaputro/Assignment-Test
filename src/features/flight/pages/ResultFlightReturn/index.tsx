import React from 'react';
import {SafeAreaView, Alert} from 'react-native';
import Result from './screen/Result';
import {dataFlight} from './data';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {Header, SubHeader} from './components';

type Props = {
  handleSelectFlight: (payload: object) => void;
  handleDetailFlight: (payload: object) => void;
  navigation: NavigationScreenProp<NavigationState>;
};

const Default = (props: Props) => {
  const {
    navigation: {navigate, goBack, state},
  } = props;
  const [select, isSelect] = React.useState({});

  React.useEffect(() => {}, [select]);

  const toSelect = (item: object) => {
    isSelect(item);
  };

  const toDetail = (item: object) => {
    navigate('DetailFlight', item);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#ededed'}}>
      <Header goBack={() => goBack()} title={'Jakarta'} />
      <SubHeader
        date={new Date()}
        adult={1}
        child={0}
        infant={0}
        class={'Economy'}
        total_flight={dataFlight.length}
      />
      <Result
        selected={state.params}
        dataFlight={dataFlight}
        handleSelectFlight={(item: object) => toSelect(item)}
        handleDetailFlight={(item: object) => toDetail(item)}
      />
    </SafeAreaView>
  );
};

export default Default;
