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

