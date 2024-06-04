const express = require('express');
const app = express();
const receptiRoutes = require('./routes/receptiRoutes');
const bodyParser = require('body-parser');
const receptiModuls = require('./models/receptiModels');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/', receptiRoutes);
const PORT = 3001;
app.listen(PORT, ()=>{
    console.log(`server radi na portu ${PORT}`);
})