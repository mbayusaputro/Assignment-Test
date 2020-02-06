import React from 'react';
import {View, FlatList} from 'react-native';
import {oc} from 'ts-optchain';
import {
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
  Fade,
} from 'rn-placeholder';
import {Text} from '../../../../../components';
import {styles, Card} from '../components';
import {CardContext} from '../components/CardContext';

type Props = {
  dataHotel: Array<any>;
  loading: boolean;
  onSelectHotel: (item: any) => void;
};

export default (props: Props) => {
  const {pathAsset} = React.useContext(CardContext);

  // Flatlist Conf
  const keyExtractor = (__: any, index: number) => index.toString();
  const renderItem = ({item, index}: any) => {
    return (
      <Card
        key={index}
        onPress={() => props.onSelectHotel(item)}
        title={item.name}
        star={item.categoryName.substring(0, 1)}
        location={item.zoneName}
        price={item.minRate}
        photo={pathAsset + oc(item).detail.images[0].path('aw.jpg')}
      />
    );
  };
  const loadingItem = ({__, index}: any) => (
    <View
      key={index}
      style={[styles.rowBetween, styles.card, {borderRadius: 10}]}>
      <Placeholder
        Left={() => (
          <PlaceholderMedia style={[styles.imgCard, {width: '30%'}]} />
        )}
        Animation={Fade}>
        <Placeholder Animation={Fade} style={styles.cardContent}>
          <PlaceholderLine width={75} height={20} />
          <PlaceholderLine width={30} height={10} />
          <PlaceholderLine width={50} height={10} />
          <PlaceholderLine width={90} height={20} />
        </Placeholder>
      </Placeholder>
    </View>
  );

  // Main Render
  const totalHotel = oc(props.dataHotel).length(0);
  return (
    <View style={styles.contentContent}>
      <View style={styles.center}>
        {props.loading ? (
          <Placeholder Animation={Fade}>
            <PlaceholderLine
              width={100}
              style={{marginHorizontal: 10, width: '30%', alignSelf: 'center'}}
            />
          </Placeholder>
        ) : (
          <Text
            style={styles.textSemiBold}
            content={{
              id: `Tersedia ${totalHotel} Hotel`,
              en: `Available ${totalHotel} Hotel`,
            }}
          />
        )}
      </View>
      <View style={styles.hr} />
      <FlatList
        data={props.loading ? new Array(2) : props.dataHotel}
        renderItem={props.loading ? loadingItem : renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{paddingBottom: 200}}
        maxToRenderPerBatch={50}
        initialNumToRender={3}
        windowSize={10}
      />
    </View>
  );
};
