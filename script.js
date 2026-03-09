// System information
document.getElementById("platform").innerText =
"Platform: " + navigator.platform;

document.getElementById("browser").innerText =
"Browser: " + navigator.userAgent;


// live clock
setInterval(()=>{

document.getElementById("time").innerText =
"Time: " + new Date().toLocaleTimeString();

},1000);


// get public IP
fetch("https://api.ipify.org?format=json")

.then(response=>response.json())

.then(data=>{

document.getElementById("ip").innerText =
"Public IP: " + data.ip;

});


// terminal logger
function log(message){

let terminal = document.getElementById("terminal");

terminal.innerHTML += "> " + message + "<br>";

terminal.scrollTop = terminal.scrollHeight;

}


// simulated port monitoring
let ports=[21,22,80,443,3306];

function scanPorts(){

let portOutput="";
let alerts="";

ports.forEach(p=>{

let open=Math.random()>0.65;

portOutput +=

"Port " + p + " : " +

(open ?

"<span class='alert'>OPEN</span>" :

"<span class='safe'>CLOSED</span>")

+ "<br>";

if(open){

alerts += "Warning: Port " + p + " exposed<br>";

log("Port " + p + " detected open");

}

});

document.getElementById("ports").innerHTML=portOutput;

document.getElementById("alerts").innerHTML=

alerts || "No security alerts";

}


// run scan every 5 seconds
setInterval(scanPorts,5000);


// chart
let ctx=document.getElementById("chart");

new Chart(ctx,{

type:"line",

data:{

labels:["1","2","3","4","5"],

datasets:[{

label:"Network Traffic",

data:[4,6,7,5,8],

borderColor:"#00ff9c"

}]

}

});