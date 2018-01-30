var g = G$('john','doe');
g.greet().greet(true);

$('#login').click(function () {
  var loginGrtr = G$('John','Doe');
  $('#logindiv').hide();
  loginGrtr.setLang($('#lang').val()).HtmlGreeting('#greeting',true).log();
})
