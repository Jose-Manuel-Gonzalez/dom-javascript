// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/*
const titleElement = document.getElementById('title');

console.log(titleElement.clientHeight);

console.dir(titleElement.parentElement); //imprimo al padre
console.dir(titleElement.nextElementSibling);
*/

const countLi = document.querySelectorAll('li').length; //si lo colocaba al final contaba 7 en vez de 9
//dar vuelta a los textos pero está a mano
const firstUl = (document.getElementById('first-list').textContent = '#second-list'); // esto es sobreescribir porque he escrito un string.
const secondUl = (document.getElementById('second-list').textContent = '#first-list');
//contar elementos
const countH = document.querySelectorAll('header').length;
const countUl = document.querySelectorAll('ul').length;
const countArticulo = document.querySelectorAll('.articulo').length;
const countLiclass = document.querySelectorAll('.list-item').length;
const countNav = document.querySelectorAll('nav').length;

const titleh3Element = document.getElementById('start-point');
console.dir(titleh3Element);
console.log(
  `Soy un  ${titleh3Element.tagName}, con el id ${titleh3Element.id}, clase ${titleh3Element.classname}, hermano ${titleh3Element.previousElementSibling.tagName}, otra cosa: {titleh3Element.previousElementSibling.classname}  con un offsetTop ${titleh3Element.offsetTop} y le doy la vuelta a ${firstUl} y ${secondUl}. Tengo: ${countH} header, ${countNav} nav,  ${countUl},  ul, ${countLi} li, pero con ${countLiclass} class en los mismos. mi hermano mayor: ${titleh3Element.previousElementSibling.previousElementSibling.className}. Mi padre es un ${titleh3Element.parentElement.tagName} con el id ${titleh3Element.parentElement.id} y la clase ${titleh3Element.parentElement.className}`
);
console.log(countH); //2
console.log(countUl); //4
console.dir(countArticulo); //1
console.log(countLiclass); //7
console.dir(countLi); //9
console.log(countNav); //2

//parentElement
let li = document.querySelector('li');

let ul = li.parentElement;

console.log(ul);

/*clase*/

//dar la vuelta
const firstListElement = document.getElementById('first-list');
const secondListElement = document.getElementById('second-list');

const firstContent = firstListElement.textContent;
const secondContent = secondListElement.textContent;
/* guardo el texto del li
const firstContent = firstListElement.chhildren[0].textContent;
const secondContent = secondListElement.chhildren[0].textContent;
*/
firstListElement.textContent = secondContent;
secondListElement.textContent = firstContent;
