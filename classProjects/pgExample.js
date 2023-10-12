const {Pool} = require('pg');
const connectionInfo = `postgres://mywebappuser:newuser@localhost:5432/mywebapp`;
const pool = new Pool({connectionString: connectionInfo});


pool.query(
    `SELECT*FROM bowlers`,
    [],
    function (err, result){
        if(err){
            console.error(err);
            process.exit(1);
        }
        console.log(result.rows);
        process.exit(0);
    }
);