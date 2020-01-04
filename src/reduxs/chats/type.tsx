export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Array<Message>;
}

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
}

export type ChatActionTypes = SendMessageAction | DeleteMessageAction;
