import React, { Component } from "react"
import './App.css';
// import ToDo from "./ToDoList";
// import Alert from "./components/Alert";

class App extends Component {
  state = {
    count: 1,
    count2:0,
    isToggled: false
  }

  increase = () => {
    console.log(1)
    // this.setState({count: this.state.count+1})
  }

  increase = () => {
    console.log(2)
    // this.setState({count2: this.state.count2+1})
  }

  toggle=()=>{
      this.setState((prevState)=>({
          isToggled: !prevState.isToggled
      }))
  }

  render () {

    return (
      <div className="App">
        <p>{this.state.isToggled?
          <span>On </span>
          :
          <span>Off </span>
          } 
          <button onClick={this.toggle} className={this.state.isToggled? "btn-toggled" : "btn-not-toggled"} > Toggle </button></p>
      </div>
    );
  }
}

export default App;
