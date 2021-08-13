/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Tab, Tabs } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import "./styles/Menu.css";
import TodoList from "./TodoList";
import NewTodoForm from "./NewTodoForm";
import {
  getCompletedTodos,
  getIncompleteTodos
} from "../selectors/todosSelectors";
import { connect } from "react-redux";
// import SearchBar from "../dictionary/SearchBar";
import WordSearch from "../dictionary/WordSearch";

const useStyles = makeStyles(() => ({
  tabButton: {
    marginRight: "25px",
    backgroundColor: "#22222269",
    borderRadius: 30,
    border: "solid 1px grey",
    color: "white"
  }
}));

// eslint-disable-next-line react/prop-types
const Menu = ({ completedTodos, incompleteTodos }) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleTabs = (event, value) => {
    setValue(value);
  };
  return (
    <div className="menuContainer">
      {/* <Paper style={{ flexGrow: "1" }}> */}
      <Tabs
        TabIndicatorProps={{ style: { display: "none" } }}
        value={value}
        onChange={handleTabs}
        className="tabs"
        variant="scrollable"
        scrollButtons="on"
      // centered
      >
        <Tab label="completed" className={classes.tabButton} />
        <Tab label="incomplete" className={classes.tabButton} />
        <Tab label="add todo" className={classes.tabButton} />
        <Tab label="dictionary" className={classes.tabButton} />
      </Tabs>
      <TabPanel value={value} index={0} classes={{ color: "red" }}>
        <TodoList todos={completedTodos} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TodoList todos={incompleteTodos} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NewTodoForm />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <WordSearch />
      </TabPanel>
      {/* </Paper> */}
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index } = props;
  return <div>{value === index && <>{children}</>}</div>;
};

const mapStateToProps = (state) => ({
  completedTodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state)
});

export default connect(mapStateToProps)(Menu);
