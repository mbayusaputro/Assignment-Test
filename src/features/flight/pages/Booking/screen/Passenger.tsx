import React from 'react';
import {View, Text, Switch} from 'react-native';
import {Card} from '../components';
import {Color} from '../../../../../constants/Color';
import {PassengerProps} from '../types';

const Content = (props: PassengerProps) => {
  const {toggleSwitch, active, dataPassenger, onPress} = props;
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{fontFamily: 'NunitoSans-Bold', fontSize: 16}}>
        Passenger Details
      </Text>
      <View
        style={{
          marginTop: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontFamily: 'NunitoSans-Regular'}}>
          Same as contact detail
        </Text>
        <Switch
          ios_backgroundColor={Color.brownGreyF}
          onValueChange={toggleSwitch}
          value={active}
        />
      </View>
      {dataPassenger['adult'].map((_: any, i: number) => {
        return (
          <Card
            key={i}
            onPress={() => onPress('adult', i)}
            title={
              dataPassenger['adult'][i]['fullName'] === ''
                ? 'Adult x1'
                : dataPassenger['adult'][i]['fullName']
            }
            subtitle="*Please fill in passenger details"
            err={dataPassenger['adult'][i]['fullName'] === '' ? true : false}
            textColor={true}
          />
        );
      })}
      {dataPassenger['child'].map((_: any, i: number) => {
        return (
          <Card
            key={i}
            onPress={() => onPress('child', i)}
            title={
              dataPassenger['child'][i]['fullName'] === ''
                ? 'Child x1'
                : dataPassenger['child'][i]['fullName']
            }
            subtitle="*Please fill in passenger details"
            err={dataPassenger['child'][i]['fullName'] === '' ? true : false}
            textColor={true}
          />
        );
      })}
      {dataPassenger['infant'].map((_: any, i: number) => {
        return (
          <Card
            key={i}
            onPress={() => onPress('infant', i)}
            title={
              dataPassenger['infant'][i]['fullName'] === ''
                ? 'Infant x1'
                : dataPassenger['infant'][i]['fullName']
            }
            subtitle="*Please fill in passenger details"
            err={dataPassenger['infant'][i]['fullName'] === '' ? true : false}
            textColor={true}
          />
        );
      })}
    </View>
  );
};

export default Content;
