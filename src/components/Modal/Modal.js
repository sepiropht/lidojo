import React from "react";

export default class Modal extends React.Component {
  // eslint-disable-line
  render() {
    console.log("Yeah dans la modal");
    return (
      <div
        style={{
          border: "1px solid green",
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
          backgroundColor: "black"
        }}
      >
        {this.props.children}
        <p>
          <button onClick={this.props.closePortal}>Close this</button>
        </p>
      </div>
    );
  }
}
