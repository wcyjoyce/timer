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
  };
};

export function addTask(category, description, completed) {
  const url = "https://localhost:3000/";
  const body = { category, description, completed };
  const promise = fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: "ADD_TASK",
    payload: promise
  };
};
