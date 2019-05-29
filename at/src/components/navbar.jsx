import React, { Component } from "react";
import "./counter.css";

class navbar extends Component {
  render() {
    return <nav class="navbar navbar-expand-md navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><img src="img/logo.jpg"/></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" class="active">
            <a class="nav-link" href="#">Kezdőlap</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Bemutatkozás</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Szolgáltatások</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Ajánlatok</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kapcsolat</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
  }
}

export default navbar;
