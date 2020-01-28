import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Header, SubHeader} from './components';
import {Color} from '../../../../constants/Color';
import Content from './screen/Content';
import {
  validateEmailFormat,
  getFirstNameLastname,
} from '../../../../helpers/helpers';
import {Modal, ModalPassenger} from './components';

const Default = () => {
  // State
  const [active, setActive] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [modalForm, setModalForm] = useState('');
  const [modalIndex, setModalIndex] = useState(0);
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [contact, setContact] = useState(null);
  const [adult, setAdult] = useState([]);
  const [child, setChild] = useState([]);
  const [infant, setInfant] = useState([]);
  const [payloadPassenger, setPayload] = useState([]);
  const [dataPassenger, setDataPassenger] = useState({
    adult: [],
    child: [],
    infant: [],
  });
  let data = {
    adult: [],
    child: [],
    infant: [],
  };

  useEffect(() => {
    generateStatePassenger(1, 'adult');
    generateStatePassenger(1, 'child');
    generateStatePassenger(1, 'infant');
  }, []);

  const generateStatePassenger = (total: number, field: string) => {
    for (let i = 0; i < total; i++) {
      let title = 'MR';
      if (field != 'adult') {
        title = 'MSTR';
      }
      data[field].push({
        titleIndex: 1,
        title: title,
        fullName: '',
        dateOfBirth: '',
      });
    }
    setDataPassenger(data);
  };

  const toggleSwitch = () => {
    let value = contact === null ? '' : contact.fullname;
    setActive(!active);
    active ? handleInput('blank', '') : handleInput('sameContact', value);
  };

  const openModal = (form: string, index: number) => {
    setVisible(!isVisible);
    setModalForm(form);
    setModalIndex(index);
  };

  const saveContact = (payload: any) => {
    setContact(payload);
    setVisible(!isVisible);
    setModalForm('adult');
  };
  const savePassenger = (payload: any) => {
    // setContact(payload);
    // setModal(!modal);
    alert(JSON.stringify(payload));
  };

  const generatePayloadPassengers = (field: string) => {
    let validDob: boolean = true;
    let tempArr: any = [];
    dataPassenger[field].map((item: any, index: number) => {
      let tempObj: any = {};
      if (item.fullName !== '') {
        if (field !== 'adult' && item.dateOfBirth === '') {
          validDob = false;
          alert('Please enter data correctly');
        } else {
          validDob = true;
          let primaryData = false;
          let dobb = item.dateOfBirth;
          if (field === 'adult') {
            if (index === 0) {
              primaryData = true;
            }
            dobb = '1988-04-04';
          }
          getFirstNameLastname(item.fullName, (res: any) => {
            (tempObj.first_name = res.firstName),
              (tempObj.last_name = res.lastName);
          });
          // item.dateOfBirth
          (tempObj.email = 'mandatory@abc.xyz'),
            (tempObj.phone = '0855101010101'),
            (tempObj.birth_date = dobb),
            (tempObj.primary = primaryData),
            (tempObj.salutation = item.title),
            (tempObj.type = field),
            (tempObj.seat = ''),
            (tempObj.nationality = 'ID'),
            (tempObj.card_number = '123232323'),
            (tempObj.card_issue_date = '2017-01-01'),
            (tempObj.card_expire_date = '2022-01-01'),
            (tempObj.luggage = 1);
          tempArr.push(tempObj);
        }
      }
    });
    if (field === 'adult') {
      setAdult(tempArr);
    } else if (field === 'child') {
      setChild(tempArr);
    } else if (field === 'infant') {
      setInfant(tempArr);
    }
    setTimeout(() => {
      if (validDob) {
        setVisible(false);
        setModalForm('adult');
      } else {
        alert('DOB not valid! ' + validDob);
      }
    }, 100);
  };

  const doneDob = (value: string) => {
    handleInput('dob', value);
  };

  const handleInput = (type: string, value: string) => {
    if (type === 'fullName') {
      if (dataPassenger[modalForm]) {
        dataPassenger[modalForm][modalIndex]['fullName'] = value;
      }
    } else if (type === 'dob') {
      if (dataPassenger[modalForm]) {
        dataPassenger[modalForm][modalIndex]['dateOfBirth'] = value;
      }
    } else if (type === 'sameContact') {
      if (dataPassenger[modalForm]) {
        dataPassenger[modalForm][modalIndex]['fullName'] = value;
        dataPassenger[modalForm][modalIndex]['title'] = 'MR';
        generatePayloadPassengers('adult');
      }
    } else if (type === 'blank') {
      if (dataPassenger[modalForm]) {
        dataPassenger[modalForm][modalIndex]['fullName'] = value;
      }
      generatePayloadPassengers('adult');
    }
    setDataPassenger(dataPassenger);
  };

  const onSubmit = () => {
    console.log(adult.concat(child).concat(infant));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Booking Summary" />
      <SubHeader />
      <Content
        toggleSwitch={toggleSwitch}
        active={active}
        //Contact Detail
        onContactDetail={() => openModal('contact', 0)}
        contactName={contact}
        //Passenger Detail
        dataPassenger={dataPassenger}
        onPassenger={openModal}
        onSubmit={() => onSubmit()}
      />
      {modalForm === 'contact' ? (
        <Modal
          isVisible={isVisible}
          onDismiss={() => openModal(modalForm, modalIndex)}
          onSave={saveContact}
        />
      ) : (
        <ModalPassenger
          isVisible={isVisible}
          form={modalForm}
          dataPassenger={dataPassenger}
          onDismiss={() => openModal('adult', 0)}
          onSave={generatePayloadPassengers}
          handleInput={handleInput}
          onDob={doneDob}
        />
      )}
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
