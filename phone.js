$(document).ready(function() { // do this when the document is loaded
	$("#dialer").show();
	$("#contacts").hide();
  $("#add_contact").hide();
});

$("#tab_1_button").click(function() { // when "tab_1" is clicked
	$("#dialer").show();
  $("#contacts").hide();
  $("#add_contact").hide();
});

$("#tab_2_button").click(function() { // when "tab_2" is clicked
  $("#contacts").show();
  $("#dialer").hide();
  $("#add_contact").hide();
});

$("#tab_3_button").click(function() { // when "tab_3" is clicked
  $("#add_contact").show();
	$("#dialer").hide();
  $("#contacts").hide();
});

$("#one").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '1';
});

$("#two").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '2';
});

$("#three").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '3';
});

$("#four").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '4';
});

$("#five").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '5';
});

$("#six").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '6';
});

$("#seven").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '7';
});

$("#eight").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '8';
});

$("#nine").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '9';
});

$("#zero").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '0';
});

$("#star").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '*';
});

$("#pound").click(function() {
  var text = document.getElementById('inputText');
	inputText.value += '#';
});
