const portfolio = document.getElementById('portfolio');
    const browserWindow = document.querySelector('.window');
    const image = document.querySelector('.window img');
    const uitleg = document.querySelector('#werkwijze');

    fetch('portfolio/websites.json')
        .then(response => response.json())
        .then(websites => {
            const fragment = document.createDocumentFragment();
            const tabs = [];

            websites.forEach((website, i) => {
                const tab = document.createElement('div');
                const title = document.createElement('p');
                title.textContent = website.url;

                tab.style.backgroundColor = `hsla(${website.h}, 42%, 70%, ${i === 0 ? 1 : 0.5})`;

                if (window.matchMedia("(max-width: 400px)").matches) {
                    tab.style.width = `calc(100% / ${websites.length})`;
                } else {
                    tab.style.height = `calc(100% / ${websites.length})`;
                }

                tab.appendChild(title);
                fragment.appendChild(tab);
                tabs.push(tab);
            });

            portfolio.appendChild(fragment);

            portfolio.addEventListener('click', (e) => {
                if (e.target.closest('div')) {
                    const tab = e.target.closest('div');
                    const index = tabs.indexOf(tab);
                    const website = websites[index];

                    tabs.forEach((t, i) => {
                        t.style.backgroundColor = `hsla(${websites[i].h}, 42%, 70%, 0.5)`;
                    });
                    tab.style.backgroundColor = `hsla(${website.h}, 42%, 70%, 1)`;

                    document.documentElement.style.setProperty('--browser-h', website.h);

                    if (!website.scrolbaar) {
                        browserWindow.style.overflowY = 'hidden';
                        image.style.height = "100%";
                    } else {
                        browserWindow.style.overflowY = 'auto';
                        image.style.height = "auto";
                    }
                    image.src = website.foto;

                    uitleg.innerHTML = window.matchMedia("(max-width: 400px)").matches ? website.url : website.beschrijving;
                }
            });
        })
        .catch(error => console.error('Error loading translations:', error));

// let portfolio = document.getElementById('portfolio');
// let browserWindow = document.querySelector('.window');
// let image = document.querySelector('.window img');
// let uitleg = document.querySelector('#werkwijze');

// fetch('portfolio/websites.json')
//     .then(response => response.json())
//     .then(websites => {
//         for (let i = 0; i < websites.length; i++) {
//             const website = websites[i];
//             let tab = document.createElement('div');
//             let title = document.createElement('p');

//             /* PORTFOLIO*/
//             title.textContent = website.url

//             if (window.matchMedia("(max-width: 400px)").matches) {
//             tab.style.width = "calc( 100% / " + websites.length + ")"
//             } else {
//             tab.style.height = "calc( 100% / " + websites.length + ")"
//             }

//             tab.style.backgroundColor = "hsla(" + website.h + ", 42%, 70%, 0.5)";

//             if (i === 0) {
//                 tab.style.backgroundColor = "hsla(" + websites[0].h + ", 42%, 70%, 1)";
//             }


//             tab.appendChild(title);
//             portfolio.appendChild(tab);
//             /* WEBBROWSER */
//             tab.addEventListener('click', (e)=> {
//                 for (let i = 0; i < websites.length; i++) {
//                 let tabs = document.querySelectorAll("#portfolio div");
//                 tabs[i].style.backgroundColor = "hsla(" + websites[i].h + ", 42%, 70%, 0.5)";
//                 }

//                 let root = document.documentElement;
//                 root.style.setProperty('--browser-h', website.h);




//                 tab.style.backgroundColor = "hsla(" + website.h + ", 42%, 70%, 1)";
                
//                 if (!website.scrolbaar) {
//                     browserWindow.style.overflowY = 'hidden';
//                     image.src = website.foto;
//                     image.style.height = "100%";
//                 } else {
//                     browserWindow.style.overflowY = 'auto';
//                     image.src = website.foto;
//                     image.style.height = "auto";
//                 }


//                 if (window.matchMedia("(max-width: 400px)").matches) {
//                     uitleg.innerHTML = website.url;
//                 } else {
//                     uitleg.innerHTML = website.beschrijving;
//                 }
                
//             })

//             /* UITLEG */
            
//         }
//     })
//     .catch(error => console.error('Error loading translations:', error));


