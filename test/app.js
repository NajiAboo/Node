const http = require('http');

const server = http.createServer( (req, res) => {
    
    const url = req.url;
    const method = req.method;

    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>MyFristPage</title></head>');
        res.write(' <body><form action="/message" method="POST"> <input type="text" name="message"> </input> <button type="submit" > Submit </button></form> </body> ');
        res.write('</html>');
        return  res.end();
    }

    if ( url === '/message' && method == "POST") {

        var messages = [];

        console.log("Message");

        // Read the data as chunks
        req.on('data', (chunk) => {
            console.log(chunk);
            messages.push(chunk);
        });

        // once its done, we move to the write to file
        req.on('end', () => {
            const fs = require('fs');
            var full = Buffer.concat(messages).toString();
            console.log(full);
            const msg = full.split("=")[1];
            fs.writeFileSync("test.txt",msg);
        })

        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>MyFristPage</title></head>');
    res.write('<body> <h1> Hi</h1></body>');
    res.write('</html>');
    res.end();

});


server.listen(3000); 