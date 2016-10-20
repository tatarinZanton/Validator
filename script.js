'use strict';
$(document).ready(function(){
	_("#auth").init({

		configure:{
					"login" : ".checkLog",
					"passwd": "[name=passwd]"	
					},
		confLength:{
					"default" : [4, 12],
					"passwd"  : [8, 32],
					// "asdfdsdf": [3,5]
		},
		classes:{"error"  : "errValid",
				 "success": "sucValid"},

		messages:{errEmpty : "Поле не заполнено",
				  errLengthMax: "Длинна поля больше максимальной",
				  errLengthMin: "Длинна поля меньше минимальной",
				  errLogin : "Ошибка логина",
				  errPasswd : "Ошибка пароля",
				  errEmail : "Ошибка email",
				  errTel : "Ошибка телефона",
				  errText : "Ошибка текста",
				}
	});

})


