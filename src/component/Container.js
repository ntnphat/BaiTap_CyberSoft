import React, { Component } from "react";
import WhatWeDo from "./WhatWeDo";
import Contact from "./Contact";
import Card from "./Card";
export default class Container extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <WhatWeDo />
          <Contact />
        </div>
        <div className="row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}
