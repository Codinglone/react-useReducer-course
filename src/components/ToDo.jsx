import { useReducer, useRef } from "react";
const initialState = [
  { id: 1, name: "Learn React" },
  { id: 2, name: "Learn Django" },
];

const tasksReducer = (state, action) => {
    if(action.type === "ADD_TASK"){
        return [...state, action.payload]
    }
    throw new Error("No action specified")
};

const ToDo = () => {
  const taskField = useRef("");
  const [tasks, dispatch] = useReducer(tasksReducer, initialState);

  const addTask = () => {
    if (taskField.current.value) {
      dispatch({
        type: "ADD_TASK",
        payload: { id: Math.floor(Math.random() * 200), name: taskField.current.value },
      });
    } else {
      alert("Please enter task name");
    }
  };
  return (
    <div>
      <input type="text" placeholder="Enter a task!" ref={taskField} />
      <button onClick={addTask}>Save</button>
      {tasks && tasks.map((task) => {
        return (<div key={task.id}>{task.name}</div>)
      })}
    </div>
  );
};

export default ToDo;
