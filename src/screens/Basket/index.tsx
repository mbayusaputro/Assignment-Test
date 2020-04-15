import React, {useState, useEffect} from 'react';
import {BasketProps} from '../../interface/types';
import {HighSafeArea} from '../../components';
import Bottom from './Bottom';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {actionDel} from '../../reduxs/basket/action';
import {AppState} from '../../reduxs/reducers';
import {View, FlatList} from 'react-native';
import Field from './Field';
import HeadField from './HeadField';

const Basket = (props: BasketProps) => {
  // Props
  const {basket, delBasket} = props;

  // State
  const [isData, setData] = useState([]);
  const [isTotal, setTotal] = useState(0);

  // Lifecycle
  useEffect(() => {
    isTotal === 0 ? setData(basket) : setData(isData);
  }, [isTotal]);

  // Function
  const onChange = (type: string, index: number) => {
    isData[index].stock =
      type === 'min' ? isData[index].stock - 1 : isData[index].stock + 1;
    setTotal(
      basket
        .filter((obj: any) => obj.check)
        .reduce((a: any, b: any) => a + b.price * b.stock, 0),
    );
  };

  const onCheck = (index: number) => {
    isData[index].check = !isData[index].check;
    setTotal(
      basket
        .filter((obj: any) => obj.check)
        .reduce((a: any, b: any) => a + b.price * b.stock, 0),
    );
  };

  const _renderItem = ({item, index}) => (
    <Field
      data={item}
      onChange={(type: string) => onChange(type, index)}
      onCheck={() => onCheck(index)}
      onDel={() => onDelIndex(index)}
    />
  );

  const onDelIndex = (index: number) => {
    isData.splice(index, 1);
    delBasket(isData);
    setData(isData);
    setTotal(
      basket
        .filter((obj: any) => obj.check)
        .reduce((a: any, b: any) => a + b.price * b.stock, 0),
    );
  };

  const onSelectAll = (select: boolean) => {
    isData.map((item: any, _: number) => {
      return (item.check = select);
    });
    setTotal(
      basket
        .filter((obj: any) => obj.check)
        .reduce((a: any, b: any) => a + b.price * b.stock, 0),
    );
  };

  const onDelete = () => {
    delBasket(isData.filter((obj: any) => obj.check === false));
    isData.map((item: any, _: number) => {
      return (item.check = false);
    });
    setData(isData.filter((obj: any) => obj.check === false));
    setTotal(
      basket
        .filter((obj: any) => obj.check)
        .reduce((a: any, b: any) => a + b.price * b.stock, 0),
    );
  };

  // Main Render
  return (
    <HighSafeArea style={{marginHorizontal: 10, marginTop: 10}}>
      <FlatList
        data={isData}
        keyExtractor={(__: any, index: number) => index.toString()}
        renderItem={_renderItem}
        ListEmptyComponent={<View />}
        ListHeaderComponent={
          <HeadField onSelectAll={onSelectAll} onDel={() => onDelete()} />
        }
        style={{marginBottom: 50}}
      />
      <Bottom total={isTotal} />
    </HighSafeArea>
  );
};

const Default = (props: any) => {
  return <Basket {...props} />;
};

const mapStateToProps = (state: AppState) => ({
  basket: state.basket.data,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      delBasket: (payload: Array<object>) => actionDel(payload),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Default);
