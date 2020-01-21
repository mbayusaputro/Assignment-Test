import React from 'react';
import {InteractionManager, ScrollView} from 'react-native';
import Content from './Content';
import {HighSafeArea} from '../../../../../components';
import {MainSettingProps as Props} from '../../../interface/types';
import Header from './Header';
import {Color} from '../../../../../constants/Color';
import {oc} from 'ts-optchain';

export default (props: Props) => {
  // Function
  const onBack = () => {
    const {
      navigation: {goBack},
    } = props;
    InteractionManager.runAfterInteractions(() => goBack());
  };

  const onChangeLang = (item: any) => {
    const {actionLanguage} = props;
    InteractionManager.runAfterInteractions(() => {
      actionLanguage(item.id);
    });
  };

  // Main Render
  const {languange} = props;
  return (
    <HighSafeArea style={{backgroundColor: Color.backWhite}}>
      <Header callback={onBack} />
      <ScrollView>
        <Content
          selectedLang={oc(languange)('')}
          onChangeLang={(item: any) => onChangeLang(item)}
        />
      </ScrollView>
    </HighSafeArea>
  );
};
