window.onload  = function () {

	var button = document.getElementById("buttonV");
	button.onclick = infectionHandler;
}

function infectionHandler() {

	var canvas = document.getElementById("circleCanvas");
	var context = canvas.getContext("2d");

	for (var circles = 0; circles < 20; circles++) {
		drawCircles(canvas, context);
		
	}
		alert("Não faça mais isso!");
}

function drawCircles (canvas, context) {

	var radius = Math.floor(Math.random() * 40);
   	var x = Math.floor(Math.random() * canvas.width);
   	var y = Math.floor(Math.random() * canvas.height);
 
   	context.beginPath();
             // context.arc(x, y, radius, startAngle, endAngle, direction(clockwise)) //
   	context.arc(x, y , radius, 0, degreesToRadians(360), true);

   	context.fillStyle = "red";
   	context.fill();

    }

function degreesToRadians(degrees) {
	return (degrees * Math.PI)/180;
   }
	
