import "./index.css";
import style from "./index.module.css";
// import img from "@assets/rabbit.jpg";
// console.log('Hello people');
//
// class Test {
//   a = 15;
// }
//
// console.log(new Test().a);
// console.log(img);
// console.log(style);


import React from "react";
import ReactDOM from "react-dom";

const messages = ["Hello", "Привет из реакта"];

const Messages = () => {
  return (
    <div>
      <h1>Сообщения</h1>
      {messages.map((message) => (
        <p key={message}>{message}</p>
      ))}
      <input id="mesInput" placeholder="Введите сообщение" />
      <button onClick={sendMessage}>Отправить</button>
    </div>
  )
};

function sendMessage() {
  let mes = document.getElementById('mesInput').value;
  messages.push(mes);
  document.getElementById('mesInput').value = '';
  ReactDOM.render(
    <>
      <Messages title="title" />
    </>,
    document.querySelector("#root"),
  );
}

ReactDOM.render(
  <>
    <Messages title="title" />
  </>,
  document.querySelector("#root"),
);


