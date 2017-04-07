'use strict';

const express = require('express');
const fs = require('fs');

let app = express();
app.use(express.static(__dirname));

let port = 3000;
app.listen(port, () => {});
