import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector('#app');

const content = <h2>Hello React</h2>;

const messageInput = <input type="text" id="messageSender"></input>;
const messageButton = <button onClick={ sendMessage }>Отправить</button>;
const messageBox = <div id="messenger"></div>;
let messageArr = [];


ReactDom.render(
    <div>
        { content }
        { messageInput }
        { messageButton }
        { messageBox }
    </div>
    , container);

    function sendMessage() {
        let text = document.getElementById("messageSender").value;
        messageArr.push(text);
        let where = document.getElementById("messenger");
        console.log(where.childElementCount);
        let renderMessages = messageArr.map(el => <div >{ el }</div>);
        ReactDom.render( <div>{ renderMessages }</div>, where);
    }