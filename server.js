var http = require('http');
var fs = require('fs')
var io = require('socket.io')(http);


fs.readFile('index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(8000);
    
    io.on('connection', function(socket){
        console.log('New user!!');
        socket.on('arch', function(msg){
            console.log('Received from cliente (arch): ' + msg);
          });
      });
      
});