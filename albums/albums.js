
// import { initializeApp } from

// const appSettings = {
//     databaseURL: 'https://memory-game-f886a-default-rtdb.europe-west1.firebasedatabase.app/'
// }
 
const top50albums = [
    {
        name: 'Talkie Walkie',
        artist: 'Air',
        cover: 'albums/albums/Air - Talkie Walkie.webp',
        year: 2004,
        genre: ['Electrionic', 'Synth-pop'],
    },
    {
        name: 'Anthiphon',
        artist: 'Alfa Mist',
        cover: 'albums/albums/Alfa Mist - Antiphon.webp',
        year: 2017,
        genre: ['Jazz', 'Hip Hop'],
    },
    {
        name: 'Talking Timbuktu',
        artist: 'Ali Farka Toure',
        cover: 'albums/albums/Ali Farka Toure - Talking Timbuktu.webp',
        year: 1994,
        genre: ['World', 'Blues', 'Folk'],
    },
    {
        name: 'Dimanche A Bamako',
        artist: 'Amadou & Miriam',
        cover: 'albums/albums/Amadou _ Miriam - Dimanche A Bamako.webp',
        year: 2004,
        genre: ['Folk', 'World'],
    },
    {
        name: 'The GoldBerg Variations Glenn Gould',
        artist: 'Bach',
        cover: 'albums/albums/Bach - The Goldberg Variations Glenn Gould.webp',
        year: 1982,
        genre: ['Classical'],
    }, 
    {
        name: 'bbng2',
        artist: 'BADBADNOTGOOD',
        cover: 'albums/albums/BADBADNOTGOOD - bbng2.webp',
        year: 2012,
        genre: ['Jazz'],
    }, 
    {
        name: 'Sissoko & Sissoko',
        artist: 'Ballake & Baba Sissoko',
        cover: 'albums/albums/Ballake Sissoko _ Baba Sissoko - Sissoko _ Sissoko.webp',
        year: 2019,
        genre: ['World', 'Folk'],
    }, 
    {
        name: 'Cracks',
        artist: 'Bendik Giske',
        cover: 'albums/albums/Bendik Giske - Cracks.webp',
        year: 2021,
        genre: ['Electronic', 'Jazz', 'Ambient'],
    }, 
    {
        name: 'Sunset Mission',
        artist: 'Bohren & Der Club Of Gore',
        cover: 'albums/albums/Bohren _ Des Club Of Gore - Sunset Mission.webp',
        year: 2000,
        genre: ['Jazz'],
    }, 
    {
        name: 'Apollo',
        artist: 'Brian Eno',
        cover: 'albums/albums/Brian Eno - Apollo.webp',
        year: 1983,
        genre: ['Electronic', 'Ambient'],
    }, 
    {
        name: 'Buena Cista Social CLub',
        artist: 'Buena Cista Social CLub',
        cover: 'albums/albums/Buena Cista Social CLub - Buena Cista Social Club.webp',
        year: 1997,
        genre: ['Jazz', 'Latin'],
    }, 
    {
        name: 'Patterns Of Consciousness',
        artist: 'Caterina Barbieri',
        cover: 'albums/albums/Caterina Barbieri - Patterns Of Consciousness.webp',
        year: 2017,
        genre: ['Electronic', 'Ambient'],
    }, 
    {
        name: 'Heaven or Las Vegas',
        artist: 'Cocteau Twins',
        cover: 'albums/albums/Cocteau Twins - Heaven or Las Vegas.webp',
        year: 1990,
        genre: ['Electronic', 'Pop'],
    }, 
    {
        name: 'Caramel',
        artist: 'Connan Mockasin',
        cover: 'albums/albums/Connan Mockasin - Caramel.webp',
        year: 2013,
        genre: ['Rock', 'Folk'],
    }, 
    {
        name: 'Black Messiah',
        artist: "D'Angelo and the Vanguard",
        cover: 'albums/albums/D_Angelo and the Vanguard - Black Messiah.webp',
        year: 2014,
        genre: ['Soul'],
    }, 
    {
        name: 'Random Acces Memories',
        artist: 'Daft Punk',
        cover: 'albums/albums/Daft Punk - Random Acces Memories.webp',
        year: 2013,
        genre: ['Electronic', 'Pop'],
    }, 
    {
        name: 'Psychic',
        artist: 'Darkside',
        cover: 'albums/albums/Darkside - Psychic.webp',
        year: 2013,
        genre: ['Electronic', 'Rock'],
    }, 
    {
        name: 'Live',
        artist: 'Erykah Bady',
        cover: 'albums/albums/Erykah Bady - Live.webp',
        year: 1997,
        genre: ['Soul', 'Jazz', 'R&B', 'Hip Hop'],
    }, 
    {
        name: 'On Boolean Plains',
        artist: 'Far Out Radio Systems',
        cover: 'albums/albums/Far Out Radio Systems - On Boolean Plains.webp',
        year: 2020,
        genre: ['Electronic'],
    }, 
    {
        name: 'Blond',
        artist: 'Frank Ocean',
        cover: 'albums/albums/Frank Ocean - Blond.webp',
        year: 2016,
        genre: ['R&B', 'Soul', 'Pop', 'Hip Hop'],
    }, 
    {
        name: '1969',
        artist: 'Gabor Szabo',
        cover: 'albums/albums/Gabor Szabo - 1969.webp',
        year: 1969,
        genre: ['Jazz', 'Gypsy'],
    }, 
    {
        name: 'Lift Your Skinny Fists Like Antennar to Heaven',
        artist: 'Godspeed You! Black Emperor',
        cover: 'albums/albums/Godspeed You! Black Emperor - Lift Your Skinny Fists Like Antennar to Heaven.webp',
        year: 2000,
        genre: ['Rock'],
    }, 
    {
        name: 'Het Wiel',
        artist: 'Hendrik Lasure',
        cover: 'albums/albums/Hendrik Lasure - Het Wiel.webp',
        year: 2022,
        genre: ['Folk', 'Jazz', 'Pop'],
    }, 
    {
        name: 'Choose Your Weapon',
        artist: 'Hiatus Kayote',
        cover: 'albums/albums/Hiatus Kayote - Choose Your Weapon.webp',
        year: 2015,
        genre: ['Soul'],
    }, 
    {
        name: 'Green',
        artist: 'Hiroshi Yoshimura',
        cover: 'albums/albums/Hiroshi Yoshimura - Green.webp',
        year: 1986,
        genre: ['Ambient', 'Minimal'],
    }, 
    {
        name: 'Invisible Threads',
        artist: 'John Surman',
        cover: 'albums/albums/John Surman - Invisible Threads.webp',
        year: 2018,
        genre: ['Jazz'],
    }, 
    {
        name: 'No Beginning No End',
        artist: 'José James',
        cover: 'albums/albums/José James - No Beginning No End.webp',
        year: 2013,
        genre: ['Soul', 'Jazz'],
    }, 
    {
        name: 'First Narrows',
        artist: 'Loscil',
        cover: 'albums/albums/Loscil - First Narrows.webp',
        year: 2004,
        genre: ['Electronic', 'Ambient'],
    }, 
    {
        name: 'Solo in Rio 1959',
        artist: 'Luiz Bonfa',
        cover: 'albums/albums/Luiz Bonfa - Solo in Rio 1959.webp',
        year: 2005,
        genre: ['Latin', 'Bossanova', 'Samba'],
    }, 
    {
        name: 'Five Easy Hot Dogs',
        artist: 'Mac DeMarco',
        cover: 'albums/albums/Mac DeMarco - Five Easy Hot Dogs.webp',
        year: 2023,
        genre: ['Indie'],
    }, 
    {
        name: 'Circles',
        artist: 'Mac Miller',
        cover: 'albums/albums/Mac Miller - Circles.webp',
        year: 2020,
        genre: ['Hip Hop', 'Rap'],
    }, 
    {
        name: 'Clandestino',
        artist: 'Manu Chao',
        cover: 'albums/albums/Manu Chao - Clandestino.webp',
        year: 1998,
        genre: ['World', 'Latin'],
    }, 
    {
        name: 'Through The Looking Glass',
        artist: 'Midori Takada',
        cover: 'albums/albums/Midori Takada - Through The Looking Glass.webp',
        year: 1983,
        genre: ['Experimental', 'Minimal', 'Ambient'],
    }, 
    {
        name: 'Timeline',
        artist: 'Mild High Club',
        cover: 'albums/albums/Mild High Club - Timeline.webp',
        year: 2015,
        genre: ['Psychidalic', 'Pop'],
    }, 
    {
        name: 'Wait For Me',
        artist: 'Moby',
        cover: 'albums/albums/Moby - Wait For Me.webp',
        year: 2009,
        genre: ['Amnient', 'Electronic', 'Alternative'],
    }, 
    {
        name: "Mother Earth's Plantasia",
        artist: 'Mort Garson',
        cover: 'albums/albums/Mort Garson - Mother Earth_s Plantasia.webp',
        year: 1976 ,
        genre: ['Electronic'],
    }, 
    {
        name: 'Come Away With Me',
        artist: 'Norah Jones',
        cover: 'albums/albums/Norah Jones - Come Away With Me.webp',
        year: 2002,
        genre: ['Jazz', 'Country', 'Soul', 'Folk'],
    }, 
    {
        name: 'Modal Soul',
        artist: 'Nujabes',
        cover: 'albums/albums/Nujabes - Modal Soul.webp',
        year: 2005,
        genre: ['Hip Hop', 'Jazz'],
    }, 
    {
        name: 'Watch This Liquid Pour Itself',
        artist: 'Okay Kaya',
        cover: 'albums/albums/Okay Kaya - Watch This Liquid Pour Itself.webp',
        year: 2020,
        genre: ['Alternative', 'Indie'],
    }, 
    {
        name: 'Spring Break',
        artist: "Pablo's Eye",
        cover: 'albums/albums/Pablo_s Eye - Spring Break.webp',
        year: 2018,
        genre: ['Electronic', 'Ambient'],
    }, 
    {
        name: 'Deep Listening',
        artist: 'Pauline Oleveros, Stuart Dempster & Panaiotis',
        cover: 'albums/albums/Pauline Oleveros, Stuart Dempster _ Panaiotis - Deep Listening.webp',
        year: 1989,
        genre: ['Classical'],
    }, 
    {
        name: 'Mambo Sinuendo',
        artist: 'Ry Cooder & Manuel Galbán',
        cover: 'albums/albums/Ry Cooder _ Manuel Galbán - Mambo Sinuendo.webp',
        year: 2003,
        genre: ['Mambo', "Jazz", 'Latin'],
    }, 
    {
        name: 'Catwalk',
        artist: 'SCHNTZL',
        cover: 'albums/albums/SCHNTZL - Catwalk.webp',
        year: 2020,
        genre: ['Jazz', "Electronic"],
    }, 
    {
        name: "Oil Of Every Pearl's Un-Insides",
        artist: 'SOPHIE',
        cover: 'albums/albums/SOPHIE - Oil Of Every Pearl_s Un-Insides.webp',
        year: 2018,
        genre: ['Electronic', 'Pop'],
    }, 
    {
        name: 'Honest Labour',
        artist: 'Space Afrika',
        cover: 'albums/albums/Space Afrika - Honest Labour.webp',
        year: 2021,
        genre: ['Electronic', 'Hip Hop', 'Ambient'],
    }, 
    {
        name: "Everybody else is doing it so why can't we",
        artist: 'The Cranberries',
        cover: 'albums/albums/The Cranberries - Everybody else is doing it so why can_t we.webp',
        year: 1993,
        genre: ['Alternative Rock'],
    }, 
    {
        name: 'Whack World',
        artist: 'Tierra Whack',
        cover: 'albums/albums/Tierra Whack - Whack World.webp',
        year: 2020,
        genre: ['hip Hop'],
    }, 
    {
        name: 'Zoom',
        artist: 'Upsammy',
        cover: 'albums/albums/Upsammy - Zoom.webp',
        year: 2020,
        genre: ['Electronic', 'Ambient', 'Experimental'],
    }, 
    {
        name: 'Yaral Sa Doom',
        artist: 'Wau Wau Collectif',
        cover: 'albums/albums/Wau Wau Collectif - Yaral Sa Doom.webp',
        year: 2021,
        genre: ['Electronic', 'World', 'Folk'],
    }, 
    {
        name: 'xxyyxx',
        artist: 'XXYYXX',
        cover: 'albums/albums/XXYYXX - xxyyxx.webp',
        year: 2012,
        genre: ['electronic'],
    }
];

//Album collectie
const albumWrapper = document.createElement('div');
albumWrapper.classList.add('favo-albums');

let memorygame = document.querySelector(".static")

//To Listen lijst
let shoppingCart = new Set();

//bij laden document
sortBy("artist")

//Voor openen website + HAZARD knop
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    renderAlbums()
}

//voor sorteerknoppen
function sortBy(x) {
    top50albums.sort(function (a, b) {
        if (a[x] < b[x]) {
          return -1;
        }
        if (a[x] > b[x]) {
          return 1;
        }
        return 0;
      });
    renderAlbums()
}

//Knop
// let buttons = document.getElementsByTagName('button');

function resetStyle() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'rgb(226, 120, 120)';
    }
}

//HAZARD KNOP
// let sortHazard = document.querySelector(".sort-hazard")
// sortHazard.addEventListener("click", (e) => {
//     shuffleArray(top50albums);
//     resetStyle()
//     sortHazard.style.backgroundColor = 'rgb(231, 58, 58)';
   
// });

// //ALBUM KNOP
// let sortName = document.querySelector(".sort-name")
// sortName.addEventListener("click", (e) => {
//     sortBy("name");
//     resetStyle()
//     sortName.style.backgroundColor = 'rgb(231, 58, 58)';
// });

// //ARTIST KNOP
// let sortArtist = document.querySelector(".sort-artist")
// sortArtist.addEventListener("click", (e) => {
//     sortBy("artist");
//     resetStyle()
//     sortArtist.style.backgroundColor = 'rgb(231, 58, 58)';
// });

// //YEAR KNOP
// let sortYear = document.querySelector(".sort-year")
// sortYear.addEventListener("click", (e) => {
//     sortBy("year");
//     resetStyle()
//     sortYear.style.backgroundColor = 'rgb(231, 58, 58)';
// });


//genres
// let allGenres = top50albums.map(a => a.genre);
// let combinedGenres = [].concat(...allGenres)

// let singleGenres = combinedGenres.filter(item => {
//     var count = this[item] ? this[item] : 0;
//     this[item] = ++count;
//     return count === 3;
//    })
   
// singleGenres.sort()

// singleGenres.forEach(genre => {
//     let buttonGenre = document.createElement("button");
//     let genreParagraph = document.querySelector(".filter");
//     buttonGenre.innerHTML = genre;
//     // genreParagraph.appendChild(buttonGenre);
// });


//Maak albumkaarten aan
function renderAlbums() {
    albumWrapper.innerHTML='';

    top50albums.forEach(album => {

        // Create the card element
        const card = document.createElement('div');
        card.classList.add('card');
    
        // Create the cover element
        const cover = document.createElement('div');
        cover.classList.add('cover');
        const coverImage = document.createElement('img');
        coverImage.setAttribute('src', album.cover);
        cover.appendChild(coverImage);
    
    
        // Create the info element
        const info = document.createElement('div');
        info.classList.add('info');
        const ul = document.createElement('ul');
    
        // Create the list items for title, artist, to-listen and genre
        const titleLi = document.createElement('li');
        titleLi.classList.add('title');
        titleLi.textContent = album.name + " (" + album.year + ")";
    
        const artistLi = document.createElement('li');
        artistLi.classList.add('artist');
        artistLi.textContent = album.artist;
    
        const listenLi = document.createElement('li');
        listenLi.classList.add('to-listen');
        listenLi.textContent = "♫";
    
        const genreLi = document.createElement('li');
        genreLi.classList.add('genre');
        genreLi.textContent = album.genre.join(', ');
    
        ul.appendChild(titleLi);
        ul.appendChild(artistLi);
        ul.appendChild(listenLi);
        ul.appendChild(genreLi);
        info.appendChild(ul);

    
        // Append the cover and info elements to the card
        card.appendChild(cover);
        card.appendChild(info);
    
        // Append the card to the "favo-albums" container
        albumWrapper.appendChild(card);
    
        // Append the "favo-albums" container to the document or a specific parent element
        memorygame.appendChild(albumWrapper);



    });
}


// const albumNamesInCart = shoppingCart.map(save => save.name);
let cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    let album = top50albums[i];
    let listenLi = card.querySelector(".to-listen");
    let info = card.querySelector(".info")
    


    card.addEventListener("click", (e) => {
        if (shoppingCart.has(album)){
            for (j=0; j < shoppingCart.length; j++) {
                if (shoppingCart[j] === album) {
                    shoppingCart.delete(album)
                    info.style.visibility = "hidden";
                    listenLi.style.backgroundColor = "transparent"; 
                }
            };
        } else {
        shoppingCart.add(album);
        listenLi.style.backgroundColor = "rgb(231, 58, 58, 1)"; 
        info.style.visibility = "visible";
        }
        updateSavedAlbums()
    });

    card.addEventListener("mouseover", (e) => {
        info.style.visibility = "visible";
    });

    card.addEventListener("mouseout", (e) => {
        if (shoppingCart.has(album)){
            listenLi.style.backgroundColor = "rgb(231, 58, 58, 1)"; 
            info.style.visibility = "visible";
        } else {       
            info.style.visibility = "hidden";
            listenLi.style.backgroundColor = "transparent"; 
        }
    })
 

}
     

//Nummer voor aantal saved albums
function updateSavedAlbums() {
const savedAlbums = document.querySelector(".displayFavos").firstChild
savedAlbums.textContent = "♫ : " + shoppingCart.size
}



//flexibele hoogte van de pdf
function lengtePagina() {
    let lengtePagina = 200

    if (shoppingCart.length > 8) {
        lengtePagina = 40 + 20*shoppingCart.size 
    }

    return lengtePagina
}


// //pdf functie
// function generatePDF() {

//     let pdf = new jsPDF({
//         orientation: 'p',
//         unit: 'mm',
//         format: [200, lengtePagina()],
//         putOnlyUsedFonts:true
//     });


//     let content = '';
//     let y = 20
//     let beeld = new Image();

//     pdf.text("ALBUMS TO LISTEN TO -- enjoy! :)", 50, 20)

//     shoppingCart.forEach(element => {
//         // content.addImage(element.cover, 'PNG', 0, 0, 210, 297)
//         beeld.src= element.cover
//         console.log(element);
//         y = y + 20
//         content = element.name + " (" + element.year + ")" + '\r\n' + element.artist +'\r\n';
//         pdf.addImage(beeld, 'jpeg', 20, y-10, 20, 20)
//         pdf.text(content, 50, y);
//         pdf.text('\n')
//     });

//     pdf.save('AlbumsToListen.pdf')
// }

function generatePDF() {
    let pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: [200, lengtePagina()],
        putOnlyUsedFonts: true
    });

    let y = 20;

    pdf.text("ALBUMS TO LISTEN TO -- enjoy! :) www.kurtgustil.be", 50, 20);

    // Create an array of promises for loading and converting images
    let shoppingCartArray = Array.from(shoppingCart);

    // Create an array of promises for loading and converting images
    let promises = shoppingCartArray.map(item => convertImageToBase64(item.cover));

    Promise.all(promises)
        .then(images => {
            images.forEach((base64, index) => {
                y += 20;
                let item = shoppingCartArray[index];
                let content = `${item.name} (${item.year})\n${item.artist}\n`;
                pdf.addImage(base64, 'PNG', 20, y - 10, 20, 20); // Use 'PNG' for PNG images
                pdf.text(content, 50, y);
            });

            pdf.save('AlbumsToListen.pdf');
        })
        .catch(error => {
            console.error('Error loading images:', error);
        });
}

// Function to convert an image path to base64
function convertImageToBase64(imagePath) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const base64 = canvas.toDataURL('image/png');
            resolve(base64);
        };
        img.onerror = reject;
        img.src = imagePath;
    });
}
