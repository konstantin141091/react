import PropTypes from "prop-types"
import React, { Component } from "react"
import styles from "./layout.module.css"

export class Layout extends Component {
  static propTypes = {
    messages: PropTypes.node.isRequired,
    chats: PropTypes.node.isRequired,
    header: PropTypes.node.isRequired,
  };

  render() {
    const { messages, chats, header } = this.props;
    return <div className={styles.main}>
      {header}
      <div className={styles.content}>
        {chats}
        {messages}
      </div>
    </div>
  }
}
