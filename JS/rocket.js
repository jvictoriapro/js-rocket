var timer = null;
var countdownNum = 10;

function changeState(state) {
    document.body.className= "body-state" + state;
    clearInterval(timer);
    countdownNum = 10;
    document.getElementById('countdown').innerHTML =  countdownNum;

    //countdown
    if (state == 2){
        timer = setInterval(function () {
            countdownNum = countdownNum - 1;
            document.getElementById('countdown').innerHTML =  countdownNum;
            
            if (countdownNum <= 0) {
                changeState(3);
            }; 
        }, 500);

    } else if (state == 3){
        var success = setTimeout(function (){
            var randomNumber = (Math.random()*10);
            console.log('randomNumber: ', randomNumber)
            //success
            if (randomNumber > 5) {
                changeState(4);
            } else {
                changeState(5); //oh no
            }

        }, 2000);
    };
}