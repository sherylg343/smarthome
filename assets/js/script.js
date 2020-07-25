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

    const today = `${month}/${day}/${year}`;
    const time = `${clockHour}:${mins} ${timeSuffix}`;

    footerDate.innerHTML = today;
    footerTime.innerHTML = time;
 }

setInterval(checkDate, 60000);

checkDate();

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
//Scheduler 
////activate appropriate selections
let scheduler = document.getElementById("scheduler");

function schedulerDisplay() {
    $('#device-select').change(function() {
        $(".heat-cool").removeClass("d-none");
        $(".cfan").removeClass("d-none");
        $(".bright").removeClass("d-none");
        switch ($(this).val()) { 
            case "light-overhead":
                $(".heat-cool").addClass("d-none");
                $(".cfan").addClass("d-none");
            break;

            case "light-lamp":
                $(".heat-cool").addClass("d-none");
                $(".cfan").addClass("d-none");
                $("#kitchen").addClass("d-none");
                $("#great-room").addClass("d-none");
                $("#garage").addClass("d-none");
            break;

            case "light-outside":
                $(".heat-cool").addClass("d-none");
                $(".cfan").addClass("d-none");
                $("#kitchen").addClass("d-none");
                $("#great-room").addClass("d-none");
                $("#master-br").addClass("d-none");
            break;

            case "heating-cooling":
                $(".bright").addClass("d-none");
                $(".cfan").addClass("d-none");
                $("#garage").addClass("d-none");
            break;

            case "ceiling-fan":
                $(".bright").addClass("d-none");
                $(".heat-cool").addClass("d-none");
                $("#kitchen").addClass("d-none");
                $("#garage").addClass("d-none");
            break;
    
            case "":
                return;
        }
    });
    
    $('input:checkbox[id^="myonoffswitch15"]').change(function() {
        if ($("input[type=checkbox]").prop(":checked")) {
            console.log(this);
            return;
        } else {
            $(".properties").addClass("d-none");
            $(".bright").addClass("d-none");
            $(".heat-cool").addClass("d-none");
            $(".cfan").addClass("d-none");
        }
    });
}

scheduler.addEventListener("change", schedulerDisplay);
scheduler.addEventListener("click", schedulerDisplay);
 

//gather labels
const labelItemsContainer = document.querySelectorAll(".sched-table label");

let eventItems = {};
let valueOnlyItems = JSON.parse(localStorage.getItem("valueOnlyItems")) || {};

$("#scheduled-items").submit(function( event ) { 
    event.preventDefault();
    eventItems = $(this).serializeArray();
    //console.log(valueOnlyItems);
    valueOnlyItems = eventItems.filter(eventItem => eventItem.value != "");
    console.log(valueOnlyItems);
    populateList(valueOnlyItems);
    localStorage.setItem("valueOnlyItems", JSON.stringify(valueOnlyItems));
    this.reset();
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
                if($(this).is(':contains("ceiling-fan-speed")')) {
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
                if($(this).is(':contains("ceiling-fan-speed")')|| $(this).is(':contains("brightness")')) {
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
                if($(this).is(':contains("brightness")')) {
                    $(this).addClass("d-none");
                }
            });   
        } else {
            return;
        }
    });
}


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