let images = ["images/A_Young_Leo.png", "images/Comics-Hulk-Fist-icon.png", "images/Comics-Ironman-Hand-icon.png", "images/Comics-Ironman-Red-icon.png", "images/Thor.png", "images/TV-Kitty-icon.png", "images/War_Machine.png"];
var i = 1;
var b = 5

alert ("hello");

btnLeft.onclick = function () {
	var a = document.getElementById('photo');

	a.src = images[i];

	i++;
	if(i>6) {
		i = 0;
	}
}

btnRight.onclick = function () {
	var a = document.getElementById('photo');
	a.src = images[b];
	
	b=b-1;
	if(b<0) {
		b = 5;
	}
}