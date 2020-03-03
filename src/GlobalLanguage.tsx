import React, {Fragment, ReactNode} from 'react';
import {connect} from 'react-redux';
import {Dispatch, bindActionCreators} from 'redux';
import {actionLanguage} from './reduxs/language/action';
import {getLanguage} from './reduxs/language/selector';
import {LanguageContext} from './helpers/LanguageContext';

type Props = {
  language: string;
  actionLanguage: (lang: string) => void;
  children: ReactNode;
};

const GlobalLanguage = (props: Props) => {
  const {children, language} = props;
  const globalLang = {language};
  return (
    <Fragment>
      <LanguageContext.Provider value={globalLang}>
        {children}
      </LanguageContext.Provider>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  language: getLanguage(state),
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      actionLanguage: (lang: string) => actionLanguage(lang),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(GlobalLanguage);
