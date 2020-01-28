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

type Props = {
  dataHotel: Array<any>;
  loading: boolean;
};

export default (props: Props) => {
  // Flatlist Conf
  const keyExtractor = (__: any, index: number) => index.toString();
  const renderItem = ({item, index}: any) => (
    <Card
      key={index}
      title={item.title}
      star={item.rate}
      location={item.location}
      price={item.price}
      photo={item.photo}
    />
  );
  const loadingItem = ({__, index}: any) => (
    <Placeholder
      key={index}
      Left={() => <PlaceholderMedia style={styles.imgCard} />}
      Animation={Fade}
      style={[styles.card, styles.rowCenter, {borderRadius: 10}]}>
      <PlaceholderLine width={75} />
      <PlaceholderLine width={30} />
      <PlaceholderLine width={50} />
      <PlaceholderLine width={90} />
    </Placeholder>
  );

  // Main Render
  const totalHotel = oc(props.dataHotel).length(0);
  return (
    <View style={styles.contentContent}>
      <View style={styles.center}>
        <Text
          style={styles.textSemiBold}
          content={{
            id: `Tersedia ${totalHotel} Hotel`,
            en: `Available ${totalHotel} Hotel`,
          }}
        />
      </View>
      <View style={styles.hr} />
      <FlatList
        data={props.loading ? new Array(5) : props.dataHotel}
        renderItem={props.loading ? loadingItem : renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={{paddingBottom: 200}}
        style={styles.contentPadding}
      />
    </View>
  );
};