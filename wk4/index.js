var express = require('express');
var app = express();
app.use(express.json());
const port = process.env.PORT || 3000

//http://localhost:3000/
app.get('/', (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})

//http://localhost:3000/user?firstname=Pritesh&lastname=Patel
app.get('/user',(req, res) => {
    const user = {"firstname":req.query.firstname,"lastname": req.query.lastname}
    res.json(user)
})

//http://localhost:3000/user/Pritesh/Patel
app.post('/user/:firstname/:lastname',(req, res) => {
    const user = {"firstname":req.params.firstname,"lastname": req.params.lastname}
    res.json(user)
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});