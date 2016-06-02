import { FETCH_CONVERSATIONS } from '../actions/index';

const INITIAL_STATE = { all: [], conversation: null };

export default function(state=INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_CONVERSATIONS:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
