import React from 'react';
import {Animated} from 'react-native';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import {
  HEADER_SCROLL_DISTANCE,
  HEADER_MAX_HEIGHT,
  HEADER_MIN_HEIGHT,
} from '../components/valueScroll';
import {HolidayDetailContext as Context, Modal} from '../components';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import ModalParticipant from './ModalParticipant';
import {HolidayDetailProps as Props} from '../../../interface/types';
import {oc} from 'ts-optchain';
import ModalImage from './ModalImage';

export default (props: Props) => {
  const Participant = React.memo(ModalParticipant);
  // Props
  const {
    navigation: {getParam},
  } = props;
  const idParam = getParam('id');

  // State
  const [dataDetail, setDataDetail] = React.useState(null);
  const [scrollY] = React.useState(new Animated.Value(0));
  const [modal, setModal] = React.useState(null);
  const [selectedDate, setSelectedDate] = React.useState(0);
  const [totalAdult, setTotalAdult] = React.useState(2);
  const [totalChild, setTotalChild] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);

  React.useEffect(() => {
    getDetail();
  }, []);

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  // Get Detail Holiday
  const getDetail = () => {
    const {isLogin, token, actionHolidayDetail} = props;
    if (dataDetail === null) {
      actionHolidayDetail(isLogin ? token : null, idParam).then((res: any) => {
        if (res.type === 'HOLIDAYDETAIL_SUCCESS') {
          setDataDetail(res.data);
          setTotalAdult(res.data.min_pax);
          setTotalPrice(res.data.price.price_adult);
        } else {
          alert(res.message);
        }
      });
    }
  };

  const modifTotal = (type: string, matic: string) => {
    if (type === 'adult') {
      if (totalAdult < 2) {
        setTotalAdult(2);
      } else {
        matic === '+'
          ? setTotalAdult(totalAdult + 1)
          : setTotalAdult(totalAdult - 1);
      }
    } else if (type === 'child') {
      if (totalChild < 0) {
        setTotalChild(0);
      } else {
        matic === '+'
          ? setTotalChild(totalChild + 1)
          : setTotalChild(totalChild - 1);
      }
    }
  };

  const onContinue = () => {
    setModal(false);
    const {
      navigation: {navigate},
    } = props;
    const total = totalAdult + totalChild;
    const item = {
      adult: totalAdult,
      child: totalChild,
      id: idParam,
    };
    const detail = {
      title: dataDetail.title,
      date: dataDetail.trip_date[selectedDate],
      tour: dataDetail.host,
      price: totalPrice * total,
    };
    setTimeout(() => {
      navigate('HolidayBooking', {
        item,
        detail,
      });
    }, 500);
  };

  // Scroll Animated
  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [-50, 0],
    extrapolate: 'clamp',
  });

  const imageTranslate = scrollY.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  // Main Render
  return (
    <HighSafeArea style={{flex: 1}}>
      <Context.Provider
        value={{
          title: oc(dataDetail).title(''),
          by: oc(dataDetail).host(''),
          selectedDate,
          onSelectDate: (item: any) => setSelectedDate(item),
          dataDate: oc(dataDetail).trip_date(null),
          dataVisit: oc(dataDetail).visit_cities(null),
          dataInclude: oc(dataDetail).info_included(null),
          dataExclude: oc(dataDetail).info_excluded(null),
        }}>
        <Animated.ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: false},
          )}>
          <Content />
        </Animated.ScrollView>
        <Header
          header={headerHeight}
          opacity={imageOpacity}
          translate={imageTranslate}
          headerTitle={headerOpacity}
          callback={onBack}
          photo={oc(dataDetail).media[0].url('https://awok.png')}
          title={oc(dataDetail).title('')}
          onShowImage={() => setModal(2)}
        />
        <Footer price={oc(totalPrice)(0)} onSelect={() => setModal(1)} />
        <Modal isVisible={modal === 1} onDismiss={() => setModal(null)}>
          <Participant
            addAdult={() => modifTotal('adult', '+')}
            minAdult={() =>
              totalAdult === 2 ? null : modifTotal('adult', '-')
            }
            addChild={() => modifTotal('child', '+')}
            minChild={() =>
              totalChild === 0 ? null : modifTotal('child', '-')
            }
            totalAdult={totalAdult}
            totalChild={totalChild}
            onPress={onContinue}
          />
        </Modal>
        <Modal isVisible={modal === 2} onDismiss={() => setModal(null)}>
          <ModalImage
            onClose={() => setModal(null)}
            data={oc(dataDetail).media([])}
          />
        </Modal>
      </Context.Provider>
      <LoadingBook isVisible={props.fetchDetail} />
    </HighSafeArea>
  );
};
