import React from "react";
import PropTypes from "prop-types";
import ToDoCard from "./ToDoCard";

ToDoList.defaultProps = {
  toDoList: [],
  markComplete: null,
  deleteToDo: null,
};

function ToDoList(props) {
  const { toDoList, markComplete, deleteToDo } = props;

  const main = () =>
    toDoList.map((item, index) => {
      return (
        <ToDoCard
          item={item}
          markComplete={markComplete}
          key={index}
          index={index}
          deleteToDo={deleteToDo}
        />
      );
    });
  return main();
}

ToDoList.propTypes = {
  toDoList: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDoList;
