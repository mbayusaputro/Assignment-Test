import React from 'react';
import {View, FlatList, TouchableOpacity as Touch} from 'react-native';
import FastImage from 'react-native-fast-image';
import ImageView from 'react-native-image-viewing';
import {Header, Imaging, Text} from '../../../../../components';
import {styles} from '../components';
import {Color} from '../../../../../constants/Color';

type Props = {
  onClose: () => void;
  data: Array<any>;
};

type FooterProps = {
  imageIndex: number;
  imagesCount: number;
};

export default (props: Props) => {
  // Props
  const {onClose, data} = props;

  // State
  const [dataImage, setDataImage] = React.useState([]);
  const [showImage, onShowImage] = React.useState(false);
  const [indexImage, setImageIndex] = React.useState(0);

  React.useEffect(() => {
    if (dataImage.length === 0) {
      checkDataImage();
    }
  }, []);

  // Function
  const checkDataImage = () => {
    let arr = [];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
      const img = {
        uri: data[i].url,
      };
      arr.push(img);
    }
    setDataImage(arr);
  };
  const setOnShowImage = (id: number) => {
    setImageIndex(id);
    setTimeout(() => {
      onShowImage(true);
    }, 500);
  };

  // Flatlist
  const keyExtractor = (item: any, index: number) => index.toString();
  const renderItem = ({item, index}: any) => {
    return (
      <Touch key={index} onPress={() => setOnShowImage(index)}>
        <Imaging
          source={{uri: item.url, priority: FastImage.priority.high}}
          resizeMode="contain"
          style={styles.imageList}
        />
      </Touch>
    );
  };

  // Image View
  const ImageFooter = ({imageIndex, imagesCount}: FooterProps) => (
    <View style={[{width: '100%'}, styles.center]}>
      <Text style={styles.textWhite}>{`${imageIndex +
        1} / ${imagesCount}`}</Text>
    </View>
  );

  // Main Render
  return (
    <View style={{flex: 1, backgroundColor: Color.backWhite}}>
      <Header
        callback={onClose}
        iconLeft={
          <Imaging
            source={require('../../../../../assets/icons/close.png')}
            resizeMode="contain"
            style={[styles.iconBack, {marginLeft: 10}]}
            tintColor={showImage ? '#000' : Color.white}
          />
        }
        style={{backgroundColor: showImage ? '#000' : Color.marineBlue}}
        textStyle={{color: showImage ? '#000' : Color.white}}
        content={{id: 'Gambar', en: 'Images'}}
      />
      <FlatList
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        numColumns={3}
      />

      <ImageView
        images={dataImage}
        visible={showImage}
        animationType="slide"
        imageIndex={indexImage}
        swipeToCloseEnabled={true}
        doubleTapToZoomEnabled={true}
        onRequestClose={() => onShowImage(false)}
        FooterComponent={({imageIndex}) => (
          <ImageFooter imageIndex={imageIndex} imagesCount={dataImage.length} />
        )}
      />
    </View>
  );
};
