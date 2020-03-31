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
      navigation: {navigate},
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
      onCheckStatus,
      token,
    } = this.props;
    const type = getParam('typeScreen');
    const trx_id = getParam('productID');

    // Validate Agent
    type === 'agent'
      ? onCheckStatus(trx_id, token).then((res: any) => {
          if (res.type === 'CHECK_TOPUP_SUCCESS') {
            if (res.data[0].status !== 'WAITING_PAYMENT') {
              this.goTicket();
            }
          }
        })
      : actionCheckPaymentMidtrans(trx_id, type).then((res: any) => {
          if (res.type === 'CHECK_PAYMENT_SUCCESS') {
            if (res.data.status !== 'WAITING_PAYMENT') {
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

  goBack = () => {
    this.props.navigation.goBack();
  };

  // Main Render
  render() {
    const {isVisible} = this.state;
    return (
      <HighSafeArea>
        <Header content={headerLang} callback={this.goBack} />
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
            id: 'Konfirmasi Pembayaran',
            en: 'Payment Confirmation',
          }}
          desc={{
            id: 'Apakah Anda yakin untuk keluar dari halaman pembayaran?',
            en: 'Are you sure to leave from this payment page?',
          }}
          btnOk={{id: 'Ya', en: 'Yes'}}
          btnCancel={{id: 'Batal', en: 'Cancel'}}
          onDismiss={() => this.setState({isVisible: null})}
          onOk={this.goHome}
        />
      </HighSafeArea>
    );
  }
}
