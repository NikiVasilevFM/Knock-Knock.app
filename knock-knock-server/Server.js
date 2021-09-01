const Client = require("./Client");

class Server {
    constructor(webSocketServer){
        this.clients = [];
        this.webSocketServer = webSocketServer;
        this.webSocketServer.on("connection", (webSocketClient) => {
            webSocketClient.on("message", (messageJson) => {
                let messageObj = JSON.parse(messageJson)
                switch(messageObj.type) {
                    case 2:
                    this.addNewUser(webSocketClient, messageObj.nickName)
                }
            });
          });
    };
    sendToAll(message, nickName){
        this.clients.forEach((item) => {
            item.receiveMessage(message, nickName);
        })
    };

    addNewUser(webSocketClient, nickName){
        this.clients.push(new Client(webSocketClient, this, nickName))
    };
};
module.exports = Server;