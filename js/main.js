/**
 * @author Rayan Broquet
 * @since 2022.09.13
 */

'use strict';

console.log('Test liaison JS');

const imageAAffiche = document.getElementById('background');

imageAAffiche.addEventListener('change', function (event) {
    event.preventDefault(); // Annule comportement par défaut

    let img = '../img/backgounds/' + imageAAffiche.value
    document.body.style.background = `url(${img})`;
});

const formulaire = document.querySelector('form')

formulaire.addEventListener("submit", function (event) {
    event.preventDefault();
    const btConfirmer = document.querySelector('[type="submit"]');
    btConfirmer.classList.add('animate__animated', 'animate__tada');
    btConfirmer.addEventListener('animationend', function () {
        btConfirmer.remove();
        alert('Compte créé avec succès !');
        formulaire.reset();
    })
    btConfirmer.removeEventListener();
});