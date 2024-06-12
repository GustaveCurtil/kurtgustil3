let portfolio = document.getElementById('portfolio');
let browserWindow = document.querySelector('.window');
let image = document.querySelector('.window img');
let uitleg = document.querySelector('#werkwijze')

fetch('websites.json')
    .then(response => response.json())
    .then(websites => {
        for (let i = 0; i < websites.length; i++) {
            const website = websites[i];
            let tab = document.createElement('div');
            let title = document.createElement('p');

            /* PORTFOLIO*/
            title.textContent = website.url

            if (window.matchMedia("(max-width: 400px)").matches) {
            tab.style.width = "calc( 100% / " + websites.length + ")"
            } else {
            tab.style.height = "calc( 100% / " + websites.length + ")"
            }

            tab.appendChild(title);
            portfolio.appendChild(tab);
            /* WEBBROWSER */
            tab.addEventListener('click', (e)=> {
                tab.style.backgroundColor = 'white';
                if (!website.scrolbaar) {
                    browserWindow.style.overflowY = 'hidden';
                    image.src = website.foto;
                    image.style.height = "100%";
                } else {
                    browserWindow.style.overflowY = 'auto';
                    image.src = website.foto;
                    image.style.height = "auto";
                }


                if (window.matchMedia("(max-width: 400px)").matches) {
                    uitleg.innerHTML = website.url;
                } else {
                    uitleg.innerHTML = website.beschrijving;
                }
                
            })

            /* UITLEG */
            
        }
    })
    .catch(error => console.error('Error loading translations:', error));


