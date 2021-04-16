import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <div
          className="footer"
          style={{
            backgroundColor: "green",
            textAlign: "center",
            padding: "15px 0",
            color: "white",
          }}
        >
          Copyright by CyberSoft
        </div>
      </div>
    );
  }
}
