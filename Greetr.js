(function(global,$) {

  var Greetr = function (firstName,lastName,language) {
    return new Greetr.init(firstName,lastName,language);
  }

  Greetr.prototype = {

    fullName : function () {
      return this.firstName + ' ' +this.lastName;
    },

    validateSupportedLangs : function () {
      if(supportedLangs.indexOf(this.language) === -1){
        throw "Invalid language";
      }
    },

    greeting : function () {
      return greetings[this.language] + ' ' + this.firstName;
    },

    formalGreeting : function () {
      return formalGreetings[this.language] + ',' + this.fullName();
    },

    greet : function (formal) {
      var msg;
      // if formal is undefined or null it will be coerced to false
      if(formal){
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if(console){
        console.log(msg);
      }

      //this refers to the calling object and makes the mthod chainable
      return this;
    },

    log : function () {
      if(console){
        console.log(logMessages[this.language] + ':' +this.fullName());
      }
      return this;
    },

    setLang : function (lang) {
      this.language = lang;
      this.validateSupportedLangs();
      return this;
    },

    HtmlGreeting : function (selector,formal) {
      if(!$){
        throw "JQuery is not loaded";
      }
      if (!selector) {
        throw "Missing Selector";
      }
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }
      $(selector).html(msg);
      return this;
    }

  };

  var supportedLangs = ['en','es'];

  var greetings = {
    en : 'Hello',
    es : 'Hola'
  };

  var formalGreetings = {
    en : 'Greetings',
    es : 'Saludos'
  };

  var logMessages = {
    en : 'Logged in',
    es : 'Incio sesion'
  };


  Greetr.init = function (firstName,lastName,language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
  }

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.G$ = Greetr;


}(window,jQuery));
