import React from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionLanguage} from '../../../../reduxs/language/action';
import {getLanguage} from '../../../../reduxs/language/selector';
import MainSetting from './screens';

const mapStateToProps = (state: any) => ({
  languange: getLanguage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionLanguage: (content: string) => actionLanguage(content),
    },
    dispatch,
  );

const Default = (props: any) => <MainSetting {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);
