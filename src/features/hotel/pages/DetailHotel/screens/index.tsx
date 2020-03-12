import React from 'react';
import {oc} from 'ts-optchain';
import {HighSafeArea} from '../../../../../components';
import Content from './Content';
import Footer from './Footer';
import {DetailHotelProps as Props} from '../../../interface/types';
import {DetailHotelContext, Modal} from '../components';
import ModalAbout from './ModalAbout';
import ModalImage from './ModalImage';
import {Platform, Linking} from 'react-native';

export default (props: Props) => {
  // State
  const [modal, setModal] = React.useState(null);

  const {
    navigation: {getParam},
    pathAsset,
  } = props;
  const selectedHotel = getParam('selectedHotel');
  const payload = getParam('payload');

  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    goBack();
  };

  const onSetModal = (id: any) => {
    setModal(id);
  };

  const openMaps = () => {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${selectedHotel.latitude},${selectedHotel.longitude}`;
    const label = selectedHotel.name;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  };

  const onSelectHotel = () => {
    const {
      navigation: {navigate},
    } = props;
    navigate('SelectRoomHotel', {
      selectedHotel,
      payload,
    });
  };

  // Main Render
  return (
    <HighSafeArea>
      <DetailHotelContext.Provider
        value={{
          onShowImage: () => onSetModal(1),
          onShowAbout: () => onSetModal(3),
        }}>
        <Content
          callback={onBack}
          titleHotel={selectedHotel.name}
          rate={parseInt(selectedHotel.categoryName.split(' ')[0], 0)}
          photo={pathAsset + oc(selectedHotel).detail.images[0].path('aw.jpg')}
          accommodationType={oc(selectedHotel).detail.accommodationTypeCode(
            'Hotel',
          )}
          location={selectedHotel.detail.address.content}
          openMaps={openMaps}
        />
      </DetailHotelContext.Provider>
      <Footer
        price={oc(selectedHotel).minRate(0)}
        onSelectHotel={onSelectHotel}
      />

      <Modal
        isVisible={modal === 1}
        onDismiss={() => setModal(null)}
        children={
          <ModalImage
            onClose={() => setModal(null)}
            data={selectedHotel.detail.images}
            path={pathAsset}
          />
        }
      />

      <Modal
        isVisible={modal === 3}
        onDismiss={() => setModal(null)}
        children={
          <ModalAbout
            onClose={() => setModal(null)}
            desc={selectedHotel.detail.description.content}
          />
        }
      />
    </HighSafeArea>
  );
};
