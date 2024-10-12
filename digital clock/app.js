
var hoursSp =  document.getElementById("hours");
var minSp =  document.getElementById("min");
var secSp =  document.getElementById("sec");
var ampmsp =  document.getElementById("ampm");

function time () {
    var time = new Date();
    hoursSp.innerText = time.getHours()
    minSp.innerText = time.getMinutes()
    secSp.innerText = time.getSeconds()
    
   
    if (hoursSp >=12 ){
        ampmsp.innerText = "pm"
     }
         else{ampmsp.innerText = "am"}
}


setInterval( time, 1000) 

