import { useSelector, useDispatch } from "react-redux";
import { changeSearchValue} from "../../slice/todoSlice"
import "./style.scss";

const InputSearch = () => {
  const searchValue = useSelector(state => state.todo.searchValue);
  const dispatch = useDispatch();

  const onChangeSearchVal = (e) => {
    dispatch(changeSearchValue(e.target.value));
  }

  return (
    <input onChange={onChangeSearchVal} value={searchValue} type="text" id="searchField" placeholder="Type here to search..." />
  );
};

export default InputSearch;
