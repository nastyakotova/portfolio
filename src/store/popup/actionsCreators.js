import {
  ACTIVATE_POPUP,
  DEACTIVATE_POPUP,
  GET_CONTENT_TYPE,
} from './actionsTypes';

export function activatePopup() {
  return { type: ACTIVATE_POPUP, payload: true };
}

export function deactivatePopup() {
  return { type: DEACTIVATE_POPUP, payload: false };
}

export function getContentType(contentType) {
  return { type: GET_CONTENT_TYPE, payload: contentType };
}
