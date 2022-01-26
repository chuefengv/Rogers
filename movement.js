var spin = anime({
    targets: 'div#character',
    rotate: '1turn',
    autoplay: false
});

var animation = document.getElementById('character');

animation.addEventListener('click', spin.play, false);

chrome.runtime.onMessage.addListener((msg,sender,response) =>{
    console.log("Message received");
    if (msg.command == "moveButton"){
        document.getElementById("character").click();
    }
    return true;
})