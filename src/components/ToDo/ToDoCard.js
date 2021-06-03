import PropTypes from "prop-types";
import React from "react";

ToDoCard.defaultProps = {
  item: null,
  markComplete: null,
  deleteToDo: null,
  index: null,
};

function ToDoCard(props) {
  const { item, markComplete, deleteToDo, index } = props;

  const handleMarkComplete = (id) => {
    if (markComplete) {
      markComplete(id);
    }
  };

  const handleDelete = (index) => {
    if (deleteToDo) {
      deleteToDo(index);
    }
  };

  const itemStyle = {
    textDecoration: item.completed ? "line-through" : "none",
  };
  return (
    <div>
      <input
        type="checkbox"
        // onChange={markComplete.bind(this, item.id)}
        onChange={() => handleMarkComplete(item.id)}
        checked={item.completed}
      />
      <h3>{item.id}</h3>
      <h4 style={itemStyle}>{item.title}</h4>
      <button className="btn btn-danger" onClick={deleteToDo.bind(this, index)}>
        Delete
      </button>
      <button className="btn btn-danger" onClick={() => deleteToDo(index)}>
        Delete
      </button>
      {/* Hai vế trên và dưới đều có thể dùng được để gọi 1 hàm */}
      <button className="btn btn-primary" onClick={() => handleDelete(index)}>
        Delete
      </button>
      <button
        className="btn btn-primary"
        onClick={handleDelete.bind(this, index)}
      >
        Delete
      </button>
    </div>
  );
}

ToDoCard.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteToDo: PropTypes.func.isRequired,
};

export default ToDoCard;
