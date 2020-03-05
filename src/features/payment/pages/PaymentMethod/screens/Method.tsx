import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Card, CardCC, CardInfo, CardInfoTour, CardVA} from '../components';
import {PayMethodContext} from '../components/Context';
import {moneyFormat} from '../../../../../helpers/helpers';
import {dataVA} from '../components/data';
import Countdown from 'react-native-countdown-component';

const Method = () => {
  const {price, typeScreen, dataParam, dataItem, onPay} = React.useContext(
    PayMethodContext,
  );
  // Main Render
  return (
    <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
      <Card
        title={{
          id: 'Silakan lengkapi pembayaran ini dalam',
          en: 'Please complete this payment in',
        }}
        sub="time">
        <Countdown
          size={16}
          until={3600}
          onFinish={() => alert('Time Out')}
          digitTxtStyle={{color: '#008c9a'}}
          digitStyle={{backgroundColor: '#fff', height: 17}}
          separatorStyle={{color: '#008c9a'}}
          timeToShow={['H', 'M', 'S']}
          timeLabels={{m: null, s: null}}
          showSeparator
        />
      </Card>

      {/* FLIGHT */}
      {typeScreen === 'flight' && (
        <CardInfo
          departure={`(${dataItem.details[0].departure_code})`}
          destination={`(${
            dataItem.details[dataItem.details.length - 1].arrival_code
          })`}
          date="Wed, 21 Jan 2019"
          onPress={() => {}}
        />
      )}
      {typeScreen === 'tour' && (
        <CardInfoTour
          title={dataParam.dataDetail.title}
          pax={dataParam.dataParam.adult + dataParam.dataParam.child}
          day={dataParam.dataDetail.day}
          night={dataParam.dataDetail.night}
          onPress={() => Alert.alert('View Detail')}
        />
      )}
      <Card
        title={{id: 'Harga yang anda bayar', en: 'Price You Pay'}}
        sub={`Rp${moneyFormat(price)}`}
      />

      {/* CREDIT CARD */}
      <CardCC onPress={() => onPay('credit_card')} />
      <Text
        style={{
          marginVertical: 10,
          fontFamily: 'NunitoSans-Bold',
          fontSize: 16,
        }}>
        Virtual Account
      </Text>

      {/* VIRTUAL ACCOUNT */}
      {dataVA.map((item: any, index: number) => (
        <CardVA
          key={index}
          logo={item.image}
          title={item.name}
          onPress={() => onPay(item.id)}
        />
      ))}
    </View>
  );
};

export default Method;
