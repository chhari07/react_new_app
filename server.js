import express from 'express';
import React from 'react';

import AppComponent from './client/app'

var app = express();

const PORT = 3000;

app.use("/", express.static("build/public"));

app.get("/", (req, res) => {
    res.send(<AppComponent />)
});

app.listen(PORT, () => console.log('Now browse to localhost:3000'));