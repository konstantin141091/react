import {ChatList, Header, Layout, MessageList} from "@components"
import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { MessageProvider } from "../components"

export class ProfilePage extends Component {
  render() {
    return (
      <Layout header={<Header />}>
        <h2>Profile page</h2>
      </Layout>
    )
  }
}
