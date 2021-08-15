import { createSelector } from "reselect";

export const getTodos = (state) => state.todos;
export const getIncompleteTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);
export const getCompletedTodos = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);

export const getWord = (state) => state.words;
export const getWordPhonetics = createSelector(getWord, (words) => words[0].phonetics);
export const getWordMeanings = createSelector(getWord, (words) => words[0].meanings);
