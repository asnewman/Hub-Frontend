import React, {Component} from 'react';
import {Animated} from "react-animated-css";

class Node extends Component {
    render() {
      return (
        <div className="node" id={this.props.nodeid}>
          <Animated animationIn="fadeIn" animationInDelay={this.props.loadwait}>
            <img alt="Node" src={this.props.icon} />
            <h3>{this.props.nodename}</h3>
          </Animated>
        </div>
      );
    }
}

export default Node;