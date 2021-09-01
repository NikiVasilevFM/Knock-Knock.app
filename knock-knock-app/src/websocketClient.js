import store from './redux/store'
import { addMessage } from './redux/actions'

const webSocketClient = new WebSocket("ws://localhost:4567/");

export function sendAuthMessage(nickName) {
    webSocketClient.send(JSON.stringify({nickName: nickName, type: 2}))
};

export function sendMessage(message) {
    webSocketClient.send(JSON.stringify({text: message, type: 1}))
}

export function connect() {
    webSocketClient.onmessage = (event) => {
        store.dispatch(addMessage(JSON.parse(event.data)))
    };
}



export default webSocketClient