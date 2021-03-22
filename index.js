const express = require('express')
const app = express();
app.get('/', (req,res)=>{
    res.send('Thank you. got your response. Welcome Rahul ')
})
app.listen(3000, ()=> console.log('Hello listening from port 3000'))