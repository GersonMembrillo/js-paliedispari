/*
PALINDROMA
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

const btnText = document.querySelector('.button-text');
btnText.addEventListener('click', palindrome);
const firstCard = document.getElementById('first-card');

function palindrome(str) {
	const string = document.getElementById('text').value;
	let arrValue = string.split('');
	let reveArrVal = arrValue.reverse();
	let revString = reveArrVal.join('');

	if (string == revString) {
		firstCard.innerHTML += `<h1>La tua parola è un palindromo, yay!</h1>`;
	} else {
		firstCard.innerHTML += `<h1>Non è un palindromo</h1>`;
	}
}
