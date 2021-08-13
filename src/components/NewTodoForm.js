/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import "./styles/TodoListItem.css";
import { connect } from "react-redux";
import { createTodo } from "../actions/todosActions";
import { Button } from "@material-ui/core";

const NewTodoForm = ({ onCreateClicked }) => {
  const [inputText, setInputText] = useState("");
  return (
    <form
      autoComplete="off"
      className="newTodoForm"
      onSubmit={(e) => {
        // console.log(inputText);
        e.preventDefault();
      }}
    >
      <TextField
        value={inputText}
        id="outlined-basic"
        label="Todo text"
        variant="outlined"
        onChange={(e) => setInputText(e.target.value)}
      />

      <Button
        // className="createTodoButton"
        color="primary"
        style={{ backgroundColor: "white", marginLeft: "10px" }}
        type="submit"
        onClick={() => {
          // console.log(inputText);
          onCreateClicked(inputText);
          setInputText("");
          // console.log(inputText);
        }}
      >
        Add
      </Button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onCreateClicked: (text) => dispatch(createTodo(text))
});

export default connect(null, mapDispatchToProps)(NewTodoForm);
