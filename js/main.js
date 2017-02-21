const addPostInput = document.querySelector('input.addPostInput');
const addTextArea = document.querySelector('textarea.addPostInput');
const addPostButton = document.querySelector('button.addPostButton');

addPostButton.addEventListener('click', () => {
	let div = document.getElementsByClassName('fullPost')[0];
	let header = document.createElement('h1');
	let p = document.createElement('p');

	header.textContent = addPostInput.value;
	p.className = 'bodyContent';
	p.textContent = addTextArea.value;
	div.appendChild(header);
	div.appendChild(p);
	addPostInput.value = '';
	addTextArea.value = '';
});