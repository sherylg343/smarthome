//code from "Add Button Number Incrementers" from *css-tricks, by Chris Coyier, 3/29/13, (https://css-tricks.com/number-increment-buttons/)
//$(".tempbutton").on("click", function() {

//  var $button = $(this);
//  var oldValue = $tempbutton.parent().find("input").val();

//  if ($tempbutton.text() == "+") {
//	  var newVal = parseFloat(oldValue) + 1;
//	} else {
   // Don't allow decrementing below zero
//    if (oldValue > 0) {
//      var newVal = parseFloat(oldValue) - 1;
//    } else {
//      newVal = 0;
//    }
//  }

//  $tempbutton.parent().find("input").val(newVal);

//});


//progress bar based on only 1
//var slider = document.getElementById("myRange");
//var output = document.getElementById("demo");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
//slider.oninput = function() {
//  output.innerHTML = this.value;
//}

//code from solodev: "Adding a DateTime Picker to your Forms", by Matthieu McClintock, (https://www.solodev.com/blog/web-design/adding-a-datetime-picker-to-your-forms.stml)
  $(function() {
    $('#startdate').datetimepicker({
        format: 'DD/MM/YYYY',
        icons: {
            previous: "fas fa-chevron-left",
            next: "fas fa-chevron-right",
        },
    });
    $('.input-group-append').click(function(){
        $('.form-control').trigger('focus');
    });  
 });
