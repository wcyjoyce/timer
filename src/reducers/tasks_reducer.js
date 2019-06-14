const tasksReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_TASKS":
      return action.payload;
    case "CLEAR_TASKS":
      return action.payload;
    case "ADD_TASK":
      const taskList = state.slice(0);
      taskList.push(action.payload);
      return taskList;
    default:
      return state;
  };
};

export default tasksReducer;
