import {Message, SEND_MESSAGE, DELETE_MESSAGE} from './type';

// Generate Action for Redux
export function sendMessage(payload: Message) {
  return {
    type: SEND_MESSAGE,
    payload,
  };
}

export function deleteMessage(timestamp: number) {
  return {
    type: DELETE_MESSAGE,
  };
}
