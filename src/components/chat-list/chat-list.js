import { List } from "@material-ui/core"
import React, { Component } from "react"
import { Chat } from "./chat"
import styles from "./chat-list.module.css"

// @TODO сделать компонент <Chat key={key} handleListItemClick={handleListItemClick} title selected/>
// сделать с помощью ListItem изи материал

export class ChatList extends Component {
  state = {
    chats: ["room1", "room2", "room3"],
    selectedIndex: 0,
  };

  handleListItemClick = (index) => {
    this.setState({ selectedIndex: index })
  };

  render() {
    const { chats, selectedIndex } = this.state;

    return (
      <List component="nav" className={styles.content}>
        {chats.map((chat, index) => (
          <Chat
            key={chat}
            title={chat}
            selected={selectedIndex === index}
            handleListItemClick={() => this.handleListItemClick(index)}
            className={styles.chat}
          />
        ))}
      </List>
    )
  }
}