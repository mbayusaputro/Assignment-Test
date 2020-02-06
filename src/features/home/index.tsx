import {connect} from 'react-redux';
import {getIsLogin} from '../../reduxs/profile/selector';
import Home from './screen/Home';

const mapStateToProps = (state: any) => ({
  isLogin: getIsLogin(state),
});

export default connect(mapStateToProps)(Home);
