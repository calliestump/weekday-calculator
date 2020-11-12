import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import dayOfWeek from './method.js';

$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    let input = $('#date').val();
    console.log(input);
    let dateInput = new Date(input);
    let weekDay = dateInput.getDay();
    console.log(weekDay);
    $("p").text(dayOfWeek(weekDay));
  });``
});
