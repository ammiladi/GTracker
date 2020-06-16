// @flow
type AppStateType = {
  isFirstOpen: boolean,
  isLogger: boolean,
};

type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: AppStateType = {
  isFirstOpen: true,
  isLogger: false,
};

export const SET_FIRST_OPEN = 'AppState/SET_FIRST_OPEN';
export const SET_LOGGED_IN = 'AppState/SET_LOGGED_IN';
export const SET_LOGGED_OUT = 'AppState/SET_LOGGED_OUT';


export function setAppOpened(): ActionType {
  return {
    type: SET_FIRST_OPEN,
  };
}
export function loggedIn(): ActionType {
  return {
    type: SET_LOGGED_IN,
  };
}
export function loggedOut(): ActionType {
  return {
    type: SET_LOGGED_OUT,
  };
}
export default function AppStateReducer(
  state: AppStateType = initialState,
  action: ActionType,
): AppStateType {
  switch (action.type) {
    case SET_FIRST_OPEN:
      return {
        ...state,
        isFirstOpen: false,
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        isLogger: true,
      };
    case SET_LOGGED_OUT:
      return {
        ...state,
        isLogger: false,
      };
    default:
      return state;
  }
}
