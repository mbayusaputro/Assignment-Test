import React, {useState} from 'react';
import {HighSafeArea} from '../../../../components';
import {Header, SubHeader} from '../../../../components/Header';
import {styles, Modal, Calendar} from './components';
import Content from './screens/Content';
import moment from 'moment';

export default (props: any) => {
  // State
  const [isVisible, setVisible] = useState('');
  const [isSelect, setSelect] = useState({
    id: 'Laporan Sales',
    en: 'Sales Report',
    alias: 'sales',
  });
  const [isFrom, setFrom] = useState(new Date());
  const [isTo, setTo] = useState(new Date());

  // Props
  const {
    navigation: {goBack, navigate},
  } = props;

  // Function
  const onBack = () => {
    goBack();
  };

  const onSave = (value: any) => {
    isVisible === 'select'
      ? setSelect(value)
      : isVisible === 'from'
      ? setFrom(value)
      : setTo(value);
    setTimeout(() => {
      setVisible('');
    }, 200);
  };

  const fieldPress = (value: string) => {
    setVisible(value);
  };

  const onSubmit = () => {
    let payload = {
      type: isSelect,
      start: moment(isFrom).format('YYYY-MM-DD'),
      end: moment(isTo).format('YYYY-MM-DD'),
    };
    navigate('ReportResult', {payload});
  };

  // Main Render
  return (
    <HighSafeArea style={styles.SafeContainer}>
      <Header callback={onBack} content={{id: 'Laporan', en: 'Report'}} />
      <SubHeader />

      <Content
        onSubmit={() => onSubmit()}
        onField={fieldPress}
        select={isSelect}
        startDate={isFrom}
        endDate={isTo}
      />

      {/* Modal Select Report */}
      <Modal
        isVisible={isVisible === 'select'}
        onDismiss={() => setVisible('')}
        onSave={onSave}
      />

      {/* Modal Calendar */}
      <Calendar
        isVisible={isVisible === 'from'}
        onDismiss={() => setVisible('')}
        onSave={onSave}
      />
      <Calendar
        isVisible={isVisible === 'to'}
        onDismiss={() => setVisible('')}
        onSave={onSave}
      />
    </HighSafeArea>
  );
};
