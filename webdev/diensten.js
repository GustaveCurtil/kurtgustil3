let titel = document.querySelector("#dienst h3");
let lijst = document.querySelector("#dienst ul");

let tabs = document.querySelectorAll('#diensten .tab')

fetch('webdev/tekst.json')
    .then(response => response.json())
    .then(tekst => {
        console.log(tekst.diensten)
        titel.innerHTML = tekst.diensten[0].titel
        lijst.innerHTML = tekst.diensten[0].beschrijving

        for (let i = 0; i < tekst.diensten.length; i++) {
            tabs[i].addEventListener('click', (e) => {
                tabs.forEach(tab => {
                    tab.classList.remove('huidig');
                });
                tabs[i].classList.add('huidig')
                titel.innerHTML = tekst.diensten[i].titel
                lijst.innerHTML = tekst.diensten[i].beschrijving
            })
            console.log(tekst.diensten[i].titel);
            console.log(tekst.diensten[i].beschrijving);
            
        }
        
        
    })
    .catch(error => console.error('Error loading translations:', error));