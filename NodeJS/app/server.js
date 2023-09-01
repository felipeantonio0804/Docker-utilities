'use strict';

const express = require('express');
const exec = require('child_process').execSync;

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
    var result = "";
    result += "<h2>Comando ls</h2><br/>"+exec('ls -a')+"<br/>";
    result += "<h2>Comando ping a google.com</h2><br/>"+exec('ping -c 2 google.com')+"<br/>";
    result += "<h2>Comando ping a otro container de db</h2><br/>"+exec('ping -c 2 superdatabase')+"<br/>";
    res.send('<h1>Hello World - listing content</h1><br/>'+result);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});