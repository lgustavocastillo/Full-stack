const http =require('http')
http.createServer(function(req,res){
    res.end('hola arvind')
}).listen(3000, () => console.log('server on port 3000'))
