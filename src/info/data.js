import dexter from '../imagenes/knd.webp';
import arnold from '../imagenes/arnold.png';
import tomJerry from '../imagenes/tom-jerry.jpg';
import panteraRosa from '../imagenes/pantera-rosa.png';
import superPoderosas from '../imagenes/superpoderosas.jpg';
import coraje from '../imagenes/coraje.png';



// export let images = [
//     'https://icongr.am/devicon/android-original.svg?size=128&color=currentColor',
//     'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
//     // 'https://icongr.am/devicon/c-original.svg?size=128&color=currentColor',
//     // 'https://icongr.am/devicon/codeigniter-plain.svg?size=128&color=currentColor',
//     // 'https://icongr.am/devicon/cplusplus-original.svg?size=128&color=currentColor',
//     // 'https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor',
//     // 'https://icongr.am/devicon/gitlab-original.svg?size=128&color=currentColor',
//     // 'https://icongr.am/devicon/grunt-original.svg?size=128&color=currentColor',
//     // 'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
//     // 'https://icongr.am/devicon/java-original.svg?size=128&color=currentColor'
// ].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5)

export let images = [dexter,arnold, tomJerry, panteraRosa, superPoderosas, coraje 
].flatMap((image) => [`a|${image}`, `b|${image}`]).sort(() => Math.random() - 0.5)