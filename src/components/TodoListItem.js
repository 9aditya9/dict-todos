/* eslint-disable react/prop-types */
import React from "react";
import "./styles/TodoListItem.css";
import styled, { keyframes } from 'styled-components'
import { fadeInRight } from "react-animations";
import { deleteTodo, markTodoAsCompleted } from "../actions/todosActions";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { Checkbox } from "@material-ui/core/";

const bounceAnimation = keyframes`${fadeInRight}`;

const BouncyDiv = styled.div`
  animation: 1s ${bounceAnimation};
`;

// eslint-disable-next-line react/prop-types
const TodoListItem = ({ todo, onCompletedClicked, onDeleteClicked }) => {
  // console.log(todo);
  return (
    <>
      <BouncyDiv className="todoListItem">
        <div>{todo.text}</div>
        <div className="todoButton">
          <IconButton
            aria-label="isCompleted"
            disabled={todo.isCompleted}
            onClick={() => onCompletedClicked(todo.text)}
          >
            <Checkbox
              checked={todo.isCompleted}
              color="primary"
              style={{ color: "#36345af6" }}
            />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={() => onDeleteClicked(todo.text)}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      </BouncyDiv>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onCompletedClicked: (text) => dispatch(markTodoAsCompleted(text)),
  onDeleteClicked: (text) => dispatch(deleteTodo(text))
});

export default connect(null, mapDispatchToProps)(TodoListItem);
