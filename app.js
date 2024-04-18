const express = require('express');
const app = express();

app.arguments((req, res, next) => {
    res.status(200).json({
        message: 'App is running'
    })

})

module.export = app;