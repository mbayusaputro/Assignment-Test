import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {verticalScale, scale} from '../../../../../constants/ScaleUtils';
import {Color} from '../../../../../constants/Color';
import moment from 'moment';

interface Props {
  data: any;
  title: string;
}

const InfoFlight = (props: Props) => {
  return (
    <View>
      <View style={{marginVertical: 10}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: Color.oceanBlue,
              fontFamily: 'NunitoSans-Bold',
              fontSize: 16,
            }}>
            {props.title}
          </Text>
          <Text style={styles.regular}>
            {moment(props.data.departure_date).format('ddd, DD MMM')}
          </Text>
        </View>
        {props.data.detail.map((item: any, i: number) => {
          return (
            <View key={i}>
              <View style={styles.container}>
                <View style={styles.col}>
                  <View>
                    <Text style={styles.bold}>
                      {item.simple_departure_time}
                    </Text>
                    <Text style={styles.subbold}>
                      {moment(item.departure_date_time).format('DD MMM')}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.bold}>
                      {`${item.duration_hour} ${item.duration_minute}`}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.bold}>{item.simple_arrival_time}</Text>
                    <Text style={styles.subbold}>
                      {moment(item.simple_arrival_date_time).format('DD MMM')}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginHorizontal: 10,
                  }}>
                  <View style={styles.ocircle} />
                  <View style={styles.line} />
                  <View style={styles.circle} />
                </View>
                <View style={styles.col}>
                  <View>
                    <Text style={styles.bold}>
                      {`${item.departure_city_name} (${item.departure_city})`}
                    </Text>
                    <Text style={styles.subbold}>
                      {item.departure_airport_name}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 20,
                    }}>
                    <Image
                      style={{
                        height: verticalScale(30),
                        width: scale(70),
                        marginRight: 10,
                        marginTop: 3,
                      }}
                      source={{uri: item.img_src}}
                      resizeMode="contain"
                    />
                    <Text style={[styles.regular, {fontSize: 13}]}>
                      {`(${item.flight_number}) • ${item.service_class}`}
                    </Text>
                  </View>
                  <View>
                    <Text style={styles.bold}>
                      {`${item.arrival_city_name} (${item.arrival_city})`}
                    </Text>
                    <Text style={styles.subbold}>
                      {item.arrival_airport_name}
                    </Text>
                  </View>
                </View>
              </View>
              {i > 0 && i < item.length ? (
                <Text style={styles.bold}>Transit</Text>
              ) : (
                []
              )}
            </View>
          );
        })}
        <View style={styles.linehorizon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  col: {
    justifyContent: 'space-between',
  },
  bold: {
    fontFamily: 'NunitoSans-Bold',
  },
  subbold: {
    fontFamily: 'NunitoSans-Regular',
    color: Color.labelgray,
    fontSize: 13,
  },
  regular: {
    fontFamily: 'NunitoSans-Regular',
  },
  circle: {
    backgroundColor: Color.labelgray,
    height: 10,
    width: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  ocircle: {
    borderColor: Color.labelgray,
    borderWidth: 1,
    height: 10,
    width: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  line: {
    backgroundColor: Color.labelgray,
    width: 1,
    height: 100,
  },
  linehorizon: {
    backgroundColor: Color.labelgray,
    height: 1,
  },
});

export default InfoFlight;
