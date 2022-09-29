    var snd = new Audio("alert.mp3");
    function alert(volume, timers){
        timer1 = timers * 1000;
        snd.volume = volume;
        var playing = true
        snd.play();
        

        
        setTimeout(function(){
            if (playing == true){
                snd.currentTime = 0;
                snd.play();
            }
        }, 17000);
        setTimeout(function(){
            if (playing == true){
                snd.currentTime = 0;
                snd.play();
            }
        }, 34000);
        setTimeout(function(){
            if (playing == true){
                snd.currentTime = 0;
                snd.play();
            }
        }, 51000);
        setTimeout(function(){
            if (playing == true){
                snd.currentTime = 0;
                snd.play();
            }
        }, 68000);
        setTimeout(function(){
            if (playing == true){
                snd.currentTime = 0;
                snd.play();
            }
        }, 85000);
        setTimeout(function(){
            if (playing == true){
                snd.currentTime = 0;
                snd.play();
            }
        }, 102000);
        setTimeout(function(){
            snd.pause();
            playing = false;
            snd.currentTime = 0;
            document.body.style.display = "none";
        }, timer1);
    }
function hide() {
    var x = document.getElementById("eas");
    if (document.body.style.display === "none") {
        document.body.style.display = "block";
    } else {
        document.body.style.display = "none";
    }
} 

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + '<span style="margin-left: 3px; margin-right: 3px;"/>' + '$2');
    }
    return x1 + x2;
}

$(function() {
    
	window.addEventListener('message', function(event) {
		if (event.data.type == "alert") {
            $('.eas_alerter').html('<p>Alert Issued by:</p> <p>'+event.data.issuer+'</p> </marquee><marquee behavior="scroll" direction="left" scrollamount="20"><p>'+event.data.message+'</p></marquee>');
            document.body.style.display = event.data.enable ? "block" : "none";
            alert(event.data.volume, event.data.timer)
		}
	});
});

