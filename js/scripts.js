//business logic
function Ticket (time, movie, age){
  this.customerTime = time;
  this.customerMovie = movie;
  this.customerAge = age;
}

Ticket.prototype.ticketPrice = function () {

var price = 0;

  if (this.customerTime === "morning") {
    return price += 2;
   }
  else if (this.customerTime === "afternoon"){
    return price += 5;
  }
  else{
    return price += 10;
  }}


//interface logic
$(document).ready(function() {
  $(".movieTickets").submit(function(event) {

  event.preventDefault ();

var inputTime = $("#timeList").val();
var inputMovie = $("#movieList").val();
var inputAge= $ ("#ageList").val();
var Results = new Ticket (inputTime, inputMovie, inputAge);
// console.log(Results);


$("#moviePrice").show();
$(".show-movie").text(inputMovie);
$(".show-time").text(inputTime);
$(".show-price").text(Results.ticketPrice());

  });
});
