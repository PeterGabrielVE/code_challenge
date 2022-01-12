const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send(tabla(12));
});

function tabla(numero){
    let multipicar=0;
    for(let o=0;o<numero;o=o+1){
        for(let num=0;num<=10;num=num+1){
            multiplicar=o*num;
            console.log(o +" * "+ num+" = "+multiplicar);
        }
    }
}


app.listen(process.env.port || 3000);
console.log('Web Server is listening at port '+ (process.env.port || 3000));