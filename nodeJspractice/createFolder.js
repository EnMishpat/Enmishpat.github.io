const fs = require("fs");
fs.mkdir("testFolder", function(err)
{
if(err){
    throw(err)
} else{
    console.log("Directory was created!")
};
});
console.log("this can display before the success does!");