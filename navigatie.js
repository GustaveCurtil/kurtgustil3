let nav = document.querySelector('nav');
let body = document.querySelector('body');
let nav1 = document.getElementById('pagina1');
let nav2 = document.getElementById('pagina2');
let nav3 = document.getElementById('pagina3');

/*PAGINA 1 */
nav1.addEventListener('click', (e) => {
    console.log("yo")
    body.classList.add('portfoliopagina')
    nav1.style.display = 'none';
    nav2.style.display = 'flex';
})

/*PAGINA 2 */
let knoppen2 = document.querySelectorAll('#pagina2 p');

knoppen2[0].addEventListener('click', (e) => {
    body.classList.remove('portfoliopagina')
    nav1.style.display = 'flex';
    nav2.style.display = 'none';
})

knoppen2[1].addEventListener('click', (e) => {
    body.classList.remove('portfoliopagina')
    body.classList.add('memorypagina')
    nav2.style.display = 'none';
    nav3.style.display = 'flex';
})

/*PAGINA 3 */
nav3.addEventListener('click', (e) => {
    console.log("yo")
    body.classList.add('portfoliopagina')
    body.classList.remove('memorypagina')
    nav2.style.display = 'flex';
    nav3.style.display = 'none';
})