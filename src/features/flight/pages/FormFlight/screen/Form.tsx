import React from 'react';
import {View, StyleSheet, Alert} from 'react-native';
import RadioOptionTrip from './RadioOptionTrip';
import FieldFromTo from './FieldFromTo';
import FieldData from './FieldData';
import {Button} from '../../../../../components/';

type Props = {
  OptionTripPress: () => void;
  OptionTrip: string;
  fieldPress: () => void;
};
const Form = (props: Props) => {
  let {OptionTripPress, OptionTrip, fieldPress} = props;
  return (
    <View style={styles.container}>
      <RadioOptionTrip
        OptionTripPress={OptionTripPress}
        OptionTrip={OptionTrip}
      />
      <FieldFromTo />
      <FieldData
        onPress={fieldPress}
        label="Departure Date"
        fieldValue="Wed, 21 Jan 2020"
      />
      <FieldData
        onPress={fieldPress}
        label="Return Date"
        fieldValue="Wed, 21 Jan 2020"
      />
      <FieldData onPress={fieldPress} label="Passenger" fieldValue="1 Adult" />
      <FieldData
        onPress={fieldPress}
        label="Cabin Class"
        fieldValue="Economy"
      />
      <Button
        customStyle={{marginVertical: 20, borderRadius: 20}}
        type="primary"
        fullWidth={true}
        isUpperCase={true}
        content={{id: 'Search Flight', en: 'Search Flight'}}
        onPress={() => Alert.alert('button clicked')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
  },
});
export default Form;
