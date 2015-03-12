var nodejsWebSocket = require("nodejs-websocket");
var server = nodejsWebSocket.createServer(function(con){
    console.log("a new connection is established");
    con.on("text", function(msg){
        server.connections.forEach(function(connection){
            connection.sendText(msg);
        });
    });
});
server.listen(9090);
