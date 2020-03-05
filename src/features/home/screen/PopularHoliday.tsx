import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from '../../../components';
import {ImageSlider, styles, HomeContext} from '../components';

const title = {
  id: 'Paket Liburan Paling Populer',
  en: 'Most Popular Holiday Packages',
};
const subtitle = {
  id: 'Hari ini, ke mana Anda ingin pergi selanjutnya?',
  en: 'Today, where do you want to go next?',
};
const data = [1, 2, 3, 4, 5];

export default (props: any) => {
  const {dataPopular, onDetail} = React.useContext(HomeContext);

  // Main
  return (
    <View style={[styles.contentPopular, styles.vertical]}>
      <View style={styles.content}>
        <Text style={[styles.textTitle, {textAlign: 'left'}]} content={title} />
        <Text
          style={[styles.textSubTitle, {textAlign: 'left'}]}
          content={subtitle}
        />
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}
        indicatorStyle="white">
        {dataPopular.map((item: any, index: number) => (
          <ImageSlider
            key={index}
            onPress={() => onDetail(item)}
            title={item.tour.title}
            img={item.image}
            price={item.tour.price_adult}
            style={index === 0 ? styles.imgFirst : null}
          />
        ))}
      </ScrollView>
    </View>
  );
};
