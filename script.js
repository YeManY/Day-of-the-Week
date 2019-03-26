var w = Math.floor(7 * Math.random());
$(".week").change(function(){
var week = $(this).children("option:selected").val();    
if (week === "monday"){
alert("Ugh, I hate mondays.");
 }
if (week === "tuesday"){
alert("It's one day closer to Friday at least.");
 }
if (week === "wednesday"){
alert("Nice, halfway through the week.");
 }
if (week === "thursday"){
alert("The day before Friday! Woop Woop!");
 }
if (week === "friday"){
alert("TGIF!");
 }
if (week === "saturday"){
alert("Best day of the week by far!");
 }
if (week === "sunday"){
alert("Monday is tomorrow....");
 }
});





