import { ThemeProvider, createMuiTheme } from "@material-ui/core"
import React, { Component } from "react"
import ReactDOM from "react-dom"
import { MessageList, Layout, ChatList, Header } from "./components"
import styles from "./index.module.css"

import "./index.css"

class App extends Component {
  render() {
    return (
      <div className={styles.content}>
        <h2 className={styles.title}>Сообщения</h2>
        <MessageList />
      </div>
    )
  }
}

const dark = {
  color: "red",
};

const theme = createMuiTheme(dark);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Layout messages={<App />} chats={<ChatList />} header={<Header />} />
    {/*<ChatList />*/}
  </ThemeProvider>,
  document.getElementById("root"),
);

