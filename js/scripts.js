//business logic
function Ticket (time, movie, age){
  this.customerTime = time;
  this.customerMovie = movie;
  this.customerAge = age;
}

Ticket.prototype.ticketPrice = function () {
  var price = 5;

  if (this.customerTime === "morning") {
    price += 0;
  }
  else if (this.customerTime === "afternoon"){
    price += 5;
  }
  else if (this.customerTime === "night"){
    price += 10;
  }
  return price;
}








//interface logic
$(document).ready(function() {
  $(".movieTickets").submit(function(event) {
    $("#moviePrice").show();
  event.preventDefault ();

var inputtedTime = $("#timeList").val();
var inputtedMovie = $("#movieList").val();
var inputtedAge= $ ("#ageList").val();
var Results = new Ticket (inputtedTime, inputtedMovie, inputtedAge);


  });
});
