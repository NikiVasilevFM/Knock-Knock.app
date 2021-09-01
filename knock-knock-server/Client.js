const TYPE = {
    FROM_ME: 1,
    FROM_OTHER: 2
};

class Client {
    constructor(webSocketClient, server, nickName) {
        this.nickName = nickName;
        this.server = server;
        this.webSocketClient = webSocketClient;
        this.webSocketClient.on("message", (messageJson) => {
            let messageObj = JSON.parse(messageJson)
            switch(messageObj.type) {
                case 1: 
                this.server.sendToAll(messageObj.text, this.nickName); 
            }  
        });
    };

    receiveMessage(message, nickName){
        let type;

        if(nickName === this.nickName) {
            type = TYPE.FROM_ME;
        } else {
            type = TYPE.FROM_OTHER;
        };

        const jsonMessage = JSON.stringify({
            type: type,
            text: message,
            autorNickname: nickName,
        });

        this.webSocketClient.send(jsonMessage);
    };

};

module.exports = Client;