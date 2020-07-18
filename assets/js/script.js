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
    let targetButton = $(this);
    var oldValue = currentInput.val();

    if ($(targetButton).hasClass("inc")) {
      let newValue = parseFloat(oldValue) + 1;
      $(targetButton).parent().find("input").val(newValue);
      
	} else {
        if (oldValue > 0 && $(targetButton).hasClass("dec")){
            let newValue = parseFloat(oldValue) - 1;
            $(targetButton).parent().find("input").val(newValue);
    } else
       $(targetButton).parent().find("input").val(0); 
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
}; 

speedSlide.forEach(input => input.addEventListener('change', speedControl));
speedSlide.forEach(input => input.addEventListener('mousemove', speedControl));

//fan direction
$('.fan-direction').change(function() {
    var the_id = $(this).attr('id');
    console.log(the_id);
    var direction = "#"+the_id+" option:selected"
    console.log($(direction).val());
    const animDirection = (direction === "clockwise") ? "normal" : "reverse";
    console.log(animDirection);
    document.documentElement.style.setProperty(`--${this.name}`, animDirection);
});

//Weather in Footer
//code provided by "Create a JavaScript Weather App with Location Data Part 1", by Bryan McIntosh, 
//published on 1/15/19 by Spatial Times (https://www.spatialtimes.com/2019/01/Create-a-JavaScript-Weather-App-with-Location-Data-Part-1/)

//check if gelocation API exists
/*if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosSuccess, getPosErr);
} else {
    //alert('geolocation not available')
    let zipEntry = prompt("Please enter zipcode for weather data", "US Zip Code Only");
    if (zipEntry == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
//        function fn_getWeatherByZip(zipEntry);
}
//getCurrentPosition: successful return
function getPosSuccess(pos) {
    var geoLat = pos.coords.latitude.toFixed(2);
    var geoLng = pos.coords.longitude.toFixed(2);
    var geoAcc = pos.coords.accuracy.toFixed(1);
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
 

//App ID
//9ad053bc
//Key b52a697539693cdc84826de1e371658c

//https://api.weatherunlocked.com/api/current/51.50,-0.12?app_id=9ad053bc&app_key=b52a697539693cdc84826de1e371658c

function fn_getWeatherByLL(geoLat, geoLng) {
    //API Variables
    const weatherAPI = "https://api.weatherunlocked.com/api/current/";
    const weatherId =  "app_id=9ad053bc&";
    const weatherKey = "app_key=b52a697539693cdc84826de1e371658c";
    //Concatenate API variables into a URLRequest
    let URLRequest = weatherAPI + String(geoLat) + "," + String(geoLng) + weatherId + weatherKey;
    //Make JQuery.getJSON request
    $.getJSON(URLRequest)
    //success promise
    .done(function(data) {
        let currentTemp = data.temp_f;
        let currentIcon = data.wx_icon;
        let weatherIcon = ( `<img src="assets/images/${currentIcon}" alt="Weather Icon">` );
        $(currentTemp).appendTo("#temp");
        $(weatherIcon).appendTo("#icon");
    })
    //error promise
    .fail(function() {
        alert('Weather not available');
        }
    );
}

/*function fn_getWeatherByZip(zipEntry) {
    //API Variables
    const weatherAPIz = "https://api.weatherunlocked.com/api/current/";
    const weatherIdz =  "app_id=9ad053bc&";              
    const weatherKeyz = "app_key=b52a697539693cdc84826de1e371658c";
    //Concatenate API variables into a URLRequest
    let URLRequest = weatherAPIz + "us." zipEntry + weatherIdz + weatherKeyz;
    //Make JQuery.getJSON request
    $.getJSON(URLRequest)
    //success promise
    .done(function(data) {                                                              
        let currentTemp = data.temp_f;
        let currentIcon = data.wx_icon;
        let weatherIcon = ( `<img src="assets/images/${currentIcon}" alt="Weather Icon">` );
        $(currentTemp).appendTo("#temp");
        $(weatherIcon).appendTo("#icon");
    })
    //error promise
    .fail(function() {
        alert('Weather not available');
        }
    );
}

}
/*
$.ajax({
        url: "https://api.weatherunlocked.com/api/current/51.5,-0.1?app_id={APP_ID}&app_key={APP_KEY}",
        type: "GET",
        success: function (parsedResponse, statusText, jqXhr) {

            console.log(parsedResponse);

        },
        error: function (error) {

            console.log(error);
        }
    });
    var $newdiv1 = $( "<div id='object1'></div>" ),
*/