const express = require('express');
const bodyParser = require('body-parser'); 
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/api', require('./Routes/twilio'));

app.listen(8080, () => {
    console.log('Server running on port 8080');
});
