import {
  CREATE_TODO,
  MARK_TODO_AS_COMPLETED,
  DELETE_TODO,
  LOAD_WORD_SUCCESS,
  LOAD_WORD_FAILURE,
  LOAD_WORD_IN_PROGRESS,
} from "../actions/todosActions";

export const words = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_WORD_SUCCESS: {
      const { wordData } = payload;
      return wordData;
    }
    case LOAD_WORD_IN_PROGRESS:
    case LOAD_WORD_FAILURE:
    default: {
      return null;
    }
  }
}


export const isLoading = (state = false, action) => {
  const { type } = action;
  switch (type) {
    case LOAD_WORD_IN_PROGRESS: {
      return true;
    }
    case LOAD_WORD_SUCCESS:
    case LOAD_WORD_FAILURE: {
      return false;
    }
    default: {
      return state;
    }
  }
};


export const todos = (
  state = [
    {
      text: "your completed todos will appear here",
      isCompleted: true
    },
    {
      text: "your incomplete todos will appear here!",
      isCompleted: false
    }
  ],
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const newTodo = {
        text: payload.text,
        isCompleted: false
      };
      return state.concat(newTodo);
    }
    case MARK_TODO_AS_COMPLETED: {
      const { text } = payload;
      return state.map((todo) =>
        todo.text === text ? { ...todo, isCompleted: true } : todo
      );
    }
    case DELETE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text !== text);
    }
    default:
      return state;
  }
};
