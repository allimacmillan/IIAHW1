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
