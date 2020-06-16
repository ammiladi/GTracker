type AuthStateType = {
  isLoading: boolean,
  isLoggedIn: boolean,
};
type ActionType = {
  type: string,
  payload?: any,
};

export const initialState: AuthStateType = {
  isLoading: false,
  isLoggedIn: false,
};

export const START_LOGGED_IN = 'AuthState/START_LOGGED_IN';
export const LOGGED_IN = 'AuthState/LOGGED_IN';
export const LOGGED_OUT = 'AuthState/LOGGED_OUT';

export function login(username, password) {
  return (dispatch,getState) => {
    dispatch(startLogin());
    // Connect to the API here
    console.log("Call Keycloak");
    dispatch(loggedIn());
    console.log("state" , getState.isLoading, getState().isLoggedIn,  username   )
  };
}
export function startLogin(): ActionType {
  return {
    type: START_LOGGED_IN,
  };
}
export function loggedIn(): ActionType {

  return {
    type: LOGGED_IN,
  };
}
export function loggedOut(): ActionType {
  return {
    type: LOGGED_OUT,
  };
}
export default function AuthStateReducer(
  state: AuthStateType = initialState,
  action: ActionType,
): AuthStateType {
  switch (action.type) {
    case START_LOGGED_IN:
      return Object.assign({}, state, {
        isLoading: true,
      });
      /*return {
        ...state,
        isLoading: true,
      };*/
    case LOGGED_IN:
      return Object.assign({}, state, {
        isLoggedIn: true,
        isLoading: false,
      });
    case LOGGED_OUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
      });
    default:
      return state;
  }


}
