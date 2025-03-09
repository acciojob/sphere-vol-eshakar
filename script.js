function volume_sphere(event) {
    //Write your code here
	event.preventDefault();
	let radius = parseFloat(document.getElementById('radius').value);

	if (!isNaN(radius) && radius > 0) {
		let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
		document.getElementById('volume').value = volume.toFixed(2);
	} else {
		alert("Please Enter a valid positive radius.")
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
