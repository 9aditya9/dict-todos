/* eslint-disable react/prop-types */
import React from "react";
import TodoListItem from "./TodoListItem";
import "./styles/TodoListItem.css";
import { connect } from "react-redux";
const TodoList = ({ todos }) => {
  // console.log(todos);
  // console.log(test + "test");
  return (
    <div className="todoList">
      <div className="todoListItems">
        {todos.map((todo, index) => (
          <TodoListItem todo={todo} key={index} />
        ))}
      </div>
    </div>
  );
};

export default connect()(TodoList);
