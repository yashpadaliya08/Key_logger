const logDiv= document.getElementById('log');
const stateDiv= document.getElementById('state');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

startBtn.addEventListener("click",()=>{
    document.addEventListener('keydown',handelDown);
    document.addEventListener('keyup',handelUp);
    startBtn.disabled = true;
    stopBtn.disabled = false;

})
stopBtn.addEventListener("click",()=>{
    document.removeEventListener('keydown',handelDown);
    document.removeEventListener('keyup',handelUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    stopBtn.disabled = true;
    startBtn.disabled = false;

})

function handelDown(e){
    var keys = e.key;
    logDiv.textContent = 'Key '+ keys +' pressed' ;
    stateDiv.textContent= "key is down";
}

function handelUp(e){
    logDiv.textContent = 'Key '+ keys + ' press up';
    stateDiv.textContent= "key is up";
}