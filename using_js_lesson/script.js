const body = document.querySelector('body');

const redP = document.createElement('p');
redP.textContent = "Hey I'm red!";
redP.style.color = 'red';
body.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.textContent = "I'm a blue h3!";
blueH3.style.color = 'blue';
body.append(blueH3);