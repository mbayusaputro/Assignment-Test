import React from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionBookHotel} from '../../../../reduxs/hotel/action';
import {getFetchBookHotel} from '../../../../reduxs/hotel/selector';
import {getToken, getProfile} from '../../../../reduxs/profile/selector';
import BookingFormHotel from './screens';

const mapStateToProps = (state: any) => ({
  loadingBook: getFetchBookHotel(state),
  token: getToken(state),
  isProfile: getProfile(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionBookHotel: (payload: object, token: string) =>
        actionBookHotel(payload, token),
    },
    dispatch,
  );

const Default = (props: any) => <BookingFormHotel {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);
