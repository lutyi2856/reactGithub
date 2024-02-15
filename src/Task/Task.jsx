import "./Task.css";
import { MdDelete } from "react-icons/md";
import { useState } from "react";

const Task = (props) => {
  const [isStyle, setStyle] = useState(false);
  const action = () => {
    setStyle(!isStyle);
  };
  const deleteTask = () => {
    console.log("delete", props);
    props.delete(props.title);
  };
  return (
    <div className="task-wrapper">
      <div className="task-single">
        <input type="checkbox" onClick={action} className="task-check" />
        <span className={isStyle ? "task-title-cheked" : "task-title"}>
          {props.title}
        </span>
        <button className="task-delete" onClick={deleteTask}>
          <MdDelete />
        </button>
      </div>
    </div>
  );
};

Task.defaultProps = {
  title: "Задача",
};

export default Task;
