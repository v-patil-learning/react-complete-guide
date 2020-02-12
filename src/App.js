import React, { Component } from "react";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Lampard", num: 8 },
      { name: "Drogba", num: 11 },
      { name: "Terry", num: 26 }
    ]
  };

  showCompleteName = () => {
    this.setState({
      persons: [
        { name: "Frank Lampard", num: 8 },
        { name: "Didier Drogba", num: 11 },
        { name: "John Terry", num: 26 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to CFC</h1>
        </header>
        {/* If you use () in the function it will get triggered during component did mount, so avoid () if you want to use it as a on click function */}
        <button onClick={this.showCompleteName}>Show Full Name</button>
        <Person
          name={this.state.persons[0].name}
          num={this.state.persons[0].num}
        />
        <Person
          name={this.state.persons[1].name}
          num={this.state.persons[1].num}
        >
          Position : Striker
        </Person>
        <Person
          name={this.state.persons[2].name}
          num={this.state.persons[2].num}
        />
      </div>
    );
  }
}

export default App;
