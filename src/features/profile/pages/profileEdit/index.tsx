import React from 'react';
// Redux
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getProfile} from '../../../../reduxs/profile/selector';
//Component
import ProfileEdit from './screens';

const mapStateToProps = (state: any) => ({
  profile: getProfile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

const Default = (props: any) => <ProfileEdit {...props} />;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Default);
