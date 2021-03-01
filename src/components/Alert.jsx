import React, {Component} from "react"

class Alert extends Component {
  render(){
    return (
      <div className="Alert">
        {this.props.children}
      </div>
    );
  }
}


export default Alert;

