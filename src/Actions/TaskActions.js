import axios from 'axios';
import { taskActionType } from "../Reducers/types/taskTypes.js";

export const AddTask = (taskDetails) => {
  return new Promise(async (resolve, reject) => {
    const addTask = await axios.post('http://localhost:8080/createTask', taskDetails);
    resolve(addTask);
  })
}


export const GetAllTasks = () => {
  return function (dispatch) {
    try {
      console.log('in dispatch')
      axios.get('http://localhost:8080/getAllTasks').then(response => {
        console.log(response, 'response')
        dispatch({
          type: taskActionType.ALL_TASKS_DATA,
          data: response.data,
        });
      });
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
};

export const AssignTaskToEmployee = (data) => {
  return function(dispatch) {
    try {
      axios.post('http://localhost:8080/assignedTaskToUser', data).then(response => {
        console.log(response, 'response')
        dispatch({
          type: taskActionType.ALL_TASKS_DATA,
          data: response.data,
        });
      })
    } catch(error) {
      console.log(error, 'error');
    }
  }
}

export const GetEmployeeByCompanyId = (data) => {
  return function(dispatch) {
    try {
      axios.get(`http://localhost:8080/getUsersByCompanyId/${data.id}`).then(response => {
        console.log(response, 'response')
        dispatch({
          type: taskActionType.GET_USER_BY_COMPANY,
          data: response.data,
        });
      })
    } catch(error) {
      console.log(error, 'error');
    }
  }
}

export const GetAllStatusList = (data) => {
  return function(dispatch) {
    try {
      axios.get(`http://localhost:8080/getAllStatusList`).then(response => {
        console.log(response, 'response')
        dispatch({
          type: taskActionType.ALL_STATUS_LIST,
          data: response.data,
        });
      })
    } catch(error) {
      console.log(error, 'error');
    }
  }
}