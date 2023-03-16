const buttonText = document.querySelector('button-text');
buttonText.addEventListener('click', palindromeFun);
const firstCard = document.getElementbyID('first-card');

function palindromeFun(str) {
	let string = document.querySelector('input').value;
	let value = palindromeFun(string);

	let arrValue = string.split('');
	let reveArrVal = arrValue.reverse('');
	let revString = reveArrVal.join('');

	if (string == revString) {
		firstCard.innerHTML += `<h1>La tua parola è un palindromo, yay!</h1>`;
	} else {
		firstCard.innerHTML += `<h1>Non è un palindromo</h1>`;
	}
}

const btnGame = document.querySelector('.button-game');
btnEmail.addEventListener('click', checkGame);
