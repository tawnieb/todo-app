import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/actions";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      error: ""
    };
  }

  onHandleSubmit = event => {
    event.preventDefault();
    if (!this.state.task || this.state.task.length < 3) {
      this.setState(() => ({
        error: "Please add a task, with more than three characters"
      }));
    } else {
      this.props.dispatch(addTask(this.state.task));
      this.setState(() => ({ error: "", task: "" }));
    }
  };

  onChange = event => {
    this.setState({ task: event.target.value });
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        {Object.keys(this.props.tasks).map(id => {
          return <Todo key={id} task={this.props.tasks[id]} id={id} />;
        })}

        <form onSubmit={this.onHandleSubmit}>
          <input
            onChange={this.onChange}
            placeholder="Task"
            value={this.state.task}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state
  };
};

export default connect(mapStateToProps)(TodoList);
