"use strict"
;(function(){

	function Validator(form){
		this.form = $(form);
	}

	Validator.prototype.init = function(configure, class, messages){
		if (messages === undefined) {
			messages = {};
		}
	}
	
	Validator.prototype.checkLogin = function(){}
	Validator.prototype.checkPasswd = function(){}
	Validator.prototype.checkEmail = function(){}
	Validator.prototype.checkTel = function(){}
	Validator.prototype.checkText = function(){}

	Validator.prototype.checkEmpty = function(){}
	Validator.prototype.checkLength = function(){}

	function make(form){
		var tmp = new Validator(form);
		return tmp;
	}

	window._ = make;

	
})();