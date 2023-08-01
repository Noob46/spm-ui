import React from "react";

const INITIAL_STATE = {
  userDetails: {}
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'USER_DETAILS': 
    return {
      ...state, action
    }
    default: return state;
  }
}

export default loginReducer;