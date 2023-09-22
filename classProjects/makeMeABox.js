const buttonPlay = document.getElementById("buttonPlay");

function createBox(){
    var boxDiv = document.createElement('div');
    boxDiv.style.width = '300px';
    boxDiv.style.height = '300px';
    boxDiv.style.backgroundColor = 'green';
    boxDiv.style.position = "absolute";
    boxDiv.style.marginTop = Math.floor(Math.random()*100)+"%";
    boxDiv.style.marginLeft = Math.floor(Math.random()*100)+"%";
    document.body.appendChild(boxDiv);

}

