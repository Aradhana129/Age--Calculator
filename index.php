<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <title>AGE CALCULATOR</title>


</head>
<body>
  <div class="container">
    <div class="input_box">
    <h1 class="text-center">Age Calculator</h1>
    <div class="text-center">
    <label for="birth_day">Date of birth: <input type="date" id="date_of_birth"/></label>
    <label for="give_date">Given date: <input type="date" id="given_date"/></label>


</div>
<button onclick="calculatorAge()">Calculate</button>
</div>

<h2 class="text-center" style="display:none;" id="msg">Your Age</h2>
<div id="output_box" style="display: none;">
  <span id="years"> - </span>
  <span id="months"> - </span>
  <span id="days"> - </span>
  <!-- <span id="minute"></span> -->
  <!-- <span id="second"></span> -->
</div>
</div>

<script src="script.js" charset="utf-8"></script>
</body>
</html>
