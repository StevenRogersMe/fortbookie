import { SignInTypes } from './sign-in/types';

const INITIAL_STATE = {
  loading: false,
  user: null,
  error: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignInTypes.FETCH_SIGN_IN_REQUEST:
      return {
        loading: true,
        user: null,
        error: false
      };
    case SignInTypes.FETCH_SIGN_IN_SUCCESS:
      return {
        loading: false,
        user: action.payload,
        error: false
      };
    case SignInTypes.FETCH_SIGN_IN_FAILURE:
      return {
        loading: false,
        user: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
