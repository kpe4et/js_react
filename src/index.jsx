import React from 'react';
import ReactDom from 'react-dom';

const container = document.querySelector('#app');

const content = <h2>Hello React</h2>;

const messageInput = <input type="text" id="messageSender"></input>;
const messageButton = <button onClick={ sendMessage }>Отправить</button>;
let messageArr = [];


ReactDom.render(
    <div>
        { content }
        { messageInput }
        { messageButton }
    </div>
    , container);

    function sendMessage() {
        let text = document.getElementById("messageSender").value;
        messageArr.push(text);
        let renderMessages = messageArr.map(el => <div >{ el }</div>);
        ReactDom.render( 
            <div>
                { content }
                { messageInput }
                { messageButton }
                <div id="messenger">{ renderMessages }</div>
            </div>
        , container);
    }