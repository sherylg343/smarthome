//Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random 
$(document).ready( function() {
    getRandomIntInclusive(50, 80);
});

function getRandomIntInclusive(low, high) {
        const min = Math.ceil(low);
        const max = Math.floor(high);
        const actualValue = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log(actualValue);
        $(".actual").each( function() {
            $(this).val(actualValue);
        });
}

//Footer with Date, Time and Weather
//code assistance from www.phoenixnap.com, "How to Get Current Date & Time in Javascript", by Sofija Simic, posted 10/22/19
 //and Javascript30.com, Day 2 - Clock, by Wes Bos
 //and from Frontend Weekly, "How to convert 24hours format to 12 hours in Javascript," by Javascript Jeep, 6/29/19 (https://medium.com/front-end-weekly/how-to-convert-24-hours-format-to-12-hours-in-javascript-ca19dfd7419d#:~:text=Convert%20the%2024%20hours%20format%20time%20to%2012%20hours%20formatted%20time.&text=Now%20in%2Dorder%20to%20convert,12%20on%20the%20current%20time.&text=time%20%3D%2024%2C%20then%2024%25,change%20the%20time%20as%2012.)
const footerDate = document.getElementById("footerdate");
const footerTime = document.getElementById("footertime");

 function checkDate() {
   const now = new Date();

   console.log(now);

    const month = (now.getMonth()+1);
    const day = now.getDate();
    const year = now.getFullYear();
    const hour = now.getHours();
    const mins = now.getMinutes();

    const timeSuffix = hour <= 12 ? "AM" : "PM";
    const clockHour = (hour % 12) || 12;
    const digitalMins = (mins < 10) ? "0"+ mins : mins;

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
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
    } else {
        alert('geolocation not available');
    }    
}

//getCurrentPosition: successful return
function getPosSuccess(position) {
    var geoLat = position.coords.latitude.toFixed(2);
    var geoLng = position.coords.longitude.toFixed(2);
    console.log(geoLat, geoLng);
    getWeatherByLL(geoLat, geoLng);
}

//getCurrentPosition: error returned
function getPosErr (err) {
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
    const weatherId =  "app_id=9ad053bc&";
    const weatherKey = "app_key=b52a697539693cdc84826de1e371658c";
    //Concatenate API variables into a URLRequest
    let URLRequest = proxyURL + weatherAPI + String(geoLat) + "," + String(geoLng) + "?" + weatherId + weatherKey;
    console.log(URLRequest);

    $.ajax ({
        url: URLRequest,
        type: "GET",
        crossDomain: true,
        dataType: "json",
        success: function (parsedResponse, statusText, jqXhr) {

            let currentTemp = parsedResponse.temp_f.toFixed(0);
            document.getElementById("temp").innerHTML = currentTemp;
            let currentIcon = parsedResponse.wx_icon;
            document.getElementById("icon").innerHTML = `<img src="assets/weather_icons/${currentIcon}" alt="Weather Icon">`;
        },
        error: function (error) {
            console.log(error);
        }
    });
}
setInterval(checkLoc, 1800000);
checkLoc();

//default off position of sliders
$(".slider").prop('disabled', true);
//$(".silent").prop("animation-duration", "0s");

//on-off switches
$('input[type="checkbox"]').click(function() {
    const powerId = $(this).attr('id');
    console.log(powerId);
    //will return true or false value
    const powerIdValue = $(this).is(':checked');
    if ($(this).hasClass("wh-power")) {
         housePower(powerId, powerIdValue);
    } else if (powerId == "myonoffswitch15") {
        console.log("scheduler switch");
        schedulerToggle(powerIdValue);
    } else {
        let img = $(this).parent().parent().parent().next().find("img");
        let sliderInput = $(this).parent().parent().parent().next().find("input[type=range]");
        let sliderId = $(sliderInput).attr('id');
        let sliderName = $(sliderInput).attr('name');
        let hcMode = $(this).parent().parent().parent().next().find("select");
        let hcModeId = $(hcMode).attr('id');
        let hcTarget = $(this).parent().parent().parent().next().next().next().find("input[type=text");
        let hcTargetBtns = $(this).parent().parent().parent().next().next().next().find("button");
        if($(this).prop("checked") === false) {
            if($(this).hasClass("light-power" || "fan-power")) {
                $(img).css("background-color", "rgba(83,83,83,0.3)");  
                $(sliderInput).prop('disabled', true);
                console.log("false light and fan"); 
            } else if($(this).hasClass("fan-power")) {
                document.documentElement.style.setProperty(`--${sliderName}`, 0 + "s");
                $(sliderInput).val(0);
            } else {
                $(hcMode).prop('disabled', true);
                $(`#${hcModeId} option[value=""]`).prop('selected', true);
                $(hcTarget).prop('disabled', true);
                $(hcTargetBtns).prop('disabled', true);               
            }   
        } else if($(this).prop("checked") === true) {
            if($(this).hasClass("light-power")) {
                $(img).css({"background-color": "var(--clr-yellow)"}); 
                $(sliderInput).prop('disabled', false);
                sliderUpdate(sliderInput);
                console.log("true light");                 
            }  else if($(this).hasClass("hc-power")){
                $(hcMode).prop('disabled', false);
                $(hcTarget).prop('disabled', false);
                $(hcTargetBtns).prop('disabled', false);
                console.log("true hc");
            } else {
                $(img).css({"background-color": "var(--clr-white)"});
                $(sliderInput).prop('disabled', false);
                document.documentElement.style.setProperty(`--${sliderName}`, 0.5 + "s");
                $(sliderInput).val(4);
                speedControl(sliderInput);
                console.log("true fan"); 
            }
        } else {
            console.log("error");
        }
    }          
            
});

function housePower (powerId, powerIdValue) {
    if(powerId == 'myonoffswitch1') { 
        $(".light-power").each(function() {
        let whImg = $(this).parent().parent().parent().next().find("img");
        let whSliderInput = $(this).parent().parent().parent().next().find("input[type=range]");
        let whSliderName = $(whSliderInput).attr('name');
        console.log(powerIdValue);
            if(powerIdValue === false) {
                $(this).prop("checked", false);
                $(whImg).css("background-color", "rgba(83,83,83,0.3)"); 
                $(whSliderInput).prop('disabled', true);
                console.log("wh false light");
            } else if(powerIdValue === true) {
                $(this).prop("checked", true);
                $(whImg).css({"background-color": "var(--clr-yellow)"}); 
                $(whSliderInput).prop('disabled', false);
                sliderUpdate(whSliderInput);
                console.log("wh true light");  
           } else { 
                console.log("wh lights each() error");
           }
        }); 
    } else if(powerId == 'myonoffswitch2') {
        $(".hc-power").each(function() {
        let whHcMode = $(this).parent().parent().parent().next().find("select");
        let whHcModeId = $(whHcMode).attr('id');
        let whHcTarget = $(this).parent().parent().parent().next().next().next().find("input[type=text");
        let whHcTargetBtns = $(this).parent().parent().parent().next().next().next().find("button");
        
            if(powerIdValue === false) {
                $(this).prop("checked", false);
                $(whHcMode).prop('disabled', true);
                $(`#${whHcModeId} option[value="blank"]`).prop('selected', true);
                $(whHcTarget).attr('disabled', 'disabled');
                $(whHcTargetBtns).prop('disabled', true);
                $("#target1").val('');
                $("#target1").attr('disabled', 'disabled');
                $('#hvacmode5 option[value="blank"]').prop('selected', true);
                $("#hvacmode5").prop('disabled', true);
                console.log(whHcTarget);
                console.log("wh false hc");
            } else if(powerIdValue === true) {
                $(this).prop("checked", true);
                $(whHcMode).prop('disabled', false);
                $("#hvacmode5").prop('disabled', false);
                $(whHcTarget).removeAttr('disabled');
                $("#target1").removeAttr('disabled');
                $(whHcTargetBtns).prop('disabled', false);
                $("#target1").on('input', function () {
                    const tValue = $("#target1").val();
                    $(".target").each( function() {
                        $(this).val(tValue);
                    });
                });
                $("#hvacmode5").change( function() {
                    const modeValue = $("#hvacmode5").val();
                    $(".mode").each( function() {
                       $(this).val(modeValue);
                    });
                });
                console.log("wh true hc");
            } else { 
                console.log("wh hc each() error");
           }
        }); 
    } else {
        if(powerId == 'myonoffswitch3') {
            $(".fan-power").each(function() {
            let whImg = $(this).parent().parent().parent().next().find("img");
            let whSliderInput = $(this).parent().parent().parent().next().find("input[type=range]");
            let whSliderName = $(whSliderInput).attr('name');
                if(powerIdValue === false) {
                    $(this).prop("checked", false);
                    $(whImg).css("background-color", "rgba(83,83,83,0.3)");  
                    $(whSliderInput).prop('disabled', true);
                    document.documentElement.style.setProperty(`--${whSliderName}`, 0 + "s");
                    $(whSliderInput).val(0);
                    console.log("wh false fan");
                } else if(powerIdValue === true) {
                    $(this).prop("checked", true);
                    $(whImg).css({"background-color": "var(--clr-white)"});
                    $(whSliderInput).prop('disabled', false);
                    document.documentElement.style.setProperty(`--${whSliderName}`, 0.5 + "s");
                    $(whSliderInput).val(4);
                    speedControl(whSliderInput);
                    console.log("wh true fan"); 
                } else {
                    console.log("wh fan each() error");
                }
            });
        } else  {
           console.log("wh error"); 
        }
    }  
}

//code from "Add Button Number Incrementers" from *css-tricks, by Chris Coyier, 3/29/13, (https://css-tricks.com/number-increment-buttons/) and
//Javascript30.com,#11 HTML5 Video Player, by Wes Bos (https://javascript30.com)
$(".tempbtn").click(function(){
    const targetButton = $(this);
    const currentInput = $(targetButton).parent().find("input");
    var oldValue = currentInput.val();

    if ($(targetButton).hasClass("inc")) {
      let newValue = parseFloat(oldValue) + 1;
      $(targetButton).parent().find("input").val(newValue);
      
	} else {
        if (oldValue > 0 && $(targetButton).hasClass("dec")){
            let newValue = parseFloat(oldValue) - 1;
            $(targetButton).parent().find("input").val(newValue);
    } else {
       $(targetButton).parent().find("input").val(0); 
    }
  }
});


//progress bar code based on w3schools.com (https://www.w3schools.com/howto/howto_js_rangeslider.asp) and
//Javascript30.com, #3 Playing with CSS Variables and JS and #11 HTML5 Video Player, by Wes Bos (https://javascript30.com)
const slider = document.querySelectorAll('.slidecontainer1 input');

function sliderUpdate() {
   opacity = this.value / 10;
   document.documentElement.style.setProperty(`--${this.name}`, opacity);
}

slider.forEach(input => input.addEventListener('change', sliderUpdate));
slider.forEach(input => input.addEventListener('mousemove', sliderUpdate));

//rotation of fan icon based on speed setting - code based on "How to continuously rotate an image using CSS," 
//by flavio on 1/13/19 (https://flaviocopes.com/rotate-image/),and from 
//"An alternative to if/else and switch in JavaScript" by Fabien Huet (https://blog.wax-o.com/2015/05/an-alternative-to-if-else-and-switch-in-javascript/)
const speedSlide = document.querySelectorAll('.slidecontainer2 input');

function speedControl() {

    const speed = ( {
        4: 0.5,
        3: 1,
        2: 1.5,
        1: 2,
    }) [this.value] || 0;
  
   document.documentElement.style.setProperty(`--${this.name}`, speed + "s");
}

speedSlide.forEach(input => input.addEventListener('change', speedControl));
speedSlide.forEach(input => input.addEventListener('mousemove', speedControl));

//fan direction
$('.fan-direction').change(function() {
    var the_id = $(this).attr('id');
    console.log(the_id);
    var direction = "#"+the_id+" option:selected";
    console.log($(direction).val());
    const animDirection = ($(direction).val() === "clockwise") ? "normal" : "reverse";
    console.log(animDirection);
    document.documentElement.style.setProperty(`--${this.name}`, animDirection);
});

//jquery timepicker for Scheduler, code from Nirav Joshi, 12/4/19 posted on stackoverflow (https://stackoverflow.com/questions/59169315/datetimepicker-not-working-with-bootstrap-4)
//and tempusdominus documentation (https://tempusdominus.github.io/bootstrap-4/Usage/)
$(function() {
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
    $('#room-select').change(function() {
        $("#speed3").prop('disabled', false);
        $("#brightness7").prop('disabled', false);
        switch ($(this).val()) { 
            case "whole-house":
                $("#light-overhead").addClass("d-none");
                $("#light-lamp").addClass("d-none");
                $("#light-outside").addClass("d-none");
                console.log("whole-house");
            break;

            case "kitchen":
                $("#lighting").addClass("d-none");
                $("#light-lamp").addClass("d-none");
                $("#light-outside").addClass("d-none");
                $("#ceiling-fan").addClass("d-none");
                console.log("kitchen");
            break;

            case "great-room":
                $("#lighting").addClass("d-none");
                $("#light-lamp").addClass("d-none");
                $("#light-outside").addClass("d-none");
                console.log("great-room");
            break;

            case "master-bedroom":
                $("#lighting").addClass("d-none");
                $("#light-outside").addClass("d-none");
                console.log("master-br");
            break;

            case "garage":
                $("#lighting").addClass("d-none");
                $("#light-lamp").addClass("d-none");
                $("#ceiling-fan").addClass("d-none");
                $("#heating-cooling").addClass("d-none");
                console.log("garage");
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
    if(powerIdValue === true) {
        if($("#device-select").val() == "lighting") {
           $(".bright").removeClass("d-none"); 
           console.log("scheduler wh lighting");
        }
        if($("#device-select").val() == "light-overhead") {
           $(".bright").removeClass("d-none"); 
           console.log("scheduler overhead");
        }
        if($("#device-select").val() == "light-lamp") {
            $(".bright").removeClass("d-none");
            $("#kitchen").addClass("d-none");
            $("#great-room").addClass("d-none");
            $("#garage").addClass("d-none");
        }
        if($("#device-select").val() == "light-outside") {
            $(".bright").removeClass("d-none");
            $("#kitchen").addClass("d-none");
            $("#great-room").addClass("d-none");
            $("#master-br").addClass("d-none");
        }
        if($("#device-select").val() == "heating-cooling") {
            $(".heat-cool").removeClass("d-none");
            $("#garage").addClass("d-none");
        }
        if($("#device-select").val() == "ceiling-fan") {
            $(".cfan").removeClass("d-none");
            $("#kitchen").addClass("d-none");
            $("#garage").addClass("d-none");
    } else {
            console.log(this);
        }
    }
}

//parts of following code based on Javascript30.com, #15 Local Storage, by Wes Bos (https://javascript30.com)
let eventItems = {};
let valueOnlyItems = JSON.parse(localStorage.getItem("valueOnlyItems")) || {};

$("#scheduled-items").submit(function( event ) { 
    event.preventDefault();
    eventItems = $(this).serializeArray();
    //code from Adam Merrifield, 6/21/14, stackOverflow (https://stackoverflow.com/questions/24338177/jquery-serializearray-is-not-getting-the-value-of-the-checked-checkbox)
    $('#scheduled-items input[type="checkbox"]:not(:checked)').each(function() {
        if($.inArray(this.name, eventItems) === -1) {
            eventItems.push({name: this.name, value: "off"});
        }
    });
    valueOnlyItems = eventItems.filter(eventItem => eventItem.value != "");
     $.each( valueOnlyItems, function (i, name) {
         console.log(this.name);
        switch (this.name) { 
            case "start-date":
               this.name = "Start Date/Time"; 
               console.log(this.name);
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
                this.name = "Heating Cooling Mode"; 
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
    console.log(valueOnlyItems);
    populateList(valueOnlyItems);
    localStorage.setItem("valueOnlyItems", JSON.stringify(valueOnlyItems));
    this.reset();
    $("#speed3").prop('disabled', false);
    $("#speed3").removeClass("d-none");
    $("#direction3").removeClass("d-none");
    $("#brightness7").prop('disabled', false);
    $("#lighting").removeClass("d-none");
    $("#light-overhead").removeClass("d-none");
    $("#light-lamp").removeClass("d-none");
    $("#heating-cooling").removeClass("d-none");
    $("#ceiling-fan").removeClass("d-none");
    $(".heat-cool").addClass("d-none");
    $(".bright").addClass("d-none");
    $(".cfan").addClass("d-none");
    console.log("completed reset");

});

    
function populateList(valueOnlyItems) {
    $.each( valueOnlyItems, function( i, valueOnlyItem ) {
        $("#sched-list").append(`
            <li>
                ${valueOnlyItem.name}: ${valueOnlyItem.value}
            </li>
            `);
    }).join('');
    
    $('#sched-list li').each(function() {
        if($(this).is(':contains("light-overhead")') || $(this).is(':contains("light-lamp")') || $(this).is(':contains("light-outside")')) {
            $('#sched-list li').each(function() {
                if($(this).is(':contains("fanspeed3")') || $(this).is(':contains("direction3")') || $(this).is(':contains("heating-cooling-mode")')) {
                    $(this).addClass("d-none");
                }
            });   
        } else {
            return;
        }
    });

    $('#sched-list li').each(function() {
        if($(this).is(':contains("heating-cooling")')) {
            $('#sched-list li').each(function() {
                if($(this).is(':contains("fanspeed3")')|| $(this).is(':contains("opacity7")') || $(this).is(':contains("direction3")')) {
                    $(this).addClass("d-none");
                }
            });   
        } else {
            return;
        }
    });

    $('#sched-list li').each(function() {
        if($(this).is(':contains("ceiling-fan")')) {
            $('#sched-list li').each(function() {
                if($(this).is(':contains("opacity7")') || $(this).is(':contains("heating-cooling-mode")')) {
                    $(this).addClass("d-none");
                }
            });   
        } else {
            return;
        }
    });
     $('#sched-list').append('<hr>');
}  


//from Basj on stackOverflow (https://stackoverflow.com/questions/61085148/auto-save-all-inputs-value-to-localstorage-and-restore-them-on-page-reload)
document.querySelectorAll('#control-form input:not([type="submit"])').forEach(elt => { elt.value = localStorage.getItem(elt.name); elt.addEventListener("change", e => { localStorage.setItem(e.target.name, e.target.value); }); });