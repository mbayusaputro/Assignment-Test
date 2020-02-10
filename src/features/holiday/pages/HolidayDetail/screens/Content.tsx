import React from 'react';
import {View, ScrollView, TouchableOpacity as Touch} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import dayjs from 'dayjs';
import {Text, Card} from '../../../../../components';
import {
  styles,
  HolidayDetailContext as Context,
  CheckGreen,
  ShowMore,
} from '../components';
import {dataVisit, dataInclude, dataExclude} from '../components/data';
import {CloseRed, Bookmark} from '../components/Component';

const data = Array.apply(null, Array(20));

export default () => {
  // Context
  const context = React.useContext(Context);

  // Memo
  const IconBookmark = React.memo(Bookmark);
  const IconCheck = React.memo(CheckGreen);
  const IconClose = React.memo(CloseRed);
  const BtnShowMore = React.memo(ShowMore);

  // Main Render
  return (
    <View style={styles.scrollViewContent}>
      {/* Detail */}
      <View style={[styles.content, styles.vertical]}>
        <View style={styles.rowBetween}>
          <Text style={styles.textTitle}>{context.title}</Text>
          <IconBookmark />
        </View>
        <Text>By: Asita Tour</Text>
      </View>

      {/* DATE */}
      <View style={styles.vertical}>
        <Text style={[styles.textMedium, styles.content]}>Holiday Date</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10, marginTop: 10}}>
          {data.map((__: any, index: number) => (
            <Card style={styles.cardHorizontal} key={index}>
              <Text style={styles.textSmallBold}>
                {index + 1} - {index + 2}
              </Text>
              <Text
                content={{
                  id: dayjs().format('MMM YYYY'),
                  en: dayjs().format('MMM YYYY'),
                }}
              />
            </Card>
          ))}
        </ScrollView>
      </View>

      <View style={[styles.hr, styles.vertical]} />

      {/* BENEFIT */}
      <View style={[styles.content, styles.vertical]}>
        <Text style={styles.textMedium}>Visited Place</Text>
        <View style={styles.vertical}>
          {dataVisit.map((item, index) => (
            <View style={[styles.row, {marginBottom: 5}]} key={index}>
              <IconCheck />
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <BtnShowMore onPress={() => alert('Show More Visited Place')} />
      </View>

      {/* BENEFIT */}
      <View style={[styles.content, styles.vertical]}>
        <Text style={styles.textMedium}>Include</Text>
        <View style={styles.vertical}>
          {dataInclude.map((item, index) => (
            <View style={[styles.row, {marginBottom: 5}]} key={index}>
              <IconCheck />
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <BtnShowMore onPress={() => alert('Show More Include')} />
      </View>

      {/* CONS BENEFIT */}
      <View style={[styles.content, styles.vertical]}>
        <Text style={styles.textMedium}>Exclude</Text>
        <View style={styles.vertical}>
          {dataExclude.map((item, index) => (
            <View style={[styles.row, {marginBottom: 5}]} key={index}>
              <IconClose />
              <Text>{item}</Text>
            </View>
          ))}
        </View>
        <BtnShowMore onPress={() => alert('Show More Exclude')} />
      </View>

      <View style={[styles.hr, styles.vertical]} />

      <Touch style={[styles.content, styles.rowBetween, {marginBottom: 100}]}>
        <Text>Itinary</Text>
        <Icon name="chevron-right" size={20} />
      </Touch>
    </View>
  );
};
