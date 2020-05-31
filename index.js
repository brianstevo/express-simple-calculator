const express=require('express');
const app=express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({extended:false}));

/*app.get('/',(req,res)=>{
    res.send("<h1>simple calculator</h1>");
})*/
app.get('/',(req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
})
app.post('/cal',(req,res)=>{
    const a=Number(req.body.num1);
    const b=Number(req.body.num2);
    const total=a+b;
    res.send('sum is: '+total);
})

const port=5000;
app.listen(port,()=>{
    console.log(`listerning on server ${port}`);
});
