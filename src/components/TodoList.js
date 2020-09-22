import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchTodos, markCompleted, deleteTodo } from "../actions";
import CategorySelector from "./CategorySelector";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  renderDisplay(isPending) {
    let { filter } = this.props.match.params;
    if (
      (filter === "pending" && isPending) ||
      filter === "all" ||
      (filter === "completed" && !isPending)
    ) {
      return "d-block";
    } else {
      return "d-none";
    }
  }

  renderButtons(todo) {
    if (todo.isPending) {
      return (
        <div className="col-md-6">
          <button
            className="btn btn-outline-success px-3 mx-2"
            onClick={() => {
              this.props.markCompleted(todo._id);
            }}
          >
            Done
          </button>
          <Link
            to={`/edit/${todo._id}`}
            className="btn btn-outline-info px-4 mx-2"
          >
            Edit
          </Link>
          <button
            className="btn btn-outline-danger px-3 mx-2"
            onClick={() => {
              this.props.deleteTodo(todo._id);
            }}
          >
            Delete
          </button>
        </div>
      );
    } else {
      return <div className="col-md-4">Completed</div>;
    }
  }

  renderList() {
    return this.props.todos.map(todo => {
      let className = `shadow list-group-item mt-3 col-10 ${this.renderDisplay(
        todo.isPending
      )}`;
      return (
        <div className={className} key={todo._id}>
          <div className="row justify-content-center align-items-center px-4">
            <div className="col-md-6">
              <h5 className="text-dark">{todo.title}</h5>
              <p>{todo.content}</p>
            </div>
            {this.renderButtons(todo)}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <Fragment>
        <CategorySelector />
        <div className="list-group">
          <div className="row justify-content-center text-center mx-0 mb-5">
            {this.renderList()}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: Object.values(state.todos)
  };
};

export default connect(mapStateToProps, {
  fetchTodos,
  markCompleted,
  deleteTodo
})(TodoList);
