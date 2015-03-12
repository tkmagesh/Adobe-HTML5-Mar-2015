var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(con){
    console.log("a new connection is established");
    var timer = null;
    con.on("text", function(msg){
        if (msg === "start"){
            timer = setInterval(function(){
                con.sendText(new Date().toString());
            }, 3000);
        } else if (msg === "stop"){
            clearInterval(timer);
        } else {
            console.log("unknown message from client ", msg);
        }
    });
});
server.listen(9090);
console.log("socket server listening on port 9090");
