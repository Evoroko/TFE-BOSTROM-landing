<template>
    <header>
        <button class="burgerBtn" aria-label="Menu" @click="toggleMenu" :class="{ 'burgerBtn--open': isBurgerOpen }">
            <svg class="burgerBtn--svg" viewBox="0 0 16 16">
                <rect class="burgerBtn__line burgerBtn__line--top" width="16" height="2" x="0" y="0"></rect>
                <rect class="burgerBtn__line burgerBtn__line--mid" width="16" height="2" x="0" y="6"></rect>
                <rect class="burgerBtn__line burgerBtn__line--bot" width="16" height="2" x="0" y="12"></rect>
            </svg>
            <!-- <small class="burgerBtn__txt">Menu</small> -->
        </button>
        <nav v-if="isBurgerOpen" class="menu">
            <ul class="menu__linksContainer">
                <li class="menu__link"><a href="#" class="menu__link--anim">Teaser</a></li>
                <li class="menu__link"><a href="#" class="menu__link--anim">Histoire</a></li>
                <li class="menu__link"><a href="#" class="menu__link--anim">Personnages</a></li>
                <li class="menu__link"><a href="#" class="menu__link--anim">Gameplay</a></li>
                <li class="menu__link"><a href="#" class="menu__link--anim">Vote</a></li>
            </ul>
            <a href="#" class="menu__link--anim">
                <VButton>Jouer</VButton>
            </a>
        </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import VButton from './VButton.vue';
import gsap from 'gsap';

const isBurgerOpen = ref(false);

const toggleMenu = () => {
    if(isBurgerOpen.value == true){
        const menu = document.querySelector('.menu');
        const burgerSvg = document.querySelector('.burgerBtn');
        menu.classList.add('menu--closingAnim');
        burgerSvg.classList.remove('burgerBtn--open');
        menu.addEventListener("animationend", () => {
            isBurgerOpen.value = !isBurgerOpen.value
        })
    }else{
        isBurgerOpen.value = !isBurgerOpen.value
        setTimeout(() => {
            gsap.from(".menu__link--anim", {
                opacity: 0,
                y: 150,
                stagger: 0.1
            });
        }, 1)

    }
}

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
    height: 100vh;
    position: fixed;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--grey-1000);
    gap: 32px;
    animation-name: slidein;
    animation-duration: .3s;

    &__linksContainer{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }

    &__link{
        font: var(--exo-31px-medium-maj);
        text-transform: uppercase;
        letter-spacing: .2rem;
        overflow-y: hidden;
        width: 100%;
        border-bottom: 1px solid var(--c-txt);
        padding-bottom: 16px;
        width: 270px;
        transition: .1s;

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