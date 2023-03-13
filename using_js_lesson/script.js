const body = document.querySelector('body');

const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';
body.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = 'blue';
body.append(blueH3);

const div = document.createElement('div');
const h1 = document.createElement('h1');
const p = document.createElement('p');
h1.textContent = "I'm in a div";
p.textContent = "ME TOO!";
div.append(h1, p);
div.style.border = '1px solid black';
div.style.backgroundColor = 'pink';
body.append(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");
const btn2 = document.querySelector('#other-button');
btn2.addEventListener('click', () => {
    alert("Hello World");
})