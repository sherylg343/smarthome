//code from "Add Button Number Incrementers" from *css-tricks, by Chris Coyier, 3/29/13, (https://css-tricks.com/number-increment-buttons/)
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