import React, { Component } from "react"
import styles from "./header.module.css"

export class Header extends Component{
  render() {
    return <header className={styles.header}>
      <div className={styles.logo}><a href="#">GeekChat</a></div>
    </header>
  }
}
