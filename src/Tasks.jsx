import React, {Component,PureComponent} from "react"

class Tasks extends Component {

  render(){

    console.log("Render task");

    return (
      <div className="Tasks">
        Tasks
        <p>count2: {this.props.count2}</p>
        <p>Color: {this.props.color}</p>
      </div>
    );
  }
}

Tasks.defaultProps={
  color: "red"
}


// Tasks.propTypes={
//   count2: PropTypes.number.isRequired
// }

export default Tasks;

