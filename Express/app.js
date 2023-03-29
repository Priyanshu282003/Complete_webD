const express = require("express");
const app = express();
const path=require("path");
const fs=require("fs");
const port = 80;
// For serving static files
// here we write express related stuff 
app.use('/static', express.static('static'));
app.use(express.urlencoded())
// Set the template engine as pug
// here we write pug related stuff
app.set('view engine', 'pug');
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req, res)=>{
    const con="This is best way to use the pub"
    const params={'title':'god of war is a best game',"content":con}
    res.status(200).render('index.pug', params);
});
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);
})
// app.get("/", (req, res)=>{ 
//     res.status(200).send("This is homepage of my first express app with Harry");
// });
// app.get('/demo', (req, res) => {
//     res.status(200).render('demo', { title: 'Hey priyanshu', message: 'Hello there! how to use pug' })
//   });
  

// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first express app with Harry");
// });

// app.post("/about", (req, res)=>{
//     res.send("This is a post request about page of my first express app with Harry");
// });
// app.get("/this", (req, res)=>{
//     res.status(404).send("This page is not found on my website cwh");
// });

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});




 