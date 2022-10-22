
import { ToDoListItem } from "../ToDoListItem";
import { useSelector, useDispatch } from "react-redux";
import { onToggle, onDelete } from "../../slice/todoSlice"
import "./style.scss";

const ToDoList = () => {
  const {todoList, searchValue, taskFilterId} = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const filterList = (taskFilterId) => {
    const filteredList = todoList.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    switch (taskFilterId) {
      case 'active_tasks':
        return filteredList.filter(item => (!item.done));
      case 'done_tasks':
        return filteredList.filter(item => (item.done));
      default:
        return filteredList;
    }
  }

  const todoElements = filterList(taskFilterId).map(item => {
      return <ToDoListItem 
      {...item} 
      onDelete={() => {dispatch(onDelete(item.id))}} 
      onImportant={()=> dispatch(onToggle({id: item.id, param: 'important'}))}
      onToggle={()=> dispatch(onToggle({id: item.id, param: 'done'}))}
      key={item.id} />
  })

  return (
    <section>
      {todoElements}
    </section>
  )
};

export default ToDoList;