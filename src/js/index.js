// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/*
const titleElement = document.getElementById('title');

console.log(titleElement.clientHeight);

console.dir(titleElement.parentElement); //imprimo al padre
console.dir(titleElement.nextElementSibling);
*/

const countLi = document.querySelectorAll('li').length; //si lo colocaba al final contaba 7 en vez de 9
//dar vuelta a los textos
const firstUl = (document.getElementById('first-list').textContent = 'Second List - Item 1');
const secondUl = (document.getElementById('second-list').textContent = 'First List - Item 1');
//contar elementos
const countH = document.querySelectorAll('header').length;
const countUl = document.querySelectorAll('ul').length;
const countArticulo = document.querySelectorAll('.articulo').length;
const countLiclass = document.querySelectorAll('.list-item').length;
const countNav = document.querySelectorAll('nav').length;

const titleh3Element = document.getElementById('start-point');
console.dir(titleh3Element);
console.log(
  `Soy un  ${titleh3Element.tagName}, con el id ${titleh3Element.id}, con un offsetTop ${titleh3Element.offsetTop} y le doy la vuelta a ${firstUl} y ${secondUl}. Tengo: ${countH} header, ${countNav} nav,  ${countUl},  ul, ${countLi} li, pero con ${countLiclass} class en los mismos.`
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
