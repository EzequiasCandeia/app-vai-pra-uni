import {UserAction as Action} from '_actions';
const initialState = {};

const userReducer = (state = initialState, {payload, type}) => {
  switch (type) {
    case Action.CLEAR:
      return initialState;
    case Action.SET:
      return {...payload};
    default:
      return state;
  }
};

export default userReducer;
