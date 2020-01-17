import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header, SubHeader} from './components';
import {Color} from '../../../../constants/Color';
import Content from './screen/Content';
import {validateEmailFormat} from '../../../../helpers/helpers';

const Default = () => {
  const [active, setActive] = React.useState(false);
  // State
  const [modal, setModal] = React.useState(false);
  const [salutation, setSalutation] = React.useState('Mr');
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [validMail, setValidMail] = React.useState(true);
  const [mobileNumber, setMobileNumber] = React.useState('');

  React.useEffect(() => {
    console.log(modal);
  }, [modal]);

  const changeEmail = (txt: string) => {
    let checkMail = validateEmailFormat(txt);
    if (checkMail) {
      setEmail(txt);
      setValidMail(true);
    } else {
      setEmail(txt);
      setValidMail(false);
    }
  };
  const toggleSwitch = () => {
    setActive(!active);
  };

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Booking Summary" />
      <SubHeader />
      <Content
        toggleSwitch={toggleSwitch}
        active={active}
        //Contact Detail
        isVisible={modal}
        onDismiss={() => setModal(null)}
        onChangeFullnameContactDetail={(text: string) => setFullname(text)}
        onChangeSalutationContactDetail={(text: any) => setSalutation(text)}
        onChangeEmailContactDetail={(text: string) => changeEmail(text)}
        validMail={validMail}
        onChangeMobileNumberContactDetail={(text: any) => setMobileNumber(text)}
        selectedSalutation={salutation}
        valueFullname={fullname}
        valueEmail={email}
        valueMobile={mobileNumber}
        onContactDetail={() => openModal()}
        //Passenger Detail
        onChangeFullnamePassengerDetail={(text: string) => setFullname(text)}
        onChangeSalutationPassengerDetail={(text: any) => setSalutation(text)}
      />
    </SafeAreaView>
  );
};

export default Default;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.lightgray,
  },
});
