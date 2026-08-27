import http from 'http';

 const server = http.createServer((req,res) => {
     res.writeHead(200,{'conttent-type': 'apllication/json'});

     const product ={
        name: "Iphone",
        qty:2,
        discount: 15,
     };
     res.end(JSON.stringify(product));
 });


 server.listen(3000,() => console.log("server is runnig at 3000...."));