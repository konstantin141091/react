import React, { Component } from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styles from "./header.module.css"

export class Header extends Component {
  render() {
    return <div className={styles.header}>
      <p>header</p>
      <Link to="/profile">Profile</Link>
      <Link to="/chat">Chat</Link>
    </div>
  }
}
