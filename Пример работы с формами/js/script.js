"use strict"
let modalWindow = document.createElement('div');
let inModal = document.createElement('div');
let btn = document.createElement('input');
btn.setAttribute('type', 'button');
btn.setAttribute('onclick', 'rmvmdl()');
btn.setAttribute('class', 'modalButton');
btn.value = 'Ясно';
inModal.id = 'inModal';
inModal.setAttribute('class', 'inModal');
modalWindow.id = 'modalWindow';
modalWindow.setAttribute('class', 'modal');
modalWindow.append(inModal);
let login1 = 'admin';
let passw1 = "admin";
function submit1(){
	document.getElementById('loginBlock').style.border = 'none'
	document.getElementById('passwordBlock').style.border = 'none'
	if(document.forms[0].login.value!=login1 || document.forms[0].password.value!=passw1){
		if(document.forms[0].password.value!=passw1){
		document.forms[0].querySelector("div#passwordBlock").style.border = '2px solid #f00';
		inModal.innerHTML = 'Неверный пароль';
		document.body.append(modalWindow);
		inModal.append(btn);
	}
		if (document.forms[0].login.value!=login1){
		document.forms[0].querySelector("div#loginBlock").style.border = "2px solid #f00";
		inModal.innerHTML = 'Неверный логин';
		document.body.append(modalWindow);
		inModal.append(btn);
	}
	if(document.forms[0].login.value!=login1 && document.forms[0].password.value!=passw1){
		inModal.innerHTML = 'Оба поля неверны';
		document.body.append(modalWindow);
		inModal.append(btn);
	}
	}
	if(document.forms[0].login.value==login1 && document.forms[0].password.value==passw1){
		for(let i=0;document.forms[0].length!=0;i++){
			document.forms[0].children[0].remove();
		}
		document.body.setAttribute('class', 'Tsari');
		document.querySelector('h2#zagol').innerHTML ='Анкета';
		document.querySelector('h2#zagol').style.color ='white';
		let p = document.createElement('p');
		p.innerHTML = 'Вы царь?'
		document.forms[0].append(p);
		let label = document.createElement('label');
		let checkbox = document.createElement('input');
		checkbox.setAttribute('type', 'checkbox');
		checkbox.id = 'check1';
		label.innerHTML = 'Люблю спать';
		label.append(checkbox);
		document.forms[0].append(label);
		// ============================
		let label2 = document.createElement('label');
		let checkbox2 = document.createElement('input');
		checkbox2.setAttribute('type', 'checkbox');
		checkbox2.id = 'check2';
		label2.innerHTML = 'Люблю кушать';
		label2.append(checkbox2);
		document.forms[0].append(label2);
		let buttonSubmit = document.createElement('input');
		let submitDiv = document.createElement('div');
		buttonSubmit.setAttribute('type', 'button');
		buttonSubmit.onclick = anketa;
		buttonSubmit.value='Провериться на царя';
		submitDiv.append(buttonSubmit);
		document.forms[0].append(submitDiv);
	}
}
function anketa(){
	if(document.forms[0].querySelectorAll('input[type="checkbox"]')[1].checked && document.forms[0].querySelector('input[type="checkbox"]').checked){
		inModal.innerHTML = 'Да, вы царь.'+"\n" + 'Удачи с этим';
		document.body.append(modalWindow);
		inModal.append(btn);
	}
	else{
	if(document.forms[0].querySelector('input[type="checkbox"]').checked){
		inModal.innerHTML = 'Вы царь на 1 вариант ответа';
		document.body.append(modalWindow);
		inModal.append(btn);
	}
	else if(document.forms[0].querySelectorAll('input[type="checkbox"]')[1].checked){
		inModal.innerHTML = 'Вы царь на 2 вариант ответа';
		document.body.append(modalWindow);
		inModal.append(btn);
	}
	}
	if(document.forms[0].querySelectorAll('input[type="checkbox"]')[1].checked==false && document.forms[0].querySelector('input[type="checkbox"]').checked == false){
		inModal.innerHTML = 'Вы точно не царь';
		document.body.append(modalWindow);
		inModal.append(btn);
	}
}
function rmvmdl(){
	document.querySelector('div#modalWindow').remove();
	if(document.body.hasAttribute('class')){
		document.location.href = 'index2.html';
	}
}