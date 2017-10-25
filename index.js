const express = require('express');
const app = express();

app.set('port', 8080);

app.use(express.static(__dirname));

const server = app.listen(app.get('port'), () => {
    console.log(`Server started at port ${server.address().port}`);
});

