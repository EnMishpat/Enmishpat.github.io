const {Pool} = required('pg');
const connectionInfo = `postgres://mywebappuser:newuser@localhost:5432/mywebapp`;
const pool = new pool({connectionString: connectionInfo});


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