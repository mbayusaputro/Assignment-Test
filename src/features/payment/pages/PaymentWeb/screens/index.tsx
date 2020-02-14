import React, {PureComponent} from 'react';
import WebView from 'react-native-webview';
import {BackHandler} from 'react-native';
import {
  HighSafeArea,
  Header,
  Card,
  Text,
  AlertModal,
} from '../../../../../components';
import {
  PayWebProps as Props,
  PayWebState as State,
} from '../../../interface/types';
import {Modal} from '../components';
import {StackActions, NavigationActions} from 'react-navigation';
import ModalFirst from './ModalFirst';

const headerLang = {id: 'Halaman Pembayaran', en: 'Payment Page'};

export default class PaymentWeb extends PureComponent<Props, State> {
  // Declaration Function
  backButton: any;
  setInterval: number;

  // State
  constructor(props: any) {
    super(props);
    this.state = {
      isVisible: null,
    };
  }

  componentDidMount() {
    this.setState({isVisible: 1});
    this.backButton = BackHandler.addEventListener('hardwareBackPress', () => {
      this.onBackPressed();
      return true;
    });

    this.setInterval = setInterval(() => {
      this.checkPaymentStatus();
    }, 5000);
  }

  componentWillUnmount() {
    this.backButton.remove();
    clearInterval(this.setInterval);
  }

  // Handle when BackButton is Pressed
  onBackPressed = () => {
    this.setState({isVisible: 2});
  };

  // Navigate to Home
  goTicket = () => {
    const {
      navigation: {dispatch, navigate},
    } = this.props;
    navigate('ETicket');
  };

  goHome = () => {
    const {
      navigation: {dispatch},
    } = this.props;
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName: 'Tabs',
          action: NavigationActions.navigate({
            routeName: 'Home',
          }),
        }),
      ],
    });
    dispatch(resetAction);
  };

  // Check Payment Status
  checkPaymentStatus = () => {
    const {
      actionCheckPaymentMidtrans,
      navigation: {getParam},
    } = this.props;
    const type = getParam('typeScreen');
    const trx_id = getParam('productID');
    actionCheckPaymentMidtrans(trx_id, type).then((res: any) => {
      if (res.type === 'CHECK_PAYMENT_SUCCESS') {
        if (res.data.Status !== 'WAITING_PAYMENT') {
          this.goTicket();
        }
      }
    });
  };

  // Get SOURCE WEB
  sourceURI = () => {
    const {
      navigation: {getParam},
    } = this.props;
    return getParam('source');
  };

  // Main Render
  render() {
    const {isVisible} = this.state;
    return (
      <HighSafeArea>
        <Header content={headerLang} />
        <WebView source={{uri: this.sourceURI()}} />
        <Modal
          isVisible={isVisible === 1}
          onDismiss={() => this.setState({isVisible: null})}>
          <ModalFirst />
        </Modal>
        <AlertModal
          qna={true}
          isVisible={isVisible === 2}
          title={{
            id: 'Anda yakin ingin keluar?',
            en: 'Are you sure you want to leave?',
          }}
          desc={{
            id: 'Anda bisa melanjutkannya nanti melalui My Order',
            en: 'You can continue later through My Order',
          }}
          btnOk={{id: 'Ya, keluar sekarang', en: 'Yes, leave now'}}
          btnCancel={{id: 'Batal', en: 'Cancel'}}
          onDismiss={() => this.setState({isVisible: null})}
          onOk={this.goHome}
        />
      </HighSafeArea>
    );
  }
}
