import React from 'react';
import {connect} from 'react-redux';
import {getPathAsset} from '../../../../reduxs/hotel/selector';
import DetailHotel from './screens';

const mapStateToProps = (state: any) => ({
  pathAsset: getPathAsset(state),
});

const Default = (props: any) => <DetailHotel {...props} />;

export default connect(mapStateToProps)(Default);
