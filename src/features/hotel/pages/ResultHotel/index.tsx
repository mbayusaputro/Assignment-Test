import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionSearchHotel} from '../../../../reduxs/hotel/action';
import {
  getFetchSearchHotel,
  getPathAsset,
} from '../../../../reduxs/hotel/selector';
import ResultHotel from './screens';

const mapStateToProps = (state: any) => ({
  loadingSearch: getFetchSearchHotel(state),
  pathAsset: getPathAsset(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionSearchHotel: (__: object) => actionSearchHotel(__),
    },
    dispatch,
  );

const Default = (props: any) => <ResultHotel {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);
