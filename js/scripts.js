function startTimer(duration, display){

    var time = duration, minutes, seconds;

    setInterval(function(){
        minutes = parceInt(timer / 60,10);
        seconds = parceInt(timer % 60,10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0){
            timer = duration;
        }

    },1000)

}

window.onload = function(){

    var duration = 60 * 4; //Conversao segundos
    var display = document.querySelector("#timer"); // Elemento exibir timer

    startTimer(duration, display);
    
}