import { createApp, onMounted } from 'vue'
import './style.scss'
import App from './App.vue'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { CSSPlugin } from 'gsap/CSSPlugin.js';

createApp(App).mount('#app')


// Greensock
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSPlugin)
gsap.from('.topBg--prota', {
    opacity: 0,
    y: '20vh',
    duration: 1
})

gsap.from('.topBg--bg', {
    opacity: 0,
    duration: 1,
    delay: .5,
    scale: 1.1
})

gsap.to('.topBg--prota', {
    scale: .8,
    scrollTrigger: {
        trigger: '.topBg',
        start: 'top top',
        end: 'bottom top',
        scrub: .1
    }
})

gsap.fromTo('.topBg--bg', {
    scale: 1,
    scrollTrigger: {
        trigger: '.topBg',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    }
},{
    scale: 1.2,
    scrollTrigger: {
        trigger: '.topBg',
        start: 'top top',
        end: 'bottom top',
        scrub: .2
    }
});

if(window.innerWidth > 992){
    gsap.from('.title--blockLeft', {
        x: 200,
        scrollTrigger: {
            trigger: '.title--slideAnim',
            start: 'top bottom',
            end: 'bottom top',
            scrub: .2
        }
    })

    gsap.from('.title--blockRight', {
        x: -100,
        scrollTrigger: {
            trigger: '.title--slideAnim',
            start: 'top bottom',
            end: 'bottom top',
            scrub: .2
        }
    })
}



gsap.from('.chap', {
    y: 100,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
        trigger: '.chap',
        start: 'top bottom'
    }
})


gsap.from('.icon', {
    y: 100,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
        trigger: '.icons',
        start: 'top bottom'
    }
})

gsap.from('.slider__control--prev', {
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.slider',
        start: 'top center'
    }
})
gsap.from('.slider__control--next', {
    x: -100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.slider',
        start: 'top center'
    }
})

gsap.fromTo('.chara__img', {
    x: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.slider',
        start: 'top center'
    }
},{
    x: 0,
    opacity: 1,
    scrollTrigger: {
        trigger: '.slider',
        start: 'top center'
    }
})

const gameplayPoints = document.querySelectorAll('.gameplayPoint')
for(let i = 0; i < gameplayPoints.length; i++){
    if(i % 2 == 0){
        gsap.from(gameplayPoints[i], {
            x: -100,
            opacity: 0,
            scrollTrigger: {
                trigger: gameplayPoints[i],
                start: 'top bottom'
            }
        })
    }else{
        gsap.from(gameplayPoints[i], {
            x: 100,
            opacity: 0,
            scrollTrigger: {
                trigger: gameplayPoints[i],
                start: 'top bottom'
            }
        })
    }

}


gsap.from('.topAnim', {
    delay: .5,
    y: 100,
    opacity: 0,
    stagger: .2
})



const tlVote = gsap.timeline({
    scrollTrigger: {
        trigger: '.result',
        start: 'middle bottom'
    }
});

tlVote
    .from('.result__percentage', {
        onStart: () => {
            risePercentage();
            lowerPercentage();
        },
        x: 100,
        duration: 2
    })
    .from('.result__winner .result__name', {
        x: 200,
        duration: 2
    }, '<')
    .from('.result__loser .result__name', {
        x: 50,
        duration: 2
    }, '<')
    .from('.result__winner .result__img', {
        x: '20%',
        duration: 1
    }, '<')
    .from('.result__loser .result__img', {
        x: 20,
        duration: 1
    }, '<');

const tabs = document.querySelectorAll('.tab');
let currentActiveTab = 0;
for(let i = 0; i < tabs.length; i++){
    tabs[i].addEventListener('click', () => {
        if(currentActiveTab !== i){
            currentActiveTab = i;
            percentageDefaultToWinner = 50;
            percentageDefaultToLoser = 50;
            tlVote.restart();
        }

    })
}


let percentageWinner = 73.8;
let percentageLoser = 26.2;
let percentageDefaultToWinner = 50;
let percentageDefaultToLoser = 50;

const percentageWinnerEl = document.querySelector('.result__winner .result__percentage');
const percentageLoserEl = document.querySelector('.result__loser .result__percentage');


function risePercentage() {
    setTimeout(() => {
        percentageDefaultToWinner += 0.8;
        if(percentageDefaultToWinner < percentageWinner){
            risePercentage();
        }else{
            percentageDefaultToWinner = percentageWinner;
        }
        percentageWinnerEl.innerHTML = (Math.round(percentageDefaultToWinner * 10) / 10) + '%';
    }, 50)

}

function lowerPercentage() {
    setTimeout(() => {
        percentageDefaultToLoser -= 0.8;
        if(percentageDefaultToLoser > percentageLoser){
            lowerPercentage();
        }else{
            percentageDefaultToLoser = percentageLoser;
        }
        percentageLoserEl.innerHTML = (Math.round(percentageDefaultToLoser * 10) / 10) + '%';
    }, 50)
}


gsap.from('.video', {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.video',
        start: 'middle bottom'
    }
})

gsap.from('.anim--bottom', {
    y: 100,
    opacity: 0,
    stagger: .2,
    scrollTrigger: {
        trigger: '.section--bottom',
        start: 'middle bottom'
    }
})




