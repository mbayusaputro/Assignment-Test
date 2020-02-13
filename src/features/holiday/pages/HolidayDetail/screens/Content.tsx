import React from 'react';
import {View, ScrollView, TouchableOpacity as Touch} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import dayjs from 'dayjs';
import dayID from 'dayjs/locale/id';
import dayEN from 'dayjs/locale/en';
import {Text} from '../../../../../components';
import {
  styles,
  HolidayDetailContext as Context,
  CheckGreen,
  ShowMore,
} from '../components';
import {CloseRed, Bookmark} from '../components/Component';

export default () => {
  // State
  const [showVisited, setShowVisited] = React.useState(false);
  const [showInclude, setShowInclude] = React.useState(false);
  const [showExclude, setShowExclude] = React.useState(false);

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
        <Text>By: {context.by}</Text>
      </View>

      {/* DATE */}
      <View style={styles.vertical}>
        <Text style={[styles.textMedium, styles.content]}>Holiday Date</Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 10, marginTop: 10}}>
          {context.dataDate !== null
            ? context.dataDate.map((item: any, index: number) => (
                <Touch
                  activeOpacity={0.5}
                  onPress={() => context.onSelectDate(index)}
                  style={[
                    styles.cardHorizontal,
                    context.selectedDate === index ? styles.pinkColor : {},
                  ]}
                  key={index}>
                  <Text
                    style={[
                      styles.textSmallBold,
                      context.selectedDate === index ? {color: '#FFF'} : {},
                    ]}>
                    {dayjs(item.start_date).format(
                      context.selectedDate === index ? 'D MMM' : 'D',
                    )}{' '}
                    -{' '}
                    {dayjs(item.end_date).format(
                      context.selectedDate === index ? 'D MMM' : 'D',
                    )}
                  </Text>
                  <Text
                    style={
                      context.selectedDate === index ? {color: '#fff'} : {}
                    }>
                    {dayjs(item.start_date).format(
                      context.selectedDate === index ? 'YYYY' : 'MMM YYYY',
                    )}
                  </Text>
                </Touch>
              ))
            : null}
        </ScrollView>
      </View>

      <View style={[styles.hr, styles.vertical]} />

      {/* BENEFIT */}
      <View style={[styles.content, styles.vertical]}>
        <Text style={styles.textMedium}>Visited Place</Text>
        <View style={styles.vertical}>
          {context.dataVisit !== null
            ? context.dataVisit.map((item, index) =>
                index < 2 ? (
                  <View style={[styles.row, {marginBottom: 5}]} key={index}>
                    <IconCheck />
                    <Text>{item.name}</Text>
                  </View>
                ) : showVisited ? (
                  <View style={[styles.row, {marginBottom: 5}]} key={index}>
                    <IconCheck />
                    <Text>{item.name}</Text>
                  </View>
                ) : null,
              )
            : null}
        </View>
        <BtnShowMore
          more={showVisited}
          onPress={() => setShowVisited(!showVisited)}
        />
      </View>

      {/* INCLUDE */}
      <View style={[styles.content, styles.vertical]}>
        <Text style={styles.textMedium}>Include</Text>
        <View style={styles.vertical}>
          {context.dataInclude !== null
            ? context.dataInclude.map((item, index) =>
                index < 2 ? (
                  <View style={[styles.row, {marginBottom: 5}]} key={index}>
                    <IconCheck />
                    <Text>{item}</Text>
                  </View>
                ) : showInclude ? (
                  <View style={[styles.row, {marginBottom: 5}]} key={index}>
                    <IconCheck />
                    <Text>{item}</Text>
                  </View>
                ) : null,
              )
            : null}
        </View>
        <BtnShowMore
          more={showInclude}
          onPress={() => setShowInclude(!showInclude)}
        />
      </View>

      {/* EXCLUDE */}
      <View style={[styles.content, styles.vertical]}>
        <Text style={styles.textMedium}>Exclude</Text>
        <View style={styles.vertical}>
          {context.dataExclude !== null
            ? context.dataExclude.map((item, index) =>
                index < 2 ? (
                  <View style={[styles.row, {marginBottom: 5}]} key={index}>
                    <IconClose />
                    <Text>{item}</Text>
                  </View>
                ) : showExclude ? (
                  <View style={[styles.row, {marginBottom: 5}]} key={index}>
                    <IconClose />
                    <Text>{item}</Text>
                  </View>
                ) : null,
              )
            : null}
        </View>
        <BtnShowMore
          more={showExclude}
          onPress={() => setShowExclude(!showExclude)}
        />
      </View>

      <View style={[styles.hr, styles.vertical]} />

      <Touch style={[styles.content, styles.rowBetween, {marginBottom: 100}]}>
        <Text>Itinary</Text>
        <Icon name="chevron-right" size={20} />
      </Touch>
    </View>
  );
};
