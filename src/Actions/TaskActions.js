import axios from 'axios';
import { taskActionType } from "../Reducers/types/taskTypes";

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