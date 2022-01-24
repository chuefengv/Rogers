var character = document.getElementById("character");
var position = 10;

function moveRight(){
    var moveR = setInterval(function(){

        let frames = 2;
        character.style.right = parseInt(getComputedStyle(character).right) - frames + 'px';
        
        console.log(window.getComputedStyle(character).right);

        if(parseInt(getComputedStyle(character).right)<=0+(10)){
            clearInterval(moveR);
        }
    
    }, 10)
}

function moveLeft(callback){
    var moveL = setInterval(function(){

        let frames = 2;
        character.style.right = parseInt(getComputedStyle(character).right) + frames + 'px';
        
        console.log(window.getComputedStyle(character).right);

        if(parseInt(getComputedStyle(character).right)>=window.innerWidth-(90)){
            clearInterval(moveL);
            callback();
        }
    
    }, 10)
}
