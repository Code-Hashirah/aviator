const http = require ('http')
const fs = require('fs')
const express =require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin/user');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoute);
app.listen(3007)
