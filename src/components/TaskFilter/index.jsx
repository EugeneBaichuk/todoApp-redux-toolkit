import React from "react";
import { useDispatch } from "react-redux";
import { onTaskFilter } from "../../slice/todoSlice"

import "./style.scss";

const TaskFilter = () => {
  const dispatch = useDispatch();
  return (
    <div id="filters">
      <span onClick={() => dispatch(onTaskFilter('all_tasks'))} className="filters_item" id="all_tasks">
        All
      </span>
      <span onClick={() => dispatch(onTaskFilter('active_tasks'))} className="filters_item" id="active_tasks">
        Active
      </span>
      <span onClick={() => dispatch(onTaskFilter('done_tasks'))} className="filters_item" id="done_tasks">
        Done
      </span>
    </div>
  );
}

export default TaskFilter;
