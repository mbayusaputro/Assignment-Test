import React, {useContext} from 'react';
import {View} from 'react-native';
import dayjs from 'dayjs';
import dayID from 'dayjs/locale/id';
import dayEN from 'dayjs/locale/en';
import {Text, Card, Button} from '../../../../../components';
import {styles, Context} from '../components';
import CardItem from '../components/CardItem';

export default () => {
  // Context
  const {
    dataDetail,
    dataHotel,
    dataFlight,
    onSelectFlight,
    onSelectHotel,
    onClearHotel,
    onClearFlight,
  } = useContext(Context);

  const dateDetail = (date: any, type: any) => {
    const result = dayjs(date)
      .locale('id', type)
      .format('DD MMM YYYY');
    return result;
  };

  // Main Render
  return (
    <View style={{marginTop: -25}}>
      {/* DETAIL PACKAGE TOUR */}
      {dataDetail !== null ? (
        <Card style={styles.card}>
          <Text
            style={styles.textTitle}
            content={{id: 'Paket Liburan', en: 'Holiday Packages'}}
          />
          <View style={styles.hr} />
          <View style={styles.center}>
            <Text style={styles.textMedium}>{dataDetail.detail.title}</Text>
            <Text
              style={styles.textDesc}
              content={{
                id: `${dateDetail(
                  dataDetail.detail.trip_date.start_date,
                  dayID,
                )} - ${dateDetail(
                  dataDetail.detail.trip_date.end_date,
                  dayID,
                )}`,
                en: `${dateDetail(
                  dataDetail.detail.trip_date.start_date,
                  dayEN,
                )} - ${dateDetail(
                  dataDetail.detail.trip_date.end_date,
                  dayEN,
                )}`,
              }}
            />
            <Text
              style={styles.textDesc}
              content={{
                id: `${dataDetail.item.adult} Dewasa, ${dataDetail.item.child} Anak-anak `,
                en: `${dataDetail.item.adult} Adult, ${dataDetail.item.child} Child `,
              }}
            />
          </View>
        </Card>
      ) : null}

      {/* HOTEL */}
      {/* {dataHotel !== null ? (
        <CardItem
          type={{ id: 'Hotel', en: 'Hotel' }}
          onCancel={onClearHotel}
          title={dataHotel.title}
          description={dataHotel.room.name}
          start_date={null}
          end_date={null}
          price={dataHotel.price}
        />
      ) : (
          <View style={styles.contentButton}>
            <Button
              onPress={onSelectHotel}
              customStyle={styles.btnAdd}
              customTextStyle={styles.textPink}
              content={{ id: 'Tambah Hotel', en: 'Add Hotel' }}
              fullWidth
              isUpperCase
              type="secondary"
            />
          </View>
        )} */}

      {/* FLIGHT */}
      {/* {dataFlight !== null ? (
        <CardItem
          type={{ id: 'Pesawat', en: 'Flight' }}
          onCancel={onClearFlight}
          title={`${dataFlight.departure_flight.detail[0].departure_city_name}(${dataFlight.departure_flight.detail[0].departure_city}) - ${dataFlight.departure_flight.detail[0].arrival_city_name}(${dataFlight.departure_flight.detail[0].arrival_city})`}
          start_date={dataFlight.departure_flight.departure_date}
          end_date={dataFlight.departure_flight.arrival_date}
          price={
            dataFlight.departure_flight.price_adult +
            dataFlight.departure_flight.price_child +
            dataFlight.departure_flight.price_infant +
            dataFlight.return_flight.price_adult +
            dataFlight.return_flight.price_child +
            dataFlight.return_flight.price_infant
          }
        />
      ) : (
          <View style={styles.contentButton}>
            <Button
              onPress={onSelectFlight}
              customStyle={styles.btnAdd}
              customTextStyle={styles.textPink}
              content={{ id: 'Tambah Pesawat', en: 'Add Flight' }}
              fullWidth
              isUpperCase
              type="secondary"
            />
          </View>
        )} */}
    </View>
  );
};
