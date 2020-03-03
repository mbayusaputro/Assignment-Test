import React from 'react';
import {ScrollView} from 'react-native';
import ListView from './ListView';
import {Login} from '../components';
import Contact from './Contact';
import Passenger from './Passenger';
import Baggage from './Baggage';
import Price from './Price';
import Total from './Total';
import {Button} from '../../../../../components';
import {ContentProps} from '../types';

const Content = (props: ContentProps) => {
  const {
    onContactDetail,
    contactName,
    dataPassenger,
    active,
    toggleSwitch,
    onPassenger,
    onSubmit,
    departureFlight,
    returnFlight,
    onLogin,
    isLogin,
  } = props;

  let price_dept =
    departureFlight.price_adult * dataPassenger.adult.length +
    departureFlight.price_child * dataPassenger.child.length +
    departureFlight.price_infant * dataPassenger.infant.length;
  let price_retn =
    returnFlight === null
      ? 0
      : departureFlight.price_adult * dataPassenger.adult.length +
        departureFlight.price_child * dataPassenger.child.length +
        departureFlight.price_infant * dataPassenger.infant.length;
  let price_total = price_dept + price_retn;
  return (
    <ScrollView
      style={{marginHorizontal: 20, marginTop: -40}}
      showsVerticalScrollIndicator={false}>
      <ListView
        title="Departure Flight"
        date={departureFlight.departure_date}
        departure={departureFlight.detail[0].departure_city}
        arrival={
          departureFlight.detail[departureFlight.detail.length - 1].arrival_city
        }
        duration={departureFlight.duration}
        transit={
          departureFlight.stop.toLowerCase() === 'langsung'
            ? 'direct'
            : departureFlight.stop
        }
        departure_time={departureFlight.departure_time}
        arrival_time={departureFlight.arrival_time}
        airline={departureFlight.name}
        img={departureFlight.detail[0].img_src}
      />
      {returnFlight === null ? (
        []
      ) : (
        <ListView
          title="Return Flight"
          date={returnFlight.departure_date}
          departure={returnFlight.detail[0].departure_city}
          arrival={
            returnFlight.detail[returnFlight.detail.length - 1].arrival_city
          }
          duration={returnFlight.duration}
          transit={
            returnFlight.stop.toLowerCase() === 'langsung'
              ? 'direct'
              : returnFlight.stop
          }
          departure_time={returnFlight.departure_time}
          arrival_time={returnFlight.arrival_time}
          airline={returnFlight.name}
          img={returnFlight.detail[0].img_src}
        />
      )}
      {isLogin ? null : <Login onPress={onLogin} />}
      <Contact onPress={onContactDetail} name={contactName} />
      <Passenger
        onPress={onPassenger}
        dataPassenger={dataPassenger}
        active={active}
        toggleSwitch={toggleSwitch}
      />
      {/* <Baggage /> */}
      <Price
        departure={departureFlight}
        returns={returnFlight}
        data={dataPassenger}
      />
      <Total total={price_total} />
      <Button
        customStyle={{
          marginVertical: 20,
          borderRadius: 20,
          backgroundColor: '#148ea4',
          borderWidth: 0,
        }}
        customTextStyle={{color: '#fff'}}
        type="primary"
        isUpperCase={true}
        fullWidth={true}
        content={{id: 'Continue Payment', en: 'Continue Payment'}}
        onPress={onSubmit}
      />
    </ScrollView>
  );
};

export default Content;
