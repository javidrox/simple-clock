let currentClockMode = 12;
let timeInterval;

let showCurrentTime12 = () => {
	let clock = document.getElementById('clock');

	let ampm = 'AM';
	let currentTime = new Date();
	let hours = currentTime.getHours();
	if(hours > 12){
		ampm = 'PM';
		hours -= 12;
	}
	if(hours < 10){
		hours = '0' + hours;
	}
	let minutes = currentTime.getMinutes();
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	let seconds = currentTime.getSeconds();
	if(seconds < 10){
		seconds = '0' + seconds;
	}

	let clockDisplay = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
	clock.innerText = clockDisplay;
}

let showCurrentTime24 = () => {
	let clock = document.getElementById('clock');

	let currentTime = new Date();
	let hours = currentTime.getHours();
	if(hours < 10){
		hours = '0' + hours;
	}
	let minutes = currentTime.getMinutes();
	if(minutes < 10){
		minutes = '0' + minutes;
	}
	let seconds = currentTime.getSeconds();
	if(seconds < 10){
		seconds = '0' + seconds;
	}

	let clockDisplay = hours + ':' + minutes + ':' + seconds;
	clock.innerText = clockDisplay;
}

let clockModeButton = document.getElementById('ampm');
let changeClockMode = () => {
	if(currentClockMode == 12) {
		currentClockMode = 24;
		clearInterval(timeInterval);
		showCurrentTime24();
		updateTime(showCurrentTime24);
		clockModeButton.innerText = 'Change to 12HR Clock!';
	}
	else if(currentClockMode == 24) {
		currentClockMode = 12;
		clearInterval(timeInterval);
		showCurrentTime12();
		updateTime(showCurrentTime12);
		clockModeButton.innerText = 'Change to 24HR Clock!';
	}
}
clockModeButton.addEventListener('click', changeClockMode);


let updateTime = (clockMode) => {
	timeInterval = setInterval(clockMode, 1000);
}


showCurrentTime12();
updateTime(showCurrentTime12);