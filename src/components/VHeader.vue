<template>
    <header>
        <button class="burgerBtn" aria-label="Menu" @click="toggleMenu" :class="{ 'burgerBtn--open': isBurgerOpen }">
            <svg class="burgerBtn--svg" viewBox="0 0 16 16">
                <rect class="burgerBtn__line burgerBtn__line--top" width="16" height="2" x="0" y="0"></rect>
                <rect class="burgerBtn__line burgerBtn__line--mid" width="16" height="2" x="0" y="6"></rect>
                <rect class="burgerBtn__line burgerBtn__line--bot" width="16" height="2" x="0" y="12"></rect>
            </svg>
            <small class="burgerBtn__txt">Menu</small>
        </button>
        <nav v-if="isBurgerOpen" class="menu menu--hidden">
            <div class="menu__container">
                <div class="menu__main">
                    <img class="menu__logo" src="/assets/logo_min.svg" alt="Logo de BOSTROM.">
                    <ul class="menu__linksContainer">
                        <li class="menu__link menu__link--active" @click="toggleMenu"><a href="#section_0" class="menu__link--anim">Histoire</a></li>
                        <li class="menu__link" @click="toggleMenu"><a href="#section_1" class="menu__link--anim">Personnages</a></li>
                        <li class="menu__link" @click="toggleMenu"><a href="#section_2" class="menu__link--anim">Gameplay</a></li>
                        <li class="menu__link" @click="toggleMenu"><a href="#section_3" class="menu__link--anim">Vote</a></li>
                    </ul>
                </div>
                
                <a href="#" class="menu__link--anim menu__secondary">
                    <VButton :size="'smaller'">Jouer</VButton>
                </a>
            </div>
            
        </nav>
    </header>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import VButton from './VButton.vue';
import gsap from 'gsap';

const isBurgerOpen = ref(true);

const toggleMenu = () => {
    if(window.innerWidth < 992){
        const burgerTxt = document.querySelector('.burgerBtn__txt');
        if(isBurgerOpen.value == true){
            const menu = document.querySelector('.menu');
            const burgerSvg = document.querySelector('.burgerBtn');
            menu.classList.add('menu--closingAnim');
            burgerSvg.classList.remove('burgerBtn--open');
            burgerTxt.innerHTML = "Menu";
            menu.addEventListener("animationend", () => {
                isBurgerOpen.value = !isBurgerOpen.value
            })
        }else{
            isBurgerOpen.value = !isBurgerOpen.value
            burgerTxt.innerHTML = "Fermer";
            setTimeout(() => {
                gsap.from(".menu__link--anim", {
                    opacity: 0,
                    y: 150,
                    stagger: 0.1
                });
            }, 1)

        }
    }

}

let lastScrollPos = 0;

onMounted(() => {
    const bg = document.querySelector('.bg');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu__link');
    const sections = document.querySelectorAll('.section');

    const currentlyActiveSection = ref(0);
    let prevDisplay;

    if(window.innerWidth < 992){
        isBurgerOpen.value = false;
        document.addEventListener('scroll', () => {
            if((sections[0].getBoundingClientRect().y - window.innerHeight / 10) <= 0){
                bg.classList.add('bg--fixed')
            }else{
                bg.classList.remove('bg--fixed')
            }
        })
    }else{
        isBurgerOpen.value = true;
        document.addEventListener('scroll', (e) => {
            if((sections[0].getBoundingClientRect().y - window.innerHeight / 10) <= 0){
                // toggleMenuScroll();
                menu.classList.remove('menu--hidden');
                bg.classList.add('bg--fixed')
            }else{
                menu.classList.add('menu--hidden');
                bg.classList.remove('bg--fixed')
            }

            let currentPosSections = [];
            for(let section of sections){
                currentPosSections.push(section.getBoundingClientRect().y);
            }

            let allAboveNav = [];

            for(let i = 0; i < sections.length; i++){
                if(currentPosSections[i] <= 1){
                    allAboveNav.push(sections[i].id);
                }
            }
            if(allAboveNav[0] && prevDisplay !== allAboveNav[allAboveNav.length - 1]){
                const displayedSection = allAboveNav[allAboveNav.length - 1]
                const displayedSectionIndex = allAboveNav.length - 1;
                prevDisplay = displayedSection;

                for(let menuLink of menuLinks){
                    menuLink.classList.remove('menu__link--active')
                }

                menuLinks[displayedSectionIndex].classList.add('menu__link--active');
            }

            if(sections[sections.length - 1].getBoundingClientRect().bottom < 0 && prevDisplay){
                for(let menuLink of menuLinks){
                    menuLink.classList.remove('menu__link--active')
                }
                prevDisplay = undefined;
            }

        })
    }
})
</script>

<style lang="scss">

.burgerBtn{
    width: 56px;
    height: 56px;
    background-color: var(--grey-1000);
    border: 1px solid var(--c-txt);
    transform: rotate(45deg);
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    top: 24px;
    right: 24px;
    z-index: 101;
    transition: .2s;
    cursor: pointer;

    @media (min-width: 992px){
        display: none;
    }

    &--svg{
        transform: rotate(-45deg);
        width: 32px;
        height: 32px;
        fill: var(--c-txt);
    }

    &__line{
        transition: .3s;
    }

    &__txt{
        font-size: 13px;
        color: var(--c-txt);
        text-align: center;
        font-family: Exo;
        text-transform: uppercase;
        letter-spacing: .05rem;
        position: absolute;
        top: -20px;
    }

    &--open{
        transform: rotate(-45deg);
        transition: .5s;

        .burgerBtn__line--top{
            transform: translate(3px, 2px) rotate(45deg);
        }

        .burgerBtn__line--bot{
            transform: translate(-7px, 5px) rotate(-45deg);
        }

        .burgerBtn__line--mid{
            transition: .3s;
            opacity: 0;
        }

    }
}

.menu{
    width: 100%;
    position: fixed;
    z-index: 100;
    background-color: var(--grey-1000);
    animation-name: slidein;
    animation-duration: .3s;
    height: 100vh;
    transition: .2s;

    @media (min-width: 992px){
        height: 48px;
        animation: none;
    }

    &__container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 32px;
        height: 100vh;
        overflow: hidden;

        @media (min-width: 992px){
            flex-direction: row;
            justify-content: space-between;
            padding: 0 32px;
            box-sizing: border-box;
            height: 100%;
            max-width: 1200px;
            margin: auto;
        }
    }

    &__linksContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;

        @media (min-width: 992px){
            height: 32px;
            flex-direction: row;
            height: 100%;
        }
    }

    &__link{
        font: var(--exo-31px-medium-maj);
        text-transform: uppercase;
        letter-spacing: .15rem;
        overflow-y: hidden;
        width: 100%;
        border-bottom: 1px solid var(--c-txt);
        padding-bottom: 16px;
        width: 270px;
        transition: .1s;

        @media (min-width: 992px){
            font: var(--exo-13px-medium);
            padding-bottom: 0;
            border: none;
            width: auto;
            height: 100%;
            border-top: 2px solid transparent;
            border-bottom: 2px solid transparent;

            a{
                height: 100%;
                display: flex;
                align-items: center;
            }

            &--active{
                border-bottom: 2px solid var(--c-txt);
                box-sizing: border-box;
            }
        }

        &:active{

            & .menu__link--anim{
                filter: drop-shadow(-2px -2px 0 var(--main-cyan)) drop-shadow(2px 2px 0 var(--main-magenta));
            }
        }

        &--anim{
            display: block;
        }
    }

    &--closingAnim{
        animation-name: slideout;
        animation-duration: .3s;
    }

    &__logo{
        display: none;

        @media (min-width: 992px){
            display: block;
            width: 160px;
        }
    }

    &__main{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 48px;

        
        @media (min-width: 992px){
            gap: 64px;
            flex-direction: row;
            height: 100%;
        }
    }

    &__secondary{
        @media (min-width: 992px){
            margin-right: 40px;
        }
    }

    &--hidden{
        @media(min-width: 992px){
            transform: translateY(-100%);
        }
    }
}

@keyframes slidein {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
}

@keyframes slideout {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
}



</style>