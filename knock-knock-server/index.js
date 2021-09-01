const WebSocket = require("ws").Server
  ,http = require("http")
  ,express = require("express")
  ,app = express()
  ,port = 4567
  ,Server = require("./Server")
  ,db = require('./db')
  ,cors = require('cors')
  ,bodyParser = require('body-parser')
app.use(express.static(__dirname + "/"));

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/regestration", (req, res) => {
    console.log(req.body);
    const nickName = (req.body).nickName;
    console.log(nickName);
    const pass = generatePass();
    console.log(pass);
    db.insertUser(pass, nickName).then((asyncRes)=>{
      console.log("regestrationDone");
      res.json({pass:pass})
    }).catch((err)=>{
      console.log(err);
      res.status(500).json(err)
    });
});

app.post("/login", (req, res) => {
  const nickName = (req.body).nickName;
  const pass = (req.body).pass;
  db.checkUser(pass, nickName).then((asyncRes)=>{
    console.log(asyncRes);
    if(asyncRes.length === 1) {
      res.status(200).json("Auth done")
    } else {
      res.status(401).json("User not found")
    }
  }).catch((err)=>{
    res.status(500).json(err)
  });
});

function generatePass() {
  const max = 9;
  const min = 0;
  let result = "";
  for(let i =0 ; i < 6; i++) {
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    result += number;
  };
  return result;
};

const server = http.createServer(app);
server.listen(port);

const webSocketServer = new WebSocket({server: server});

new Server(webSocketServer);