import React from 'react';
import {connect} from 'react-redux';
import {getPathAsset} from '../../../../reduxs/hotel/selector';
import SelectRoomHotel from './screens';

const mapStateToProps = (state: any) => ({
  pathAsset: getPathAsset(state),
});

const Default = (props: any) => <SelectRoomHotel {...props} />;

export default connect(mapStateToProps)(Default);
