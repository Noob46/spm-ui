import { taskActionType } from "./types/taskTypes.js";

const initialState = {
  allTasks: [],
  usersByCompany: [],
  allStatusList: []
}

const taskReducer = (state = initialState, action) => {
  let clonedState = state;
  switch (action.type) {
    case taskActionType.ALL_TASKS_DATA: {
      clonedState = { ...state, allTasks: action.data }
      break;
    }
    case taskActionType.GET_USER_BY_COMPANY: {
      clonedState = { ...state, usersByCompany: action.data }
      break;
    }
    case taskActionType.ALL_STATUS_LIST: {
      clonedState = { ...state, allStatusList: action.data }
      break;
    }
    default: {
      return clonedState;
    }
  }
  return clonedState;
}

export default taskReducer;