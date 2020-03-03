import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {getPathAsset} from '../../../../reduxs/hotel/selector';
import {actionDataHotel} from '../../../../reduxs/holiday/action';
import {getAddon} from '../../../../reduxs/holiday/selector';
import SelectRoomHotel from './screens';

const mapStateToProps = (state: any) => ({
  pathAsset: getPathAsset(state),
  addon: getAddon(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionDataHotel: (data: object) => actionDataHotel(data),
    },
    dispatch,
  );

const Default = (props: any) => <SelectRoomHotel {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);
