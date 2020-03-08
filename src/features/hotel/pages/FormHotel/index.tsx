import React from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  actionListDestinationHotel,
  actionSearchHotel,
} from '../../../../reduxs/hotel/action';
import {
  getFetchListDestinationHotel,
  getFetchSearchHotel,
} from '../../../../reduxs/hotel/selector';
import FormHotel from './screen';
import {getAddon} from '../../../../reduxs/holiday/selector';

const mapStateToProps = (state: any) => ({
  loadingList: getFetchListDestinationHotel(state),
  loadingSearch: getFetchSearchHotel(state),
  addon: getAddon(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionListDestinationHotel: (__: object) =>
        actionListDestinationHotel(__),
      actionSearchHotel: (__: object) => actionSearchHotel(__),
    },
    dispatch,
  );

const Default = (props: any) => <FormHotel {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);
