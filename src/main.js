import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    let input = $('#date').val();
    console.log(input);
    let dateInput = new Date(input);
    let weekday = dateInput.getDay();
    console.log(weekday);
    $("p").text();
  });
});
