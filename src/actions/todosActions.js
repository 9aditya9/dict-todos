export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text }
});

export const MARK_TODO_AS_COMPLETED = "MARK_TODO_AS_COMPLETED";
export const markTodoAsCompleted = (text) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { text }
});

export const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (text) => ({
  type: DELETE_TODO,
  payload: { text }
});

export const SEARCHED_WORD = "SEARCHED_WORD";
export const searchWord = (text) => ({
  type: SEARCHED_WORD,
  payload: { text }
});

export const LOAD_WORD_IN_PROGRESS = "LOAD_WORD_IN_PROGRESS";
export const loadWordInProgress = () => ({
  type: LOAD_WORD_IN_PROGRESS,
  // payload: { text }
});

export const LOAD_WORD_SUCCESS = "LOAD_WORD_SUCCESS";
export const loadWordSuccess = wordData => ({
  type: LOAD_WORD_SUCCESS,
  payload: { wordData }
});

export const LOAD_WORD_FAILURE = "LOAD_WORD_FAILURE";
export const loadWordFailure = () => ({
  type: LOAD_WORD_FAILURE,
});