let portfolio = document.getElementById('portfolio');

fetch('websites.json')
    .then(response => response.json())
    .then(websites => {
        for (let i = 0; i < websites.length; i++) {
            const website = websites[i];

            /* PORTFOLIO*/
            let tab = document.createElement('div');
            let title = document.createElement('p');
            title.textContent = website.url

            if (window.matchMedia("(max-width: 400px)").matches) {
            tab.style.width = "calc( 100% / " + websites.length + ")"
            } else {
            tab.style.height = "calc( 100% / " + websites.length + ")"
            }

            tab.appendChild(title);
            portfolio.appendChild(tab);

            /* WEBBROWSER */
            let browserWindow = document.querySelector('.window');
            tab.addEventListener('click', (e)=> {
                let image = document.querySelector('.window img');
                tab.style.backgroundColor = 'white';
                image.src = website.foto;
                if (!website.scrolbaar) {
                    browserWindow.style.overflowY = 'hidden';
                    image.style.height = "100%";
                } else {
                    browserWindow.style.overflowY = 'auto';
                    image.style.height = "auto";
                }
            })
        }
    })
    .catch(error => console.error('Error loading translations:', error));


