import { taskActionType } from "./types/taskTypes";

const initialState = {
  allTasks: []
}

const taskReducer = (state = initialState, action) => {
  let clonedState = state;
  switch (action.type) {
    case taskActionType.ALL_TASKS_DATA: {
      clonedState = { ...state, allTasks: action.data }
      break;
    }
    default: {
      return clonedState;
    }
  }
  return clonedState;
}

export default taskReducer;