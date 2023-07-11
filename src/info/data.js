import timmy  from '../imagenes/timmy.webp';
import arnold from '../imagenes/arnold.png';
import tomJerry from '../imagenes/tom-jerry.jpg';
import panteraRosa from '../imagenes/pantera-rosa.png';
import superPoderosas from '../imagenes/superpoderosas.jpg';
import coraje from '../imagenes/coraje.png';

export let images = [timmy, arnold, tomJerry, panteraRosa, superPoderosas, coraje 
].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5)