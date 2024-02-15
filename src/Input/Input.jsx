import React, { useRef, useState } from "react";
import Task from "../Task/Task";
import "./Input.css";

const Input = (props) => {
  const myRef = useRef();
  const [tasks, setTask] = useState([]);
  const addTask = () => {
    console.log(myRef.current.value);
    setTask([...tasks, myRef.current.value]);
  };
  const removeTasks = (title) => {
    const test = tasks.filter((item) => item !== title);
    setTask(test);
  };
  const myComponents = tasks.map((item, index) => {
    return <Task title={item} key={index} delete={removeTasks} />;
  });
  console.log("2222222222");
  return (
    <div className="form-todo-list">
      <input
        ref={myRef}
        type="text"
        placeholder={props.holder}
        className="feld-todo"
      />
      <button className="add-task" onClick={addTask}>
        add
      </button>
      {myComponents}
    </div>
  );
};

Input.defaultProps = {
  holder: "новая задача",
  type: "feld-todo-default",
};

export default Input;
