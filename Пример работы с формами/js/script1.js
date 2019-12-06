'use strict'
let input1 = '',
input2 = '',
email1 = '',
date1 = '',
number1= '',
select1 = '',
textarea1 = '',
whyChose = '',
willRecommend = '';
function subm(){
	input1 = document.getElementById('input1').value;
	input2 = document.getElementById('input2').value;
	email1 = document.getElementById('email1').value;
	date1 = document.getElementById('date1').value;
	number1 = document.getElementById('number1').value;
	select1 = document.getElementById('select1').value;
	textarea1 = document.getElementById('textarea1').value;
	whyChose = document.querySelectorAll("input[name='whyChose']");
	for(let i of whyChose){
		if(i.checked){
			whyChose = i.value;
			break;
		}
	}
	for (let j of document.querySelectorAll('input[name="recommend"]')){
		if(j.checked){
			willRecommend = j.value;
		}
	}
	document.body.innerHTML = '<link rel="stylesheet" href="css/style.css"><div class="modal"><div class="inModal">' + '<p>Имя - ' + input1 + '</p>' + '<p>Телефон - ' + input2 + '</p>' +'<p>Email - ' + email1 + '</p>' +'<p>Дата посещения - ' + date1 + '</p>' + '<input type="button" class="modalButton" value="Далее" onclick="subm2()"></div></div>';
}
function subm2(){
	document.body.innerHTML = '<link rel="stylesheet" href="css/style.css"><div class="modal"><div class="inModal">' + '<p> Возраст - ' + number1 + '</p>' + '<p>Любимая кухня - ' + select1 + '</p>' + '<p>Пожелания в меню - ' + textarea1 + '</p>' + '<input type="button" class="modalButton" value="Далее" onclick="subm3()"></div></div>';
}
function subm3(){
	document.body.innerHTML = '<link rel="stylesheet" href="css/style.css"><div class="modal"><div class="inModal">' + '<p> Почему выбрали - ' + whyChose + '</p>' + '<p>Порекомендует ли - ' + willRecommend + '</p>' + '<input type="button" class="modalButton" value="Далее" onclick="subm4()"></div></div>';
}
function subm4(){
	document.location.href = 'index2.html';
}