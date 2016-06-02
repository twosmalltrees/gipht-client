import { combineReducers } from 'redux';
import ConversationsReducer from './conversations_reducer';

const rootReducer = combineReducers({
  conversations: ConversationsReducer
});

export default rootReducer;
