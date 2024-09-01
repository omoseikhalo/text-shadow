const hero=document.querySelector(".hero");
const text =document.querySelector("h1");
const walk =30;

function shadow(e){
const width = hero.offsetWidth;
const height = hero.offsetHeight;

const x=e.clientX;
const y= e.clientY;


let xWalk = Math.round((x / width * walk) - (walk/2));
let yWalk = Math.round((y / height * walk) - (walk/2));

text.style.textShadow = `
${xWalk}px ${yWalk}px 0 blue,
${xWalk * -1}px ${yWalk * -1}px 0 green,
${yWalk}px ${xWalk}px 0 red,
${yWalk * -1}px ${xWalk}px 0 black`;

}
hero.addEventListener("mousemove", shadow);
