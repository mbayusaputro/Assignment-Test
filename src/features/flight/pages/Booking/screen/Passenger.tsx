import React from 'react';
import {View, Text, Switch} from 'react-native';
import {Card} from '../components';
import {Color} from '../../../../../constants/Color';

type Props = {
  toggleSwitch: () => void;
  active: boolean;
};

const Content = (props: Props) => {
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
          onValueChange={props.toggleSwitch}
          value={props.active}
        />
      </View>
      <Card
        title="Adult x1"
        subtitle="*Please fill in passenger details"
        err={true}
        textColor={true}
      />
    </View>
  );
};

export default Content;
