import React from "react";
class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
    this.onMouseEvent = this.onMouseEvent.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousemove", this.onMouseEvent);
  }
  componentWillUnmount() {
    document.removeEventListener("mousemove", this.onMouseEvent);
  }
  onMouseEvent(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }
  render() {
    return this.props.render(this.state);
  }
}

export default MouseTracker;
