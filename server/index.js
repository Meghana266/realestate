const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
dotenv.config();

const app = express();

const PORT = process.env.PORT || 9000;

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
}) 