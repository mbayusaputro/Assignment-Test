import {ChatState, SEND_MESSAGE, DELETE_MESSAGE, ChatActionTypes} from './type';

// Generate State for Redux
const initialState: ChatState = {
  messages: [],
};

// Create Function for Reducer
function chatReducer(state = initialState, action: ChatActionTypes): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
      };
    default:
      return state;
  }
}

export default chatReducer;
