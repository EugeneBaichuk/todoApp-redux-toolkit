import { useSelector } from "react-redux";

import "./style.scss";

const Statistics = () => {
  const {done,important} = useSelector(state => state.todo)
  return (
    <div className="stat">
      <p>
        Done: <span id="done-counter">{done}</span>
      </p>
      <p>
        Important: <span id="important-counter">{important}</span>
      </p>
    </div>
  );
};

export default Statistics;
