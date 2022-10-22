import "./style.scss";
import { useSelector, useDispatch } from "react-redux";
import { onChangeVal, onTaskAdd, clearForm } from "../../slice/todoSlice"

const CreateNewElement = () => {
  const todo = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const onChangeFormVal = (e) => {
    console.log(todo.taskValue);
    dispatch(onChangeVal(e.target.value));
  }

  const onAddTask = (e) => {
    e.preventDefault();
    todo.taskValue && dispatch(onTaskAdd()) && dispatch(clearForm());
  }

  return (
    <form className="new-task">
      <input
        type="text"
        id="new-task-input"
        placeholder="Write down a new task..."
        onChange={onChangeFormVal}
        value={todo.taskValue}
      />
      <button onClick={onAddTask} id="new-task-button">Add</button>
    </form>
  );
};

export default CreateNewElement;