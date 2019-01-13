import React, { Component } from "react";
import { connect } from "react-redux";
import { addTask } from "./Redux";
import Todo from "./Todo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }

  onChange = event => {
    this.setState({ task: event.target.value });
  };

  render() {
    return (
      <div>
        {Object.keys(this.props.tasks).map(id => {
          return <Todo key={id} task={this.props.tasks[id]} id={id} />;
        })}

        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.dispatch(addTask(this.state.task));
          }}
        >
          <input onChange={this.onChange} placeholder="Task" />
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

// <div>
// {this.props.tasks.map(({ task, id }) => {
//   return <Todo key={id} task={task} id={id} />;
// })}
// </div>
