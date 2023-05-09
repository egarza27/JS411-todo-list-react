import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isClicked: false,
      inputValue: "",
      listOfTodos: [],
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      listOfTodos: [...this.state.listOfTodos, this.state.inputValue],
    });
    this.setState({ inputValue: "" });
  };

  handleClick = () => {
    this.state.isClicked
      ? this.setState({
          isClicked: false,
        })
      : this.setState({ isClicked: true });
  };

  handleDelete = (idx) => {
    console.log(this.state);
    this.setState({
      listOfTodos: this.state.listOfTodos.filter((todo, i) => i !== idx),
    });
  };

  render() {
    return (
      <div className="App">
        <header
          style={{
            marginTop: "150px",
            marginBottom: "0px",
            fontWeight: "bold",
            fontSize: "30px",
          }}
        >
          List Of Todos
        </header>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        ></input>
        <button
          style={{ marginTop: "100px" }}
          type="button"
          onClick={this.handleSubmit}
        >
          Add Todo
        </button>
        <ol>
          {this.state.listOfTodos.map((todo, idx) => {
            return (
              <li key={idx}>
                {todo}
                {"  "}
                <button type="button" onClick={() => this.handleDelete(idx)}>
                  Delete
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default App;
