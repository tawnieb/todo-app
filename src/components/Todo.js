import React from "react";
import { connect } from "react-redux";
import { removeTask } from "../actions/actions";

export const Todo = props => {
  return (
    <div>
      {props.task}
      <button
        onClick={() => {
          props.dispatch(removeTask(props.id));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default connect()(Todo);
