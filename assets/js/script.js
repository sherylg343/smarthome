const tempScale = $("#temp-scale");
const deviceSelect = $("#device-select");
const roomSelect = $("#room-select");
const sliderClass = $(".slider");
const lightSlider = $(".slidecontainer1 input");
const schedFanSpeed = $("#speed3");
const schedFanDir = $("#direction3");
const schedBright = $("#brightness7");
const schedLighting = $("#lighting");
const schedOvhd = $("#light-overhead");
const schedOutside = $("#light-outside");
const schedLamp = $("#light-lamp");
const schedHc = $("#heating-cooling");
const schedFan = $("#ceiling-fan");
const schedWh = $("#whole-house");
const schedKitchen = $("#kitchen");
const schedGreatRm = $("#great-room");
const schedMasterBr = $("#master-br");
const schedGarage = $("#garage");
const schedHcControls = $(".heat-cool");
const schedLightControls = $(".bright");
const schedFanControls = $(".cfan");
const schedList = $("#sched-list");
const fanDirection = $(".fan-direction");
const target1 = $("#target1");
const target2 = $("#target2");
const target3 = $("#target3");
const target4 = $("#target4");
const tempScaleValue = tempScale.val();

//Reference: https:/ / developer.mozilla.org / en - US / docs / Web / JavaScript / Reference / Global_Objects / Math / random
$(document).ready(function () { 
	//default off position of sliders
	$(lightSlider).prop('disabled', true);
	//default off position of dropdown menus
    $('select').prop('disabled', 'disabled');
    //enable all scheduling inputs (after all disabled above)
    $(tempScale).prop('disabled', false);
    $(roomSelect).prop('disabled', false);
    $(deviceSelect).prop('disabled', false);
    $("#hvac-mode4").prop('disabled', false);
    $(schedFanDir).prop('disabled', false);
	//default off position for target temp
	$(target1, target2, target3, target4).prop('disabled', true);
	$(target1, target2, target3, target4).val("");
	$("#btn1a, #btn1b, #btn2a, #btn2b, #btn3a, #btn3b, #btn4a, #btn4b").prop('disabled', true);
	$('.dropdown').click(function () {
	$(".dropdown-menu").toggleClass('show');
});

    $(tempScale).change(function() {
        if(tempScale.val() === "celsius") {
            getRandomIntInclusive(10, 29);
        } else if (tempScale.val() === "farenheit") {
            getRandomIntInclusive(50, 85); 
        } else {
            getRandomIntInclusive(50, 85); 
        }
    });

    function getRandomIntInclusive(low, high) {
	    const min = Math.ceil(low);
	    const max = Math.floor(high);
	    const actualValue = Math.floor(Math.random() * (max - min + 1)) + min;
	    console.log(actualValue);
	    $(".actual").each(function () {
		    $(this).val(actualValue);
		    $("#actual-wh, #actual-kitchen, #actual-gr, #actual-master").prop('disabled', true);
	    });
    }

    swal("Amenity requests your geolocation to provide local weather data. Click yes to allow access.");

//Footer with Date, Time and Weather
//code assistance from www.phoenixnap.com, "How to Get Current Date & Time in Javascript", by Sofija Simic, posted 10/22/19
//and Javascript30.com, Day 2 - Clock, by Wes Bos
//and from Frontend Weekly, "How to convert 24hours format to 12 hours in Javascript," by Javascript Jeep, 6/29/19 (https://medium.com/front-end-weekly/how-to-convert-24-hours-format-to-12-hours-in-javascript-ca19dfd7419d#:~:text=Convert%20the%2024%20hours%20format%20time%20to%2012%20hours%20formatted%20time.&text=Now%20in%2Dorder%20to%20convert,12%20on%20the%20current%20time.&text=time%20%3D%2024%2C%20then%2024%25,change%20the%20time%20as%2012.)
    const footerDate = document.getElementById("footerdate");
    const footerTime = document.getElementById("footertime");

    function checkDate() {
	    const now = new Date();
	    const month = (now.getMonth() + 1);
	    const day = now.getDate();
	    const year = now.getFullYear();
	    const hour = now.getHours();
	    const mins = now.getMinutes();

	    const timeSuffix = hour <= 12 ? "AM" : "PM";
	    const clockHour = (hour % 12) || 12;
	    const digitalMins = (mins < 10) ? "0" + mins : mins;

	    const today = `${month}/${day}/${year}`;
	    const time = `${clockHour}:${digitalMins} ${timeSuffix}`;

	    footerDate.innerHTML = today;
	    footerTime.innerHTML = time;
    }

    setInterval(checkDate, 60000);
    checkDate();

//Weather in Footer
//code provided by "Create a JavaScript Weather App with Location Data Part 1", by Bryan McIntosh, 
//published on 1/15/19 by Spatial Times (https://www.spatialtimes.com/2019/01/Create-a-JavaScript-Weather-App-with-Location-Data-Part-1/)
//and Google Maps Platform (https://developers.google.com/maps/documentation/javascript/examples/map-geolocation)

//check if gelocation API exists
    function checkLoc() {
	    if (navigator.geolocation) {
		    navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
	    } else {
		    alert('geolocation not available');
	    }
    }

//getCurrentPosition: successful return
    function getPosSuccess(position) {
	    const geoLat = position.coords.latitude.toFixed(2);
	    const geoLng = position.coords.longitude.toFixed(2);
	    console.log(geoLat, geoLng);
	    getWeatherByLL(geoLat, geoLng);
    }

//getCurrentPosition: error returned
    function getPosErr(err) {
	    switch (err.code) {
		    case err.PERMISSION_DENIED:
			    alert("User denied the request for Geolocation.");
			    break;
		    case err.POSITION_UNAVAILABLE:
			    alert("Location information is unavailable.");
			    break;
		    case err.TIMEOUT:
			    alert("The request to get user location timed out.");
			    break;
		    default:
			    alert("An unknown error occurred.");
	    }
    }

    function getWeatherByLL(geoLat, geoLng) {
//API Variables
	    const proxyURL = "https://cors-anywhere.herokuapp.com/";
	    const weatherAPI = "http://api.weatherunlocked.com/api/current/";
	    const weatherId = "app_id=9ad053bc&";
	    const weatherKey = "app_key=b52a697539693cdc84826de1e371658c";
//Concatenate API variables into a URLRequest
	    let URLRequest = proxyURL + weatherAPI + String(geoLat) + "," + String(geoLng) + "?" + weatherId + weatherKey;

	    $.ajax({
		    url: URLRequest,
		    type: "GET",
		    crossDomain: true,
		    dataType: "json",
		    success: function (parsedResponse, statusText, jqXhr) {

			let currentTemp = parsedResponse.temp_f.toFixed(0);
			document.getElementById("temp").innerHTML = currentTemp;
			let currentIcon = parsedResponse.wx_icon;
			document.getElementById("icon").innerHTML = `<img src="assets/weather-icons/${currentIcon}" alt="Weather Icon">`;
		    },
		    error: function (error) {
			    console.log(error);
		    }
	    });
    }
    setInterval(checkLoc, 1800000);
    checkLoc();
});

$(".temp input[type=text]").on('change input click', function () {
	if (($(this).val() < 50) || $(this).val() > 85) {
		$(".temp-alert-f").removeClass("d-none");
	} else {
		$(".temp-alert-f").addClass("d-none");
	}
});

//on-off switches
$('input[type="checkbox"]').click(function () {
	const powerId = $(this).attr('id');
	const powerIdValue = $(this).is(':checked');
	if ($(this).hasClass("wh-power")) {
		housePower(powerId, powerIdValue);
	} else if (powerId == "myonoffswitch15") {
		schedulerToggle(powerIdValue);
	} else {
		let img = $(this).parent().parent().parent().next().find("img");
		let sliderInput = $(this).parent().parent().parent().next().find("input[type=range]");
		let sliderInputLabel = $(this).parent().parent().parent().next().find("label");
		let sliderId = $(sliderInput).attr('id');
		let sliderName = $(sliderInput).attr('name');
		let hcMode = $(this).parent().parent().parent().next().find("select");
		let hcModeLabel = $(this).parent().parent().parent().next().find("label");
		let hcModeId = $(hcMode).attr('id');
		let hcTarget = $(this).parent().parent().parent().next().next().next().find("input[type=text");
		let hcTargetLabel = $(this).parent().parent().parent().next().next().next().find("label");
		let hcTargetBtns = $(this).parent().parent().parent().next().next().next().find("button");
		let direction = $(this).parent().parent().parent().next().next().find("select");
		let directionLabel = $(this).parent().parent().parent().next().next().find("label");
		if ($(this).prop("checked") === false) {
			if ($(this).hasClass("light-power")) {
				$(img).css({
					"background-color": "var(--clr-ltgray)"
				});
				$(sliderInput).prop('disabled', true);
				$(sliderInput).addClass("opaque");
				$(sliderInputLabel).addClass("opaque");
			} else if ($(this).hasClass("fan-power")) {
				document.documentElement.style.setProperty(`--${sliderName}`, 0 + "s");
				$(img).css({
					"background-color": "var(--clr-ltgray)"
				});
				$(sliderInput).prop('disabled', true);
				$(sliderInput).addClass("opaque");
				$(direction).addClass("opaque");
				$(direction).prop('disabled', 'disabled');
				$(directionLabel).addClass("opaque");
			} else {
				$(hcMode).prop('disabled', true);
				$(`#${hcModeId} option[value=""]`).prop('selected', true);
				$(hcTarget).prop('disabled', true);
				$(hcTargetBtns).prop('disabled', true);
				$(hcTarget).val("");
				$(hcMode).val("");
				$(hcMode).addClass("opaque");
				$(hcModeLabel).addClass("opaque");
				$(hcTarget).addClass("opaque");
				$(hcTargetLabel).addClass("opaque");
				$(hcTargetBtns).addClass("opaque");
			}
		} else if ($(this).prop("checked") === true) {
			if ($(this).hasClass("light-power")) {
				$(img).css({
					"background-color": "var(--clr-yellow)"
				});
				$(sliderInput).prop('disabled', false);
				$(sliderInput).removeClass("opaque");
				$(sliderInputLabel).removeClass("opaque");
				lightSliderUpdate(sliderInput);
			} else if ($(this).hasClass("hc-power")) {
				$(hcMode).prop('disabled', false);
				$(hcTarget).prop('disabled', false);
				$(hcTargetBtns).prop('disabled', false);
				$(hcMode).removeClass("opaque");
				$(hcModeLabel).removeClass("opaque");
				$(hcTarget).removeClass("opaque");
				$(hcTargetLabel).removeClass("opaque");
				$(hcTargetBtns).removeClass("opaque");
			} else {
				$(img).css({
					"background-color": "var(--clr-white)"
				});
				$(sliderInput).prop('disabled', false);
				$(sliderInput).prop('disabled', false);
				$(sliderInput).removeClass("opaque");
				$(sliderInputLabel).removeClass("opaque");
				$(direction).removeClass("opaque");
				$(directionLabel).removeClass("opaque");
				$(direction).prop('disabled', false);
				document.documentElement.style.setProperty(`--${sliderName}`, 0.5 + "s");
				$(sliderInput).val(4);
				speedControl(sliderInput);
			}
		} else {
			console.log("error");
		}
	}

});

function housePower(powerId, powerIdValue) {
	if (powerId == 'myonoffswitch1') {
		$(".light-power").each(function () {
			let whImg = $(this).parent().parent().parent().next().find("img");
			let whSliderInput = $(this).parent().parent().parent().next().find("input[type=range]");
			let whSliderInputLabel = $(this).parent().parent().parent().next().find("label");
			let whSliderName = $(whSliderInput).attr('name');
			if (powerIdValue === false) {
				$(this).prop("checked", false);
				$(whImg).css({
					"background-color": "var(--clr-ltgray)"
				});
				$(whSliderInput).prop('disabled', true);
				$(whSliderInputLabel).addClass("opaque");
				$(whSliderInput).addClass("opaque");
			} else if (powerIdValue === true) {
				$(this).prop("checked", true);
				$(whImg).css({
					"background-color": "var(--clr-yellow)"
				});
				$(whSliderInput).prop('disabled', false);
				$(whSliderInputLabel).removeClass("opaque");
				$(whSliderInput).removeClass("opaque");
				lightSliderUpdate(whSliderInput);
			} else {
				console.log("wh lights each() error");
			}
		});
	} else if (powerId == 'myonoffswitch2') {
		$(".hc-power").each(function () {
			let whHcModeLabel = $(this).parent().parent().parent().next().find("label");
			let whHcMode = $(this).parent().parent().parent().next().find("select");
			let whHcModeId = $(whHcMode).attr('id');
			let whHcTargetLabel = $(this).parent().parent().parent().next().next().next().find("label");
			let whHcTarget = $(this).parent().parent().parent().next().next().next().find("input[type=text");
			let whHcTargetBtns = $(this).parent().parent().parent().next().next().next().find("button");
			if (powerIdValue === false) {
				$(this).prop("checked", false);
				$(whHcMode).prop('disabled', true);
				$(`#${whHcModeId} option[value=""]`).prop('selected', true);
				$(whHcTarget).attr('disabled', 'disabled');
				$(whHcTargetBtns).prop('disabled', true);
				$(whHcModeLabel).addClass("opaque");
				$(whHcMode).addClass("opaque");
				$(whHcMode).val("");
				$(whHcTargetLabel).addClass("opaque");
				$(whHcTarget).addClass("opaque");
				$(whHcTargetBtns).addClass("opaque");
				$(whHcTarget).val("");
				$(target1).val("");
				$(target1).attr('disabled', 'disabled');
				$("#btn1a, #btn1b").prop('disabled', 'disabled');
				$('#hvac-mode5 option[value=""]').prop('selected', true);
				$("#hvac-mode5").prop('disabled', true);
				$("#hvac-mode5").val("");
				$(".wh-hvac-off").addClass("opaque");
			} else if (powerIdValue === true) {
				$(this).prop("checked", true);
				$(whHcMode).prop('disabled', false);
				$("#hvac-mode5").prop('disabled', false);
				$(whHcTarget).removeAttr('disabled');
				$(target1).removeAttr('disabled');
				$(whHcTargetBtns).prop('disabled', false);
				$("#btn1a, #btn1b").prop('disabled', false);
				$(whHcModeLabel).removeClass("opaque");
				$(whHcMode).removeClass("opaque");
				$(whHcTargetLabel).removeClass("opaque");
				$(whHcTarget).removeClass("opaque");
				$(whHcTargetBtns).removeClass("opaque");
				$(".wh-hvac-off").removeClass("opaque");
				$(target1).on('input', function () {
					const tValue = $(target1).val();
					$(".target").each(function () {
						$(this).val(tValue);
					});
				});
				$("#hvac-mode5").change(function () {
					const modeValue = $("#hvac-mode5").val();
					$(".mode").each(function () {
						$(this).val(modeValue);
					});
				});
			} else {
				console.log("wh hc each() error");
			}
		});
	} else {
		if (powerId == 'myonoffswitch3') {
			$(".fan-power").each(function () {
				let whImg = $(this).parent().parent().parent().next().find("img");
				let whSliderInput = $(this).parent().parent().parent().next().find("input[type=range]");
				let whSliderInputLabel = $(this).parent().parent().parent().next().find("label");
				let whDirection = $(this).parent().parent().parent().next().next().find("select");
				let whDirectionLabel = $(this).parent().parent().parent().next().next().find("label");
				let whSliderName = $(whSliderInput).attr('name');
				if (powerIdValue === false) {
					$(this).prop("checked", false);
					$(whImg).css({
						"background-color": "var(--clr-ltgray)"
					});
					$(whSliderInput).prop('disabled', true);
					$(whSliderInputLabel).addClass("opaque");
					$(whSliderInput).addClass("opaque");
					$(whDirection).addClass("opaque");
					$(whDirectionLabel).addClass("opaque");
					$(whDirection).prop('disabled', 'disabled');
					document.documentElement.style.setProperty(`--${whSliderName}`, 0 + "s");
					$(whSliderInput).val(0);
				} else if (powerIdValue === true) {
					$(this).prop("checked", true);
					$(whImg).css({
						"background-color": "var(--clr-white)"
					});
					$(whSliderInput).prop('disabled', false);
					$(whSliderInputLabel).removeClass("opaque");
					$(whSliderInput).removeClass("opaque");
					$(whDirection).removeClass("opaque");
					$(whDirectionLabel).removeClass("opaque");
					$(whDirection).prop('disabled', false);
					document.documentElement.style.setProperty(`--${whSliderName}`, 0.5 + "s");
					$(whSliderInput).val(4);
					speedControl(whSliderInput);
				} else {
					console.log("wh fan each() error");
				}
			});
		} else {
			console.log("wh error");
		}
	}
}

//code from "Add Button Number Incrementers" from *css-tricks, by Chris Coyier, 3/29/13, (https://css-tricks.com/number-increment-buttons/) and
//Javascript30.com,#11 HTML5 Video Player, by Wes Bos (https://javascript30.com)
$(".tempbtn").click(function () {
	const targetButton = $(this);
	const currentInput = $(targetButton).parent().find("input");
	var oldValue = currentInput.val();

	if ($(targetButton).hasClass("inc")) {
		let newValue = parseFloat(oldValue) + 1;
		$(targetButton).parent().find("input").val(newValue);

	} else {
		if (oldValue > 0 && $(targetButton).hasClass("dec")) {
			let newValue = parseFloat(oldValue) - 1;
			$(targetButton).parent().find("input").val(newValue);
		} else {
			$(targetButton).parent().find("input").val(0);
		}
	}
});


//progress bar code based on w3schools.com (https://www.w3schools.com/howto/howto_js_rangeslider.asp) and
//Javascript30.com, #3 Playing with CSS Variables and JS and #11 HTML5 Video Player, by Wes Bos (https://javascript30.com)
const lightSlider2 = document.querySelectorAll('.slidecontainer1 input');

function lightSliderUpdate() {
	opacity = this.value / 10;
	document.documentElement.style.setProperty(`--${this.name}`, opacity);
}

lightSlider2.forEach(input => input.addEventListener('change', lightSliderUpdate));
lightSlider2.forEach(input => input.addEventListener('mousemove', lightSliderUpdate));

//rotation of fan icon based on speed setting - code based on "How to continuously rotate an image using CSS," 
//by flavio on 1/13/19 (https://flaviocopes.com/rotate-image/),and from 
//"An alternative to if/else and switch in JavaScript" by Fabien Huet (https://blog.wax-o.com/2015/05/an-alternative-to-if-else-and-switch-in-javascript/)
const speedSlide = document.querySelectorAll('.slidecontainer2 input');

function speedControl() {

	const speed = ({
		4: 0.5,
		3: 1,
		2: 1.5,
		1: 2,
	})[this.value] || 0;

	document.documentElement.style.setProperty(`--${this.name}`, speed + "s");
}

speedSlide.forEach(input => input.addEventListener('change', speedControl));
speedSlide.forEach(input => input.addEventListener('mousemove', speedControl));

//fan direction
$(fanDirection).change(function () {
	const theId = $(this).attr('id');
	const direction = "#" + theId + " option:selected";
	const animDirection = ($(direction).val() === "clockwise") ? "normal" : "reverse";
	document.documentElement.style.setProperty(`--${this.name}`, animDirection);
});

//jquery timepicker for Scheduler, code from Nirav Joshi, 12/4/19 posted on stackoverflow (https://stackoverflow.com/questions/59169315/datetimepicker-not-working-with-bootstrap-4)
//and tempusdominus documentation (https://tempusdominus.github.io/bootstrap-4/Usage/)
$(function () {
	$('#datetimepicker1').datetimepicker();
	$('#datetimepicker2').datetimepicker({
		useCurrent: false
	});
	$("#datetimepicker1").on("change.datetimepicker", function (e) {
		$('#datetimepicker2').datetimepicker('minDate', e.date);
	});
	$("#datetimepicker2").on("change.datetimepicker", function (e) {
		$('#datetimepicker1').datetimepicker('maxDate', e.date);
	});
});

//Scheduler 
////activate appropriate selections
let scheduler = document.getElementById("scheduler-form");

function schedulerDisplay() {
	$(roomSelect).change(function () {
		$(schedFanSpeed).prop('disabled', false);
		$(schedBright).prop('disabled', false);
		$(schedLighting).removeClass("d-none");
		$(schedOvhd).removeClass("d-none");
		$(schedOutside).removeClass("d-none");
		$(schedLamp).removeClass("d-none");
		$(schedHc).removeClass("d-none");
		$(schedFan).removeClass("d-none");
		switch ($(this).val()) {
			case "whole-house":
				$(schedOvhd).addClass("d-none");
				$(schedLamp).addClass("d-none");
				$(schedOutside).addClass("d-none");
				break;

			case "kitchen":
				$(schedLighting).addClass("d-none");
				$(schedLamp).addClass("d-none");
				$(schedOutside).addClass("d-none");
				$(schedFan).addClass("d-none");
				break;

			case "great-room":
				$(schedLighting).addClass("d-none");
				$(schedLamp).addClass("d-none");
				$(schedOutside).addClass("d-none");
				break;

			case "master-bedroom":
				$(schedLighting).addClass("d-none");
				$(schedOutside).addClass("d-none");
				break;

			case "garage":
				$(schedLighting).addClass("d-none");
				$(schedLamp).addClass("d-none");
				$(schedFan).addClass("d-none");
				$(schedHc).addClass("d-none");
				break;

			case "":
				return;
		}
	});
}

scheduler.addEventListener("change", schedulerDisplay);
scheduler.addEventListener("click", schedulerDisplay);

//change conditions to add && device-select == "" to turn on controls
//above - when select device will remove d-none, but leaves off
function schedulerToggle(powerIdValue) {
	if (powerIdValue === true) {
		if ($(deviceSelect).val() == "lighting") {
			$(schedLightControls).removeClass("d-none");
		}
		if ($(deviceSelect).val() == "light-overhead") {
			$(schedLightControls).removeClass("d-none");
		}
		if ($(deviceSelect).val() == "light-lamp") {
			$(schedLightControls).removeClass("d-none");
			$(schedKitchen).addClass("d-none");
			$(schedGreatRm).addClass("d-none");
			$(schedGarage).addClass("d-none");
		}
		if ($(deviceSelect).val() == "light-outside") {
			$(schedLightControls).removeClass("d-none");
			$(schedKitchen).addClass("d-none");
			$(schedGreatRm).addClass("d-none");
			$(schedMasterBr).addClass("d-none");
		}
		if ($(deviceSelect).val() == "heating-cooling") {
			$(schedHcControls).removeClass("d-none");
			$(schedGarage).addClass("d-none");
		}
		if ($(deviceSelect).val() == "ceiling-fan") {
			$(schedFanControls).removeClass("d-none");
			$(schedKitchen).addClass("d-none");
			$(schedGarage).addClass("d-none");
		} else {
			return;
		}
	}
}

//parts of following code based on Javascript30.com, #15 Local Storage, by Wes Bos (https://javascript30.com)
let eventItems = {};
let valueOnlyItems = JSON.parse(localStorage.getItem("valueOnlyItems")) || {};

$("#scheduled-items").submit(function (event) {
	event.preventDefault();
	eventItems = $(this).serializeArray();
	console.log(eventItems);
	//code from Adam Merrifield, 6/21/14, stackOverflow (https://stackoverflow.com/questions/24338177/jquery-serializearray-is-not-getting-the-value-of-the-checked-checkbox)
	$('#scheduled-items input[type="checkbox"]:not(:checked)').each(function () {
		if ($.inArray(this.name, eventItems) === -1) {
			eventItems.push({
				name: this.name,
				value: "off"
			});
		}
	});
	$.each(eventItems, function (name, value) {
		switch (this.name) {
			case "start-date":
				this.name = "Start Date/Time";
				break;
			case "end-date":
				this.name = "End Date/Time";
				break;
			case "room":
				this.name = "Room";
				break;
			case "device":
				this.name = "Device";
				break;
			case "onoffswitch":
				this.name = "Power";
				break;
			case "opacity7":
				this.name = "Brightness";
				break;
			case "heating-cooling-mode":
				this.name = "Mode";
				break;
			case "target-temp":
				this.name = "Target Temp.";
				break;
			case "fanspeed3":
				this.name = "Fan Speed";
				break;
			case "direction3":
				this.name = "Fan Direction";
				break;
			case "":
				return;
		}
	});
	let hc = eventItems.some(elem => elem.value === 'heating-cooling');
	const lights = eventItems.some(item => (item.value === "lighting") || (item.value === "light-overhead") || (item.value === "light-lamp") || (item.value === "light-outside"));
	if (hc === true) {
		const index1 = eventItems.findIndex(item => item.name === 'Brightness');
		eventItems[index1].value = "";
		const index2 = eventItems.findIndex(item => item.name === 'Fan Speed');
		eventItems[index2].value = "";
	} else if (lights === true) {
		const index3 = eventItems.findIndex(item => item.name === 'Fan Speed');
		eventItems[index3].value = "";
	} else {
		const index4 = eventItems.findIndex(item => item.name === 'Brightness');
		eventItems[index4].value = "";
	}

	valueOnlyItems = eventItems.filter(eventItem => eventItem.value != "");

	populateList(valueOnlyItems);
	localStorage.setItem("valueOnlyItems", JSON.stringify(valueOnlyItems));
	this.reset();
	$(schedFanSpeed).prop('disabled', false);
	$(schedFanSpeed).removeClass("d-none");
	$(schedFanDir).removeClass("d-none");
	$(schedBright).prop('disabled', false);
	$(schedLighting).removeClass("d-none");
	$(schedOvhd).removeClass("d-none");
	$(schedOutside).removeClass("d-none");
	$(schedLamp).removeClass("d-none");
	$(schedHc).removeClass("d-none");
	$(schedFan).removeClass("d-none");
	$(schedWh).removeClass("d-none");
	$(schedKitchen).removeClass("d-none");
	$(schedGreatRm).removeClass("d-none");
	$(schedMasterBr).removeClass("d-none");
	$(schedGarage).removeClass("d-none");
	$(schedHcControls).addClass("d-none");
	$(schedLightControls).addClass("d-none");
	$(schedFanControls).addClass("d-none");
});


function populateList(valueOnlyItems) {
	$.each(valueOnlyItems, function (i, valueOnlyItem) {
		$(schedList).append(`
            <li>
                ${valueOnlyItem.name}: ${valueOnlyItem.value}
            </li>
            `);
	}).join('');
	$(schedList).append('<hr>');
}


//from Basj on stackOverflow (https://stackoverflow.com/questions/61085148/auto-save-all-inputs-value-to-localstorage-and-restore-them-on-page-reload)
document.querySelectorAll('#control-form input:not([type="submit"])').forEach(elt => {
	elt.value = localStorage.getItem(elt.name);
	elt.addEventListener("change", e => {
		localStorage.setItem(e.target.name, e.target.value);
	});
});






