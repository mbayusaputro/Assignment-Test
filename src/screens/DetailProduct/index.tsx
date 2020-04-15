import React, {useState} from 'react';
import {DetailProps} from '../../interface/types';
import {HighSafeArea} from '../../components';
import Content from './Content';
import Bottom from './Bottom';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {actionBasket} from '../../reduxs/basket/action';
import Modal from './Modal';
import {AppState} from '../../reduxs/reducers';

const Detail = (props: DetailProps) => {
  // Props
  const {
    navigation: {navigate, getParam},
    addBasket,
  } = props;
  const item = getParam('item');

  // State
  const [isVisible, setVisible] = useState(false);

  // Function
  const onAddBasket = () => {
    addBasket(item);
    setTimeout(() => {
      setVisible(true);
    }, 500);
  };

  const onNavigate = () => {
    navigate('Basket');
    setVisible(false);
  };

  // Main Render
  return (
    <HighSafeArea style={{marginTop: 20}}>
      <Content data={item} />
      <Bottom onPress={() => onAddBasket()} />
      <Modal
        isVisible={isVisible}
        title={item.title}
        img={item.img}
        onDismiss={() => setVisible(false)}
        onPress={() => onNavigate()}
      />
    </HighSafeArea>
  );
};

const Default = (props: any) => {
  return <Detail {...props} />;
};

const mapStateToProps = (state: AppState) => ({
  basket: state.basket.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      addBasket: (payload: object) => actionBasket(payload),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Default);
