import tasks from "../helpers/placeholder.js";

export function fetchTasks() {
  return {
    type: "FETCH_TASKS",
    payload: tasks
  };
};


export function clearTasks() {
  return {
    type: "CLEAR_TASKS",
    payload: []
  }
}
