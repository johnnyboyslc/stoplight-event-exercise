let stopButton = document.getElementById("stopButton");
let stopLight = document.getElementById("stopLight");

let slowButton = document.getElementById("slowButton");
let slowLight = document.getElementById("slowLight");

let goButton = document.getElementById("goButton");
let goLight = document.getElementById("goLight");
let controls = document.getElementById("controls");

stopButton.addEventListener("click", function (e) {
	stopLight.classList.toggle("stop");
});

slowButton.addEventListener("click", function (e) {
	slowLight.classList.toggle("slow");
});

goButton.addEventListener("click", function (e) {
	goLight.classList.toggle("go");
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

// bonus

controls.addEventListener("click", function (e) {
	if (e.target.textContent === "Stop") {
		if (stopLight.classList.contains("stop")) {
			console.log(`${e.target.textContent} bulb on`);
		} else {
			console.log(`${e.target.textContent} bulb off`);
		}
	}

	if (e.target.textContent === "Slow") {
		if (slowLight.classList.contains("slow")) {
			console.log(`${e.target.textContent} bulb on`);
		} else {
			console.log(`${e.target.textContent} bulb off`);
		}
	}

	if (e.target.textContent === "Go") {
		if (goLight.classList.contains("go")) {
			console.log(`${e.target.textContent} bulb on`);
		} else {
			console.log(`${e.target.textContent} bulb off`);
		}
	}
});
