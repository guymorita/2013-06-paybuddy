$(function(){

  var formHandler = function(event){
    var ccReg = /\b\d{13,16}\b/;
    var monthReg = /\b[a-z]{3}\b/;
    var ccvReg = /\b\d{3,4}\b/;
    var alerts = [];
      if (!ccReg.test(document.ccnForm.num.value)){
        alerts.push("Please enter in a 13-16 digit credit card number");
      }
      if (!monthReg.test(document.ccnForm.month.value)){
        alerts.push("Wrong month yo");
      }
      if (!ccvReg.test(document.ccnForm.ccv.value)){
        alerts.push("Please put in a valid CCV");
      }
      if (alerts !== []){
        alert(alerts.join("\n"));
      }
    event['preventDefault'](); // prevents the page from reloading
  };

  $("form")['submit'](formHandler); // register a callback

});
