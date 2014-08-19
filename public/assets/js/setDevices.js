/**
* Set Devices chart.
**/
function setDevices(){	
    if(window.devices == undefined){return;}
    document.getElementById("Devices").innerHTML = "<p>"+
	"Devices :  " + window.devices.devices + "<br>"+
	"Assigned :  "+  window.devices.assigned + "<br>" +
	"Used :  "+ window.devices.used +"<br>" +
	"Rotating Devices :  " + window.devices.rotating + " *<br>" +
	"Non-Rotating Devices :  "+ window.devices.non_rotating + " *<br>" +"</p>";
}
//updates chart every 1 second.
setInterval (setDevices, 1000);
