import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {ImageSourcePropType} from 'react-native';

export interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

export interface TopUp extends Props {
  token: string;
  profile: any;
  actionTopUp: (_1: string, _2: object) => Promise<void>;
  getProfile: (_1: string) => Promise<void>;
}

export interface Withdraw extends Props {
  isLoading: boolean;
  token: string;
  profile: any;
  actionWithdraw: (_1: string, _2: object) => Promise<void>;
  getProfile: (_1: string) => Promise<void>;
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
  onSave?: (data: any, type?: any) => void;
  model?: string;
  detail?: any;
  title?: string;
  inputType?: string;
};

export type FieldProps = {
  onPress: () => void;
  name: string;
  code: string;
};

export type ContentProps = {
  onSubmit: () => void;
  onField: (type: string) => void;
  select?: any;
  startDate?: Date;
  endDate?: Date;
  formData?: any;
};

export type CardProps = {
  icons?: ImageSourcePropType;
  label: any;
  fieldValue?: any;
  type?: number;
  onPress: () => void;
};

export type FieldProfileProps = {
  img: ImageSourcePropType;
  name: string;
  // amountPrev: number;
  // amountNext: number;
  // amountSubTotal?: number;
  amountTotal: number;
};

export type FieldDataProps = {
  name: string;
  type: string;
  date: Date;
  amount: number;
  onPress?: () => void;
};

export type FieldDetailProps = {
  label1: any;
  label2: any;
  label3: any;
  label4?: any;
  sub1: string;
  sub2: string;
  sub3: string;
  sub4?: string;
};

export interface ReportProps extends Props {
  onReport: (token: string, payload: object) => Promise<void>;
  token: string;
  isLoading: boolean;
}

export type ContentReportProps = {
  onField: (data: object) => void;
  data: Array<any>;
  stats: any;
  meta: number;
  onMore: (page: number) => void;
  isLoading: boolean;
  type: string;
};
