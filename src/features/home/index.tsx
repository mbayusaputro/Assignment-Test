import {connect} from 'react-redux';
import Home from './screen/Home';
import {AppState} from '../../reduxs/reducers';
import {sendMessage} from '../../reduxs/chats/action';

const mapStateToProps = (state: AppState) => ({
  chat: state.chat,
});

export default connect(
  mapStateToProps,
  {sendMessage},
)(Home);
