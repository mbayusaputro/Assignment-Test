import React from 'react';
import {ScrollView} from 'react-native';
import {oc} from 'ts-optchain';
import ImagePicker, {
  ImagePickerOptions,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {HighSafeArea, SubHeader} from '../../../../../components';
import {Props} from '../interface/types';
import {InteractionManager} from 'react-native';
import Content from './Content';
import Header from './Header';
import {Color} from '../../../../../constants/Color';
import ModalEdit from '../components/ModalEdit';
import ModalBirthDate from '../components/ModalBirthDate';
import {validateEmailFormat} from '../../../../../helpers/helpers';

const avatar = `data:image/png;base64,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`;

export default (props: Props) => {
  const {profile} = props;

  // State
  const [check, setCheck] = React.useState(false);
  const [modal, setModal] = React.useState(null);
  const [imgProfile, setImgProfile] = React.useState(null);
  const [salutation, setSalutation] = React.useState('Mr');
  const [fullname, setFullname] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [validMail, setValidMail] = React.useState(true);
  const [mobilePre, setMobilePre] = React.useState('62');
  const [mobileNumber, setMobileNumber] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [birthDate, setBirthDate] = React.useState('');

  // USe EFfect
  React.useEffect(() => {
    if (!check) {
      checkData();
    }
  });

  // Function
  const checkData = () => {
    setImgProfile(oc(profile).photo(null));
    setSalutation(oc(profile).salutation('Mr'));
    setFullname(oc(profile).fullname(''));
    setEmail(oc(profile).email(''));
    setMobilePre(oc(profile).mobileNoPrefix('62'));
    setMobileNumber(oc(profile).mobileNo());
    setBirthDate(oc(profile).birthDate(''));
    setAddress(oc(profile).address(''));
    setCheck(true);
  };

  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const openModalBirth = () => {
    setModal(null);
    setTimeout(() => setModal(2), 500);
  };

  const closeModalBirth = () => {
    setModal(null);
    setTimeout(() => setModal(1), 500);
  };

  const changeBirthDate = (date: any) => {
    setBirthDate(date);
    closeModalBirth();
  };

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

  const onUpdate = () => {
    const {token, actionUpdateProfile} = props;
    const payload = {
      photo: imgProfile,
      fullname,
      email,
      mobileNoPrefix: mobilePre,
      mobileNo: mobileNumber,
      countryID: 100,
      salutation,
      birthDate,
      address,
    };
    if (
      fullname !== '' &&
      email !== '' &&
      mobilePre !== '' &&
      mobileNumber !== '' &&
      salutation !== ''
    ) {
      InteractionManager.runAfterInteractions(() => {
        actionUpdateProfile(token, payload).then((res: any) => {
          if (res.type === 'UPDATEPROFILE_SUCCESS') {
            setModal(false);
          } else {
            alert(res.message);
          }
        });
      });
    } else {
      alert('Please enter all field');
    }
  };

  const handleImage = () => {
    const options: ImagePickerOptions = {
      title: 'Select Image',
      cancelButtonTitle: 'Cancel',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (res: ImagePickerResponse) => {
      const checkExt = res.fileName;
      // tslint:disable-next-line: no-empty
      if (res.didCancel) {
      } else if (res.error) {
        alert(res.error);
      } else if (checkExt.endsWith('.jpeg')) {
        const source = `data:image/jpeg;base64,${res.data}`;
        setImgProfile(source);
        onUpdateImage(source);
      } else if (checkExt.endsWith('.jpg')) {
        const source = `data:image/jpg;base64,${res.data}`;
        setImgProfile(source);
        onUpdateImage(source);
      } else if (checkExt.endsWith('.png')) {
        const source = `data:image/png;base64,${res.data}`;
        setImgProfile(source);
        onUpdateImage(source);
      } else {
        alert('Extention Image must jpeg, jpg, or png');
      }
    });
  };

  const onUpdateImage = (img: string) => {
    const {token, actionUpdateProfile} = props;
    const payload = {
      photo: img,
      fullname,
      email,
      mobileNoPrefix: mobilePre,
      mobileNo: mobileNumber,
      countryID: 100,
      salutation,
      birthDate,
      address,
    };
    InteractionManager.runAfterInteractions(() => {
      actionUpdateProfile(token, payload).then((res: any) => {
        if (res.type === 'UPDATEPROFILE_SUCCESS') {
          setModal(false);
        } else {
          alert(res.message);
        }
      });
    });
  };

  // Main Render
  return (
    <HighSafeArea style={{backgroundColor: Color.backWhite}}>
      <Header goBack={onBack} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubHeader />
        <Content
          imgProfile={oc(profile).photo(avatar)}
          salutation={oc(profile).salutation('')}
          fullname={profile.fullname}
          email={profile.email}
          mobilePre={profile.mobileNoPrefix}
          mobileNo={profile.mobileNo}
          onShowModalEdit={() => setModal(1)}
          onImage={handleImage}
          address={oc(profile).address('NO ADDRESS')}
          birthDate={oc(profile).birthDate(null)}
        />
      </ScrollView>
      <ModalEdit
        isVisible={modal === 1}
        onDismiss={() => setModal(null)}
        onChangeFullname={(text: string) => setFullname(text)}
        onChangeSalutation={(text: any) => setSalutation(text)}
        onChangeEmail={(text: string) => changeEmail(text)}
        validMail={validMail}
        onChangeMobilePre={(text: any) => setMobilePre(text)}
        onChangeMobileNumber={(text: any) => setMobileNumber(text)}
        onShowBirthDate={openModalBirth}
        onChangeAddress={(text: any) => setAddress(text)}
        selectedSalutation={salutation}
        valueFullname={fullname}
        valueEmail={email}
        valuePre={mobilePre}
        valueMobile={mobileNumber}
        valueAddress={address}
        birthDate={birthDate}
        onUpdate={onUpdate}
        isLoading={props.fetchUpdate}
      />
      <ModalBirthDate
        isVisible={modal === 2}
        onDismiss={closeModalBirth}
        onDatesChange={(date: any) => changeBirthDate(date)}
        date={birthDate}
      />
    </HighSafeArea>
  );
};
