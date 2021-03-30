import React, { Component } from "react"
import { Message } from "../message"

export class MessageList extends Component {

  state = {
    messages: [{ author: "User", value: "Тест сообщение" }],
    value: '',
  };

  handleChange = () => {
    this.setState({value: event.target.value});
  };

  sendMessage = () => {
    const { messages, value } = this.state;
    if (value) {
      this.setState({
        messages: [...messages, { author: "User", value: value }],
      });
      this.setState({value: ''});
    }


  };

  componentDidUpdate() {
    // TODO - реализовать ответ бота, не забыть условие !
    const { messages } = this.state;
    let lastMes = messages[messages.length - 1];
    if (lastMes.author === 'User') {
      setTimeout(() => {
        this.setState({
          messages: [...messages, { author: "Bot", value: "Ответ бота" }],
        });
      }, 1000)
    }
  }

  render() {
    const { messages, value } = this.state;
    // const { value } = this.state;

    return (
      <div>
        <input type="text" value={value} onChange={this.handleChange} placeholder={"ваше сообщение"}/>
        <button onClick={this.sendMessage}>Отправить сообщение</button>

        {messages.map((message, index) => (
          <Message message={message} key={index} />
        ))}
      </div>
    )
  }
}
