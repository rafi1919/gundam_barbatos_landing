
//intro

const iconpop = document.querySelector('.icon');
anime({
    targets: iconpop,
    scale: 2,
    opacity:[
        {value: 1, duration: 2800},
        {value: 0, duration: 500}
    ],
    easing: 'easeInOutQuad',
    autoplay: true
  });

const introfade = document.querySelector('.intro');
anime({
    targets: introfade,
    opacity:[
        {value:1, duration:2000},
        {value: 0, duration: 100}
    ],
    autoplay:true,
    translateY:[
        {value:'-100vh', delay:3300}
    ]
})

console.log('rap')


//head
const mousep = document.querySelector('.title');

function titlehover (scale,duration,elasticity) {
    anime.remove(mousep);
    anime({
        targets: mousep,
        scale: scale,
        duration: duration,
        elasticity: elasticity,

    });
}

function enterButton() { titlehover(1.2, 800, 400)};
function leaveButton() { titlehover(1.0, 600, 300)};

mousep.addEventListener('mouseenter', enterButton, false);
mousep.addEventListener('mouseleave', leaveButton, false);


//scroll home
const home = document.querySelector('.navhome');

const homescroll = window.document.scrollingElement||window.document.body||
window.document.documentElement;

home.addEventListener('click', () => {
    anime({
        targets: homescroll,
        scrollTop: 0,
        duration: 700,
        easing: 'easeInOutQuad'
    });
});

//scroll lore
const lore = document.querySelector('.navlore');

const lorescroll = window.document.scrollingElement||window.document.body||
window.document.documentElement;

lore.addEventListener('click', () => {
    anime({
        targets: lorescroll,
        scrollTop: 750,
        duration: 700,
        easing: 'easeInOutQuad'
    });
});

//scroll mechanic
const mechanic = document.querySelector('.navmech');

const mechcroll = window.document.scrollingElement||window.document.body||
window.document.documentElement;

mechanic.addEventListener('click', () => {
    anime({
        targets: mechcroll,
        scrollTop: 2100,
        duration: 700,
        easing: 'easeInOutQuad'
    });
});

//scroll build
const build = document.querySelector('.navbuild');

const buildscroll = window.document.scrollingElement||window.document.body||
window.document.documentElement;

build.addEventListener('click', () => {
    anime({
        targets: buildscroll,
        scrollTop: 3000,
        duration: 1000,
        easing: 'easeInOutQuad'
    });
});

