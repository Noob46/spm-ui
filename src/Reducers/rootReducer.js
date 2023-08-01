import React from "react";
import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  tasks: taskReducer
})

export default rootReducer;