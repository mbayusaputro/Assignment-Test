import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity as Touch,
  ActivityIndicator,
} from 'react-native';
import normalize from '../../../../../constants/normalize';
import {
  Header,
  Imaging,
  SubHeader,
  InputText,
  Text,
} from '../../../../../components';
import {Color} from '../../../../../constants/Color';
import {InputButton, styles} from '../components';
import Toast from 'react-native-easy-toast';

type Props = {
  onClose: () => void;
  onSearch: (text: any) => void;
  onSelect: (item: any) => void;
  data: Array<any>;
  loading: boolean;
  toastRef: any;
};

export default (props: Props) => {
  const {onClose, onSearch, data, loading, onSelect, toastRef} = props;

  // Flatlist
  const keyExtractor = (__: any, index: number) => index.toString();
  const renderItem = ({item, index}: any) => (
    <Touch
      onPress={() => onSelect(item)}
      key={index}
      style={[styles.rowBetween, styles.itemDestination]}>
      <View style={{width: '80%'}}>
        <Text style={styles.textItemDest}>{item.name}</Text>
        <Text style={styles.textSubItemDest}>{item.type}</Text>
      </View>
      <View style={[styles.typeItem, {width: '17.5%'}]}>
        <Text style={styles.textSubItemDest}>ID</Text>
      </View>
    </Touch>
  );
  const emptyComponent = () => (
    <View style={styles.center}>
      <Text content={{id: 'Data tidak tersedia', en: 'Data not available'}} />
    </View>
  );

  // Main Render
  return (
    <View style={{flex: 1, backgroundColor: Color.backWhite}}>
      <Toast ref={toastRef} />
      <Header
        content={{id: 'Temukan Hotel Tujuan', en: 'Find Destination Hotels'}}
        iconLeft={
          <Imaging
            style={{height: normalize(16), width: normalize(20), marginTop: 2}}
            source={require('../../../../../assets/icons/close.png')}
            resizeMode="contain"
          />
        }
        callback={onClose}
      />
      <SubHeader />
      <View style={styles.content}>
        <InputButton
          icons={require('../../../../../assets/icons/map.png')}
          custom={
            <View style={{width: '100%'}}>
              <InputText
                placeholder="Search..."
                onSubmitEditing={(event: any) =>
                  onSearch(event.nativeEvent.text)
                }
                onChangeText={(event: string) => onSearch(event)}
                style={{borderWidth: 0, width: '100%', margin: 0, padding: 0}}
                autoFocus={true}
                returnKeyType="search"
              />
            </View>
          }
          customStyle={{
            marginVertical: 0,
            paddingHorizontal: 20,
            paddingVertical: 0,
          }}
        />
      </View>

      <View style={[styles.contentModalCheckout, {marginTop: 10, flex: 1}]}>
        <Text>Popular Destination</Text>
        {loading ? (
          <ActivityIndicator size="large" color={Color.tealBlue} />
        ) : (
          <FlatList
            data={data}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            style={{paddingTop: 10}}
            ListEmptyComponent={emptyComponent}
          />
        )}
      </View>
    </View>
  );
};
