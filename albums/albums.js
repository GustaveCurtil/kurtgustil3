
// import { initializeApp } from

// const appSettings = {
//     databaseURL: 'https://memory-game-f886a-default-rtdb.europe-west1.firebasedatabase.app/'
// }
 
const top50albums = [
    {
        name: 'Talkie Walkie',
        artist: 'Air',
        cover: 'albums/albums/Air - Talkie Walkie.jpg',
        year: 2004,
        genre: ['Electrionic', 'Synth-pop'],
    },
    {
        name: 'Anthiphon',
        artist: 'Alfa Mist',
        cover: 'albums/albums/Alfa Mist - Antiphon.jpg',
        year: 2017,
        genre: ['Jazz', 'Hip Hop'],
    },
    {
        name: 'Talking Timbuktu',
        artist: 'Ali Farka Toure',
        cover: 'albums/albums/Ali Farka Toure - Talking Timbuktu.jpg',
        year: 1994,
        genre: ['World', 'Blues', 'Folk'],
    },
    {
        name: 'Dimanche A Bamako',
        artist: 'Amadou & Miriam',
        cover: 'albums/albums/Amadou _ Miriam - Dimanche A Bamako.jpg',
        year: 2004,
        genre: ['Folk', 'World'],
    },
    {
        name: 'The GoldBerg Variations Glenn Gould',
        artist: 'Bach',
        cover: 'albums/albums/Bach - The Goldberg Variations Glenn Gould.jpg',
        year: 1982,
        genre: ['Classical'],
    }, 
    {
        name: 'bbng2',
        artist: 'BADBADNOTGOOD',
        cover: 'albums/albums/BADBADNOTGOOD - bbng2.jpg',
        year: 2012,
        genre: ['Jazz'],
    }, 
    {
        name: 'Sissoko & Sissoko',
        artist: 'Ballake & Baba Sissoko',
        cover: 'albums/albums/Ballake Sissoko _ Baba Sissoko - Sissoko _ Sissoko.jpg',
        year: 2019,
        genre: ['World', 'Folk'],
    }, 
    {
        name: 'Cracks',
        artist: 'Bendik Giske',
        cover: 'albums/albums/Bendik Giske - Cracks.jpg',
        year: 2021,
        genre: ['Electronic', 'Jazz', 'Ambient'],
    }, 
    {
        name: 'Sunset Mission',
        artist: 'Bohren & Der Club Of Gore',
        cover: 'albums/albums/Bohren _ Des Club Of Gore - Sunset Mission.jpg',
        year: 2000,
        genre: ['Jazz'],
    }, 
    {
        name: 'Apollo',
        artist: 'Brian Eno',
        cover: 'albums/albums/Brian Eno - Apollo.jpg',
        year: 1983,
        genre: ['Electronic', 'Ambient'],
    }, 
    {
        name: 'Buena Cista Social CLub',
        artist: 'Buena Cista Social CLub',
        cover: 'albums/albums/Buena Cista Social CLub - Buena Cista Social Club.jpg',
        year: 1997,
        genre: ['Jazz', 'Latin'],
    }, 
    {
        name: 'Patterns Of Consciousness',
        artist: 'Caterina Barbieri',
        cover: 'albums/albums/Caterina Barbieri - Patterns Of Consciousness.jpg',
        year: 2017,
        genre: ['Electronic', 'Ambient'],
    }, 
    {
        name: 'Heaven or Las Vegas',
        artist: 'Cocteau Twins',
        cover: 'albums/albums/Cocteau Twins - Heaven or Las Vegas.jpg',
        year: 1990,
        genre: ['Electronic', 'Pop'],
    }, 
    {
        name: 'Caramel',
        artist: 'Connan Mockasin',
        cover: 'albums/albums/Connan Mockasin - Caramel.jpg',
        year: 2013,
        genre: ['Rock', 'Folk'],
    }, 
    {
        name: 'Black Messiah',
        artist: "D'Angelo and the Vanguard",
        cover: 'albums/albums/D_Angelo and the Vanguard - Black Messiah.jpg',
        year: 2014,
        genre: ['Soul'],
    }, 
    {
        name: 'Random Acces Memories',
        artist: 'Daft Punk',
        cover: 'albums/albums/Daft Punk - Random Acces Memories.jpg',
        year: 2013,
        genre: ['Electronic', 'Pop'],
    }, 
    {
        name: 'Psychic',
        artist: 'Darkside',
        cover: 'albums/albums/Darkside - Psychic.jpg',
        year: 2013,
        genre: ['Electronic', 'Rock'],
    }, 
    {
        name: 'Live',
        artist: 'Erykah Bady',
        cover: 'albums/albums/Erykah Bady - Live.jpg',
        year: 1997,
        genre: ['Soul', 'Jazz', 'R&B', 'Hip Hop'],
    }, 
    {
        name: 'On Boolean Plains',
        artist: 'Far Out Radio Systems',
        cover: 'albums/albums/Far Out Radio Systems - On Boolean Plains.jpg',
        year: 2020,
        genre: ['Electronic'],
    }, 
    {
        name: 'Blond',
        artist: 'Frank Ocean',
        cover: 'albums/albums/Frank Ocean - Blond.jpg',
        year: 2016,
        genre: ['R&B', 'Soul', 'Pop', 'Hip Hop'],
    }, 
    {
        name: '1969',
        artist: 'Gabor Szabo',
        cover: 'albums/albums/Gabor Szabo - 1969.jpg',
        year: 1969,
        genre: ['Jazz', 'Gypsy'],
    }, 
    {
        name: 'Lift Your Skinny Fists Like Antennar to Heaven',
        artist: 'Godspeed You! Black Emperor',
        cover: 'albums/albums/Godspeed You! Black Emperor - Lift Your Skinny Fists Like Antennar to Heaven.jpg',
        year: 2000,
        genre: ['Rock'],
    }, 
    {
        name: 'Het Wiel',
        artist: 'Hendrik Lasure',
        cover: 'albums/albums/Hendrik Lasure - Het Wiel.jpg',
        year: 2022,
        genre: ['Folk', 'Jazz', 'Pop'],
    }, 
    {
        name: 'Choose Your Weapon',
        artist: 'Hiatus Kayote',
        cover: 'albums/albums/Hiatus Kayote - Choose Your Weapon.jpg',
        year: 2015,
        genre: ['Soul'],
    }, 
    {
        name: 'Green',
        artist: 'Hiroshi Yoshimura',
        cover: 'albums/albums/Hiroshi Yoshimura - Green.jpg',
        year: 1986,
        genre: ['Ambient', 'Minimal'],
    }, 
    {
        name: 'Invisible Threads',
        artist: 'John Surman',
        cover: 'albums/albums/John Surman - Invisible Threads.jpg',
        year: 2018,
        genre: ['Jazz'],
    }, 
    {
        name: 'No Beginning No End',
        artist: 'José James',
        cover: 'albums/albums/José James - No Beginning No End.jpg',
        year: 2013,
        genre: ['Soul', 'Jazz'],
    }, 
    {
        name: 'First Narrows',
        artist: 'Loscil',
        cover: 'albums/albums/Loscil - First Narrows.jpg',
        year: 2004,
        genre: ['Electronic', 'Ambient'],
    }, 
    {
        name: 'Solo in Rio 1959',
        artist: 'Luiz Bonfa',
        cover: 'albums/albums/Luiz Bonfa - Solo in Rio 1959.jpg',
        year: 2005,
        genre: ['Latin', 'Bossanova', 'Samba'],
    }, 
    {
        name: 'Five Easy Hot Dogs',
        artist: 'Mac DeMarco',
        cover: 'albums/albums/Mac DeMarco - Five Easy Hot Dogs.jpg',
        year: 2023,
        genre: ['Indie'],
    }, 
    {
        name: 'Circles',
        artist: 'Mac Miller',
        cover: 'albums/albums/Mac Miller - Circles.jpg',
        year: 2020,
        genre: ['Hip Hop', 'Rap'],
    }, 
    {
        name: 'Clandestino',
        artist: 'Manu Chao',
        cover: 'albums/albums/Manu Chao - Clandestino.jpg',
        year: 1998,
        genre: ['World', 'Latin'],
    }, 
    {
        name: 'Through The Looking Glass',
        artist: 'Midori Takada',
        cover: 'albums/albums/Midori Takada - Through The Looking Glass.jpg',
        year: 1983,
        genre: ['Experimental', 'Minimal', 'Ambient'],
    }, 
    {
        name: 'Timeline',
        artist: 'Mild High Club',
        cover: 'albums/albums/Mild High Club - Timeline.jpg',
        year: 2015,
        genre: ['Psychidalic', 'Pop'],
    }, 
    {
        name: 'Wait For Me',
        artist: 'Moby',
        cover: 'albums/albums/Moby - Wait For Me.jpg',
        year: 2009,
        genre: ['Amnient', 'Electronic', 'Alternative'],
    }, 
    {
        name: "Mother Earth's Plantasia",
        artist: 'Mort Garson',
        cover: 'albums/albums/Mort Garson - Mother Earth_s Plantasia.jpg',
        year: 1976 ,
        genre: ['Electronic'],
    }, 
    {
        name: 'Come Away With Me',
        artist: 'Norah Jones',
        cover: 'albums/albums/Norah Jones - Come Away With Me.jpg',
        year: 2002,
        genre: ['Jazz', 'Country', 'Soul', 'Folk'],
    }, 
    {
        name: 'Modal Soul',
        artist: 'Nujabes',
        cover: 'albums/albums/Nujabes - Modal Soul.jpg',
        year: 2005,
        genre: ['Hip Hop', 'Jazz'],
    }, 
    {
        name: 'Watch This Liquid Pour Itself',
        artist: 'Okay Kaya',
        cover: 'albums/albums/Okay Kaya - Watch This Liquid Pour Itself.jpg',
        year: 2020,
        genre: ['Alternative', 'Indie'],
    }, 
    {
        name: 'Spring Break',
        artist: "Pablo's Eye",
        cover: 'albums/albums/Pablo_s Eye - Spring Break.jpg',
        year: 2018,
        genre: ['Electronic', 'Ambient'],
    }, 
    {
        name: 'Deep Listening',
        artist: 'Pauline Oleveros, Stuart Dempster & Panaiotis',
        cover: 'albums/albums/Pauline Oleveros, Stuart Dempster _ Panaiotis - Deep Listening.jpg',
        year: 1989,
        genre: ['Classical'],
    }, 
    {
        name: 'Mambo Sinuendo',
        artist: 'Ry Cooder & Manuel Galbán',
        cover: 'albums/albums/Ry Cooder _ Manuel Galbán - Mambo Sinuendo.jpg',
        year: 2003,
        genre: ['Mambo', "Jazz", 'Latin'],
    }, 
    {
        name: 'Catwalk',
        artist: 'SCHNTZL',
        cover: 'albums/albums/SCHNTZL - Catwalk.jpg',
        year: 2020,
        genre: ['Jazz', "Electronic"],
    }, 
    {
        name: "Oil Of Every Pearl's Un-Insides",
        artist: 'SOPHIE',
        cover: 'albums/albums/SOPHIE - Oil Of Every Pearl_s Un-Insides.jpg',
        year: 2018,
        genre: ['Electronic', 'Pop'],
    }, 
    {
        name: 'Honest Labour',
        artist: 'Space Afrika',
        cover: 'albums/albums/Space Afrika - Honest Labour.jpg',
        year: 2021,
        genre: ['Electronic', 'Hip Hop', 'Ambient'],
    }, 
    {
        name: "Everybody else is doing it so why can't we",
        artist: 'The Cranberries',
        cover: 'albums/albums/The Cranberries - Everybody else is doing it so why can_t we.jpg',
        year: 1993,
        genre: ['Alternative Rock'],
    }, 
    {
        name: 'Whack World',
        artist: 'Tierra Whack',
        cover: 'albums/albums/Tierra Whack - Whack World.jpg',
        year: 2020,
        genre: ['hip Hop'],
    }, 
    {
        name: 'Zoom',
        artist: 'Upsammy',
        cover: 'albums/albums/Upsammy - Zoom.jpg',
        year: 2020,
        genre: ['Electronic', 'Ambient', 'Experimental'],
    }, 
    {
        name: 'Yaral Sa Doom',
        artist: 'Wau Wau Collectif',
        cover: 'albums/albums/Wau Wau Collectif - Yaral Sa Doom.jpg',
        year: 2021,
        genre: ['Electronic', 'World', 'Folk'],
    }, 
    {
        name: 'xxyyxx',
        artist: 'XXYYXX',
        cover: 'albums/albums/XXYYXX - xxyyxx.jpg',
        year: 2012,
        genre: ['electronic'],
    }
];

//Album collectie
const albumWrapper = document.createElement('div');
albumWrapper.classList.add('favo-albums');

let memorygame = document.querySelector(".static")

//To Listen lijst
const shoppingCart = [];

//bij laden document
document.addEventListener("DOMContentLoaded", sortBy("artist"))

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
let buttons = document.getElementsByTagName('button');

function resetStyle() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'rgb(226, 120, 120)';
    }
}

//HAZARD KNOP
let sortHazard = document.querySelector(".sort-hazard")
sortHazard.addEventListener("click", (e) => {
    shuffleArray(top50albums);
    resetStyle()
    sortHazard.style.backgroundColor = 'rgb(231, 58, 58)';
   
});

//ALBUM KNOP
let sortName = document.querySelector(".sort-name")
sortName.addEventListener("click", (e) => {
    sortBy("name");
    resetStyle()
    sortName.style.backgroundColor = 'rgb(231, 58, 58)';
});

//ARTIST KNOP
let sortArtist = document.querySelector(".sort-artist")
sortArtist.addEventListener("click", (e) => {
    sortBy("artist");
    resetStyle()
    sortArtist.style.backgroundColor = 'rgb(231, 58, 58)';
});

//YEAR KNOP
let sortYear = document.querySelector(".sort-year")
sortYear.addEventListener("click", (e) => {
    sortBy("year");
    resetStyle()
    sortYear.style.backgroundColor = 'rgb(231, 58, 58)';
});


//genres
let allGenres = top50albums.map(a => a.genre);
let combinedGenres = [].concat(...allGenres)

let singleGenres = combinedGenres.filter(item => {
    var count = this[item] ? this[item] : 0;
    this[item] = ++count;
    return count === 3;
   })
   
singleGenres.sort()

singleGenres.forEach(genre => {
    let buttonGenre = document.createElement("button");
    let genreParagraph = document.querySelector(".filter");
    buttonGenre.innerHTML = genre;
    // genreParagraph.appendChild(buttonGenre);
});


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
        
        //crazy hover over album effect so that the information appears <3

        yoyo()
        function yoyo() {
        const albumNamesInCart = shoppingCart.map(save => save.name);
        
        if (albumNamesInCart.includes(album.name)) {
            info.style.visibility = 'visible';
            listenLi.style.backgroundColor = "rgb(231, 58, 58, 0.5)";
        } else {
            card.addEventListener("mouseover", (e) => {
                info.style.visibility = "visible";
            });
            if (!albumNamesInCart.includes(album.name)) {
                card.addEventListener("mouseout", (e) => {
                info.style.visibility = "hidden";
                })
            }

        }
        }


        card.addEventListener("click", (e) => {
            if (shoppingCart.includes(album)){
                for (i=0; i < shoppingCart.length; i++) {
                    if (shoppingCart[i] === album) {
                        shoppingCart.splice(i, 1)
                        info.style.visibility = "hidden";
                    }
                };
            } else {
            shoppingCart.push(album);
            listenLi.style.backgroundColor = "rgb(231, 58, 58, 0.5)"; 
            info.style.visibility = "visible";

            }
            updateSavedAlbums()
            renderAlbums()
        });

    });
}

        

//Nummer voor aantal saved albums
function updateSavedAlbums() {
const savedAlbums = document.querySelector(".displayFavos").firstChild
savedAlbums.textContent = "♫ : " + shoppingCart.length 
}



//flexibele hoogte van de pdf
function lengtePagina() {
    let lengtePagina = 200

    if (shoppingCart.length > 8) {
        lengtePagina = 40 + 20*shoppingCart.length 
    }

    return lengtePagina
}


//pdf functie
function generatePDF() {
    let pdf = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: [200, lengtePagina()],
        putOnlyUsedFonts:true
        });

        let content = '';
        let y = 20
        let image = new Image();

        pdf.text("ALBUMS TO LISTEN TO -- enjoy! :)", 50, 20)

        shoppingCart.forEach(element => {
            // content.addImage(element.cover, 'PNG', 0, 0, 210, 297)
            image.src= element.cover
            y = y + 20
            content = element.name + " (" + element.year + ")" + '\r\n' + element.artist +'\r\n';
            pdf.addImage(image, 'jpg', 20, y-10, 20, 20)
            pdf.text(content, 50, y);
            pdf.text('\n')
        });


    pdf.save('AlbumsToListen.pdf')
}

