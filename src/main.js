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
    delay: 2.7,
    y: '20vh',
    duration: 1
})

gsap.from('.topBg--bg', {
    opacity: 0,
    duration: 1,
    delay: 3.2,
    scale: 1.1,
    filter:"blur(10px)"
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


if(window.innerWidth > 992){


    gsap.fromTo('.topBg--bg', {
        scale: 1,
        filter:"blur(0px)",
        scrollTrigger: {
            trigger: '.topBg',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    },{
        scale: 1.2,
        filter:"blur(10px)",
        scrollTrigger: {
            trigger: '.topBg',
            start: 'top top',
            end: 'bottom top',
            scrub: .2
        }
    });

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
}else{
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
    delay: 3,
    y: 100,
    opacity: 0,
    stagger: .2
})






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
        start: '20% bottom'
    }
})

gsap.from('.mainContent__sub--vote', {
    x: -100,
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: '.mainContent__sub--vote',
        start: '80% bottom'
    }
})

gsap.from('.duration', {
    x: 100,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
        trigger: '.duration',
        start: '80% bottom'
    }
})





