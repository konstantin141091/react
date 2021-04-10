import { List, Button } from "@material-ui/core"
import React, { Component } from "react"
import { connect } from "react-redux"
import {addConversation} from "@app/store";
import { Link } from "react-router-dom"
import { AddContactModal } from "../modal"
import { Chat } from "./chat"

export class ChatListView extends Component {
  state = {
    isOpen: false,
  };

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  };

  handleGetLastMessage = (chatTitle, messages) => {
    let lastMessage = "нет сообщений";
    if (messages[chatTitle]) {
      lastMessage = messages[chatTitle].[messages[chatTitle].length - 1].message;
    }
    return lastMessage;
  };

  render() {
    const { conversations, match, messages } = this.props;
    const { isOpen } = this.state;
    const { id } = match.params;

    return (
      <>
        <div>
          <List component="nav">
            {conversations.map((chat) => {
              return (
                <Link key={chat.title} to={`/chat/${chat.title}`}>
                  <Chat selected={chat.title === id} chat={chat} />
                  <p>{this.handleGetLastMessage(chat.title, messages)}</p>
                </Link>
              )
            })}
          </List>
        </div>

        <AddContactModal isOpen={isOpen} onClose={this.toggleModal} conversations={conversations} />

        <Button variant="contained" fullWidth={true} onClick={this.toggleModal}>
          Добавить чат
        </Button>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  conversations: state.conversationsReducer,
  messages: state.messagesReducer,
});

const mapDispachToProps = (dispatch) => ({
  addConversation: (params) => dispatch(addConversation(params)),
});


export const ChatList = connect(mapStateToProps, mapDispachToProps)(ChatListView);
