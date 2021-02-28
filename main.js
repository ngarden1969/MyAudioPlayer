let guitarPosition = 0;

function moveGuitar(){
    var app = document.getElementsByClassName('photo');

    if(guitarPosition == 100){
        guitarPosition = 0;
    }

    for(let i = 0; i < app.length; i++){
        app[i].style.left = guitarPosition + '%';
        console.log(guitarPosition);
    }
        guitarPosition++;
}