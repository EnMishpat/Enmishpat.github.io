const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const {Pool} = require('pg');
const connectionInfo = `postgres://mywebappuser:newuser@localhost/mywebapp`;
const pool = new Pool({connectionString: connectionInfo});

app.use(express.static(path.join(__dirname, 'public')));

function getBowlerData(){
    pool.query(
        `SELECT * FROM bowlers`,
        [],
        function (err, result){
            if(err){
                console.log(err);
            }
            // this is where you will add new code
            debugger;
            result.rows.forEach(function(bowler){
                let overallAvg = (bowler.accuracy + bowler.power + bowler.consistency) /3;
                let overallRating = Math.round(overallAvg);
                console.log (`Bowler Name: ${bowler.firstname} ${bowler.lastname}`);
                console.log (`Bowler Overall: ${overallRating}`);
            });
        }
    );
};

router.get('/', function(req, res){
    getBowlerData();
    res.sendFile(path.join(__dirname, 'index.html'))
});
app.use('/', router);

let server = app.listen(3000, function(){
    console.log("App Server cia Express is running on port 3000");
    console.log("To end, press Ctrl + C");
});