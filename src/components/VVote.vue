<template>
    <div class="mainContent mainContent--diamondBg">
        <div class="tabList__container grid-start-01 grid-end-04">
            <ul class="tabList">
                <VVoteTab :active="true" @which-tab="activeTab = $event; whichTab()">Vote préliminaire</VVoteTab>
                <VVoteTab @which-tab="activeTab = $event; whichTab()">Prologue (en cours)</VVoteTab>
                <VVoteTab @which-tab="activeTab = $event; whichTab()">Chapitre 1 (à venir)</VVoteTab>
            </ul>
        </div>

        <div class="tabContent tabContent--active grid-start-05 grid-end">
            <p>«&nbsp;Vous qui détenez le pouvoir d'influencer le cours de l'histoire, choisissez l'allié que vous souhaitez mettre en avant.&nbsp;»</p>
            <div class="result">
                <div class="result__loser">
                    <img class="result__img" src="/assets/characters/lio.webp" srcset="/assets/characters/lio.webp 1x, /assets/characters/lio@2x.webp 2x" alt="Lio, perdant du vote.">
                    <p class="result__name">Lio</p>
                    <p class="result__percentage">50%</p>
                </div>
                <div class="result__winner">
                    <img class="result__img" src="/assets/characters/roxy.webp" srcset="/assets/characters/roxy.webp 1x, /assets/characters/roxy@2x.webp 2x" alt="Roxy, vaincqueur du vote.">
                    <p class="result__name">Roxy</p>
                    <p class="result__percentage">50%</p>
                </div>
            </div>
        </div>

        <div class="tabContent tabContent--toCome grid-start-05 grid-end">
            <p>Jouez au prologue de BOSTROM pour influencer le futur chapitre 1.</p>
            <VButton>Jouer</VButton>
        </div>

        <div class="tabContent grid-start-05 grid-end">
            <p>Vote à paraître lors de la publication du chapitre 1.</p>

        </div>

    </div>
    
</template>

<script setup>
import VVoteTab from './VVoteTab.vue';
import VButton from './VButton.vue';
import gsap from 'gsap';
import { ref, onMounted } from 'vue';

const activeTab = ref(0);

let tabContents = [];

onMounted(() => {
    tabContents = document.querySelectorAll('.tabContent');
})

const whichTab = () => {
    for(let tabContent of tabContents){
        tabContent.classList.remove('tabContent--active');
    }
    tabContents[activeTab.value].classList.add('tabContent--active')
}



</script>

<style lang="scss">



.tabList{
    display: flex;
    width: max-content;
    gap: 8px;
    position: relative;

    @media(min-width: 992px){
        flex-direction: column;
        width: 100%;;
    }

    &__container{
        overflow-x: scroll;
        width: 100%;

        @media(min-width: 992px){
            overflow-x: visible;
            border-right: 1px solid var(--c-txt);
            display: flex;
            align-items: center;
        }
    }
}

.tabContent{
    // display: flex;
    flex-direction: column;
    gap: 32px;
    text-align: center;
    justify-content: center;
    padding: 32px 16px 0px 16px;
    margin-top: -33px;
    border-left: 1px solid var(--c-txt);
    border-top: 1px solid var(--c-txt);
    border-right: 1px solid var(--c-txt);
    display: none;
    height: 272px;

    &--toCome{
        align-items: center;
    }

    @media(min-width: 369px){
        height: 240px;

    }

    @media(min-width: 992px){
        border: none;
        animation: slideUp .5s;
    }

    &--active{
        display: flex;
    }
}


.result{
    height: 128px;
    overflow: hidden;
    position: relative;

    @media(min-width: 992px){
        height: 240px;
    }


    &__img{
        width: 200px;
        position: absolute;
        top: -16px;
        z-index: -1;

        @media(min-width: 992px){
            width: 400px;
        }
    }

    &__name{
        rotate: 30deg;
        display: block;
        width: fit-content;
        font: var(--exo-61px-medium-maj);
        font-size: 80px;
        text-transform: uppercase;
        opacity: .2;
        z-index: -3;

        @media(min-width: 992px){
            font-size: 160px;
        }
    }

    &__percentage{
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
        left: 20%;
        bottom: -25%;
        padding-top: 300px;
        padding-bottom: 4px;
        transform: rotate(60deg);
        font: var(--exo-31px-medium-maj);
        filter: drop-shadow(0 0 2px var(--grey-1000));

        @media(min-width: 992px){
            left: 30%;
            bottom: -10%;
        }
    }

    &__winner{

        .result__img{
            right: -64px;
            filter: drop-shadow(-2px -2px 0 var(--main-cyan)) drop-shadow(2px 2px 0 var(--main-magenta));

            @media(min-width: 992px){
                top: -32px;
            }
        }

        .result__name{
            position: absolute;
            top: 0;
            left: 40%;
        }

        .result__percentage{
            background: linear-gradient(0deg, #ffffff31 0%, rgba(255, 255, 255, 0) 76.52%);
        }
    }

    &__loser{

        .result__img{
            left: -48px;
            filter: brightness(50%);
        }

        .result__name{
            position: absolute;
            top: 0;
            left: 10%;
        }

        .result__percentage{
            left: calc(-40px + 20%);
            bottom: -30%;
            font: var(--exo-20px-medium-maj);

            @media(min-width: 992px){
                left: calc(0px + 24%);
                bottom: -16%;
            }
        }
    }
}
</style>