//declare constants for textarea, button, and input
const addPostInput = document.querySelector('input.addPostInput');
const addTextArea = document.querySelector('textarea.addPostInput');
const addPostButton = document.querySelector('button.addPostButton');

//event listener for posting functionality
addPostButton.addEventListener('click', () => {
let body = document.getElementsByTagName('body')[0];

let postBody = document.createElement('div');
postBody.className = 'postBody';

let header = document.createElement('h1');
header.className = 'postHeader';
header.textContent = addPostInput.value;

let p = document.createElement('p');
p.className = 'bodyContent';
p.textContent = addTextArea.value;

//create div for buttons
let buttonDiv = document.createElement('div');
buttonDiv.className = 'buttonDiv'

let up = document.createElement('button');
up.className = 'up';
up.textContent = 'Up';

let down = document.createElement('button');
down.className = 'down';
down.textContent = 'Down';

let remove = document.createElement('button');
remove.className = 'remove';
remove.textContent = 'Remove';

let showHide = document.createElement('button');
showHide.className = 'showHide';
showHide.textContent = 'Hide';

//append the header and body of textarea to the body within a div
postBody.appendChild(header);
postBody.appendChild(p);

//append all buttons to the buttonDiv
buttonDiv.appendChild(up);
buttonDiv.appendChild(down);
buttonDiv.appendChild(remove);
buttonDiv.appendChild(showHide);

body.appendChild(postBody);
body.appendChild(buttonDiv)

addPostInput.value = '';
addTextArea.value = '';

//create hide/show event listener for toggleButton


});

