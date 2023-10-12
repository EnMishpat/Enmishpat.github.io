const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', function(req, res){
    res.sendFile(path.join(_dirname, 'index.html'))

});
app.use('/', router);

let server = app.listen(3000, function(){
    console.log("App Server cia Express is running on port 3000");
    console.log("To end, press Ctrl + C");
});