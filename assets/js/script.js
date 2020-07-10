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

/*code from "Add Button Number Incrementers" from *css-tricks, by Chris Coyier, 3/29/13, (https://css-tricks.com/number-increment-buttons/)
$(".tempbutton").on("click", function() {

  var $button = $(this);
  var oldValue = $tempbutton.parent().find("input").val();

  if ($tempbutton.text() == "+") {
	  var newVal = parseFloat(oldValue) + 1;
	} else {
   // Don't allow decrementing below zero
    if (oldValue > 0) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 0;
   }
  }

  $tempbutton.parent().find("input").val(newVal);

});


//progress bar based on only 1
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

//Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

//code from solodev: "Adding a DateTime Picker to your Forms", by Matthieu McClintock, (https://www.solodev.com/blog/web-design/adding-a-datetime-picker-to-your-forms.stml)
  $(function() {
    $('#startdate').datetimepicker ({
        format: 'DD/MM/YYYY',
        icons: {
            previous: "fas fa-chevron-left",
            next: "fas fa-chevron-right",
        },
    });
    $('.input-group-append').click(function(){
        $(".input-group-text").trigger('focus');
    });  
 });

 $(function() {
    $('#enddate').datetimepicker ({
        format: 'DD/MM/YYYY',
        icons: {
            previous: "fas fa-chevron-left",
            next: "fas fa-chevron-right",
        },
    });
    $(".input-group-append").click(function(){
        $(".input-group-text").trigger('focus');
    });  
 });
 */
