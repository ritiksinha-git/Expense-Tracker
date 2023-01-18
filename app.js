const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const expensesRoutes = require('./routes/expense');
const sequelize = require('./util/database');

const app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

app.use('/', expensesRoutes);

sequelize.sync()
.then((result) => {
    console.log(result);
    app.listen(4000);
})
.catch((err) => console.log(err));
