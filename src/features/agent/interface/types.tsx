import {NavigationScreenProp, NavigationState} from 'react-navigation';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface TopUp extends Props {
  isLoading: boolean;
  token: string;
  profile: any;
  actionTopUp: (_1: string, _2: object) => Promise<void>;
}

export interface Withdraw extends Props {
  isLoading: boolean;
  token: string;
  profile: any;
  actionWithdraw: (_1: string, _2: object) => Promise<void>;
}

export type ContentChangeProps = {
  onSubmit: () => void;
  modalInput: (_1?: string) => void;
  modalSelect: () => void;
  amount: number;
  balance: number;
  accountNumber?: string;
  bankName?: string;
};

export type ModalProps = {
  isVisible: boolean;
  onDismiss: () => void;
  onSave: (_1: any) => void;
  model?: string;
};

export type FieldProps = {
  onPress: () => void;
  name: string;
  code: string;
};
