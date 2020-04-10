import React from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actionHolidayInsert} from '../../../../reduxs/holiday/action';
import {getFetchHolidayInsert} from '../../../../reduxs/holiday/selector';
import {getToken} from '../../../../reduxs/profile/selector';
import CreatePackages from './screens/index';

const mapStateToProps = (state: any) => ({
  isLoading: getFetchHolidayInsert(state),
  token: getToken(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionHolidayInsert: (payload: object, token: string) =>
        actionHolidayInsert(payload, token),
    },
    dispatch,
  );

const Default = (props: any) => <CreatePackages {...props} />;

export default connect(mapStateToProps, mapDispatchToProps)(Default);
