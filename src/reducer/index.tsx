import * as actions from './actions';
import { UserStates } from '../interfaces';
import { EditorState } from 'draft-js';

const initialState: UserStates = {
  isLoggedIn: false,
  italic: false,
  bold: false,
  editorState: EditorState.createEmpty(),
  noteTitle: '',
};

const reducer = (
  state: UserStates = initialState,
  action?: any,
): UserStates => {
  switch (action.type) {
    case actions.LOG_USER_IN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case actions.LOG_USER_OUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case actions.BOLD: {
      return {
        ...state,
        bold: true,
        editorState: action.payload,
      };
    }
    case actions.ITALIC: {
      return {
        ...state,
        italic: true,
        editorState: action.payload,
      };
    }
    case actions.REMOVE_EFFECT: {
      return {
        ...state,
        bold: false,
        editorState: action.payload,
      };
    }
    case actions.SET_EDITOR_STATE: {
      return {
        ...state,
        editorState: action.payload,
      };
    }
    case actions.EDIT_NOTE_TITLE: {
      return {
        ...state,
        noteTitle: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
