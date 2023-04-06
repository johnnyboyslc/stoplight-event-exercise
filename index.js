let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");

let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");

let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");

stopButton.addEventListener("click", function (e) {
	stopLight.classList.toggle("stop");
	if (stopLight.classList.contains("stop")) {
		console.log(`${e.target.textContent} bulb on`);
	} else {
		console.log(`${e.target.textContent} bulb off`);
	}
});
slowButton.addEventListener("click", function (e) {
	slowLight.classList.toggle("slow");
	if (slowLight.classList.contains("slow")) {
		console.log(`${e.target.textContent} bulb on`);
	} else {
		console.log(`${e.target.textContent} bulb off`);
	}
});

goButton.addEventListener("click", function (e) {
	goLight.classList.toggle("go");
	if (goLight.classList.contains("go")) {
		console.log(`${e.target.textContent} bulb on`);
	} else {
		console.log(`${e.target.textContent} bulb off`);
	}
});

function addMouseLeaveListener(element) {
	element.addEventListener("mouseleave", function (e) {
		console.log(`Left ${e.target.textContent} button`);
	});
}

function addMouseEnterListener(element) {
	element.addEventListener("mouseenter", function (e) {
		console.log(`Entered ${e.target.textContent} button`);
	});
}

addMouseEnterListener(goButton);
addMouseEnterListener(slowButton);
addMouseEnterListener(stopButton);

addMouseLeaveListener(goButton);
addMouseLeaveListener(slowButton);
addMouseLeaveListener(stopButton);
