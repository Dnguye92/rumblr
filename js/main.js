const addPostInput = document.querySelector('input.addPostInput');
const addTextArea = document.querySelector('textarea.addPostInput');
const addPostButton = document.querySelector('button.addPostButton');

addPostButton.addEventListener('click', () => {
	let body = document.getElementsByTagName('body')[0];

	let postBody = document.createElement('div');
	postBody.className = 'postBody';

	let header = document.createElement('h1');

	let p = document.createElement('p');

	header.textContent = addPostInput.value;
	p.className = 'bodyContent';
	p.textContent = addTextArea.value;
	postBody.appendChild(header);
	postBody.appendChild(p);
	body.appendChild(postBody);

	addPostInput.value = '';
	addTextArea.value = '';
});