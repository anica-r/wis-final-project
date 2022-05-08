"use strict";
let europeanaImageUrl;
const europeanaImage = document.getElementById("europeanaImage");


// --- NASA image card ---  //
// handling date picker logic
(() => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth()+1; //January is 0!
    let yyyy = today.getFullYear();
    if (dd<10) {
        dd='0'+dd
    };
    if (mm<10) {
        mm='0'+mm
    };

    today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("datePicker").setAttribute("max", today); // set max
    document.getElementById("datePicker").setAttribute("value", today); // set today
})();

// GET parameters
const getParameters = {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json"
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
};

async function getNasaImage (date) {
    let nasaImageUrl;
    const nasaImage = document.getElementById("nasaImage");

    let baseUrl = "https://api.nasa.gov/planetary/apod?api_key=noKEd19KRPwQHM1gyHcNkpMviSw2xmzlOfH1TXvP";
    let addition;

    if (date === "random") {
        addition =  "&count=1";
    } else {
        addition = ("&date=" + date);
    }
    let url = baseUrl + addition;

    const response = await fetch(url, getParameters);
    nasaImageUrl =  await response.json();
    
    if (Array.isArray(nasaImageUrl)) {
        nasaImageUrl = nasaImageUrl[0];
    }

    if (nasaImageUrl.media_type == "video") {
        nasaImageUrl = getNasaImage();
    }
    nasaImageUrl = nasaImageUrl.url;
    nasaImage.src = nasaImageUrl;
};

async function randomButtonCallback () {
    getNasaImage("random");
};

async function searchButtonCallback () {
    const searchDate = document.getElementById("datePicker").value; // dynamically get date
    getNasaImage(searchDate);
};

let paletteData;
const getPaletteButtonCallback = async () => {
    getPalette();
};

const getPalette = async () => {
    const nasaImageUrl = document.getElementById("nasaImage").src;
    const response = await fetch ("http://127.0.0.1:8000/", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({"nasaImageUrl": nasaImageUrl})
    });
    paletteData = JSON.parse((await response.json()).replaceAll("\'", "\""));
};


// --- Europeana image card --- //
async function europeanaCallback (
    url="https://api.europeana.eu/record/v2/search.json?&media=true&profile=standard&query=*&rows=1000&start=1&wskey=orystoplin&colourpalette=%23FFE4C4") {
    const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
    });
    europeanaImageUrl = (await response.json())
    europeanaImageUrl = europeanaImageUrl["items"][5]["edmIsShownBy"];
    europeanaImage.src = europeanaImageUrl;
};




//---colors---
// let color1= '#ee82ee';

// let boxOne = document.getElementById("square1");
// boxOne.style.background = color1

// let boxTwo = document.getElementById("square2");
// boxTwo.style.background = '#000000'

// let box3 = document.getElementById("square3");
// box3.style.background = '#989898'

// let boxFour = document.getElementById("square4");
// boxFour.style.background = '#838996'

// let boxFive = document.getElementById("square5");
// boxFive.style.background = '#838996'

// let boxSix = document.getElementById("square6");
// boxSix.style.background = '#838996'

