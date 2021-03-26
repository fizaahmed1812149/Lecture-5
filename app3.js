const express=require('express');
const bodyParser=require('body-parser');
const product=require('./routes/product.route');
const app=express();
mongoose.connect("mongodb://localhost/productsDb",{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('You have successfully connected to the database. Congrats!')
})
.catch(err => {
    console.log("Sorry! Cannot connect to the database!", err);
    process.exit();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/products', product);
let port = 1234;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

app.listen(3000,()=>{console.log('Server is up and running on port 3000')});