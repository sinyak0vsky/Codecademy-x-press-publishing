const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const errorHandler = require('errorhandler');

const app = express();
const PORT = process.env.PORT || 3001;


app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));