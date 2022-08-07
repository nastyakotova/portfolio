import {
  ACTIVATE_POPUP,
  DEACTIVATE_POPUP,
  GET_CONTENT_TYPE,
} from './actionsTypes';

const initialState = {
  isActive: false,
  contentType: '',
};

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_POPUP: {
      return { ...state, isActive: action.payload };
    }
    case DEACTIVATE_POPUP: {
      return { ...state, isActive: action.payload };
    }
    case GET_CONTENT_TYPE: {
      return { ...state, contentType: action.payload };
    }

    default: return state;
  }
}
