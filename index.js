const express = require('express');
const app = express();
const port = 8000;

app.listen(port, function (err) {
    if (err)
    {
        console.log(`error is accure ${err}`);
    }
    console.log(`my express server is running on port ${port}`)
})