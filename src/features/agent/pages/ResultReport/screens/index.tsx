import React, {useState, useEffect, useRef} from 'react';
import {HighSafeArea, LoadingBook} from '../../../../../components';
import {Header, SubHeader} from '../../../../../components/Header';
import {styles, Modal} from '../components';
import Content from './Content';
import {ReportProps as Props} from '../../../interface/types';
import Toast from 'react-native-easy-toast';
import {oc} from 'ts-optchain';

export default (props: Props) => {
  // State
  const [isVisible, setVisible] = useState(false);
  const [isData, setData] = useState([]);
  const [isStats, setStats] = useState(0);
  const [isMeta, setMeta] = useState(null);
  const [isDetail, setDetail] = useState(null);

  // Props
  const {
    navigation: {goBack, getParam},
    onReport,
    token,
    isLoading,
  } = props;
  const params = getParam('payload');

  // Ref
  const toastRef: any = useRef();

  // Lifecycle
  useEffect(() => {
    getData(1);
  }, []);

  // Function
  const onBack = () => {
    goBack();
  };

  const getData = (page: number) => {
    const payload = {
      type: params.type.alias,
      start: params.start,
      end: params.end,
      page: page,
    };
    onReport(token, payload).then((res: any) => {
      res.type === 'REPORT_SUCCESS'
        ? (setMeta(res.meta),
          setData(isData.concat(res.data.items)),
          params.type.alias === 'sales'
            ? setStats(res.data.stats.total_amount)
            : setStats(res.data.calculation[0].total_amount))
        : toastRef.current.show(res.message, 1500);
    });
  };

  const onDetail = (data: object) => {
    setVisible(true);
    setDetail(data);
  };

  const onMore = (page: number) => {
    if (oc(isMeta).last_page(0) >= page) {
      getData(page);
    }
  };

  // Main Render
  return (
    <HighSafeArea style={styles.SafeContainer}>
      <Toast ref={toastRef} />
      <Header callback={onBack} content={params.type} />
      <SubHeader />
      <Content
        type={params.type.alias}
        onField={onDetail}
        data={isData}
        stats={isStats}
        meta={oc(isMeta).current_page(0)}
        onMore={onMore}
        isLoading={isLoading}
      />
      <Modal
        isVisible={isVisible}
        onDismiss={() => setVisible(false)}
        detail={isDetail}
        model={params.type.alias}
      />
      <LoadingBook isVisible={isLoading} />
    </HighSafeArea>
  );
};
