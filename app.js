var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request, response){
    console.log('client request URL: ', request.url);
    if(request.url === '/'){
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cars'){
        fs.readFile('views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cars/bugatti.jpg'){
        fs.readFile('./images/bugatti.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cars/tesla.jpg'){
        fs.readFile('./images/tesla.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cars/spider.jpg'){
        fs.readFile('./images/spider.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cats'){
        fs.readFile('views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/cats/leopard.jpg"){
        fs.readFile('./images/leopard.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/cats/catz.jpg"){
        fs.readFile('./images/catz.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === "/dope"){
        fs.readFile('./images/cobra.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/*'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/cars/new'){
        fs.readFile('views/newcar.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
         response.writeHead(200, {'Content-type': 'text/css'});
         response.write(contents);
         response.end();
        })
      }
    else {
        response.writeHead(404);
        response.end('File gone');
    }
})
server.listen(7077);
console.log('runnin in local 7077');