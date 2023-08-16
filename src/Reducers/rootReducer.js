import React from "react";
import { combineReducers } from "redux";
import loginReducer from "./loginReducer.js";
import taskReducer from "./taskReducer.js";

const rootReducer = combineReducers({
  login: loginReducer,
  tasks: taskReducer
})

export default rootReducer;