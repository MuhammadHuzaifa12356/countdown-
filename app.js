var sec=60;

var milisec = 10;
var displaymin = document.getElementById('displaymin');
var displaysec = document.getElementById('displaysec');
var displayhour = document.getElementById('displayhour');
var displaymilisec = document.getElementById('displaymilisec');
var inphour = document.getElementById('inphour');
var inpmin = document.getElementById('inpmin');
var min = +inpmin.value;
var hrs = +inphour.value;

var interval;

function timer(){
    milisec--;
    if(milisec=0){
        milisec = 10;
        sec--;
        if(sec==0){
            sec=60;
            min--;
            if(min==0){
                min=60;
                hrs--;
                if(hrs==0 && min ==0 && sec == 0 && milisec ==0){
                    clearInterval(interval);
                    alert("Times Up");
                    return;
                }
              
            }
        }
    }
    displayhour.innerHTML = hrs;
    displaymin.innerHTML = min;
    displaysec.innerHTML = sec;
    displaymilisec.innerHTML = milisec;
   
    
}

function startTimer(){
    interval = setInterval(function(){
        timer();
    },100);
}

function pauseTimer(){
    clearInterval(interval);
}

function resetTimer(){
    pauseTimer();
    min=0;
    sec=0;
    hour=0;
    displaysec.innerHTML=hour;
    displaysec.innerHTML=sec;
    displaymin.innerHTML=min;
}