<template>
    <div
        class="chap"
        :class="{ 'chap--playable': playable, 'chap--open': chapterOpened == true }"
        :style="{'--bg-img': 'url(../assets/' + background + '.webp)', '--bg-img-retina': 'url(../assets/' + background + '@2x.webp)'}"
        @click="toggleChapter"
    >
        <div class="chap__name">
            <h3 class="chap__index">{{ index }}</h3>
            <h4 class="chap__title">{{ title }}</h4>
        </div>

        <p><small class="chap__available">{{ available }}</small></p>

        <div class="chap__content" :class="{ 'chap__content--open': chapterOpened == true, 'chap__content--second': index == 'Chapitre 1', 'chap__content--third': index == 'Autres chapitres' }">
            <h5 class="chap__subtitle">Résumé</h5>
            <p>{{ summary }}</p>
            <div v-if="index == 'Prologue'" class="chap__vote">
                <h5 class="chap__subtitle">Résultat du vote préliminaire</h5>
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
            <div v-if="index == 'Chapitre 1'" class="chap__vote">
                <h5 class="chap__subtitle">Résultat du vote préliminaire</h5>
                <p>Le vote qui déterminera le déroulement du chapitre 1 est en cours. Jouez au prologue afin d'y avoir accès.</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

const props = defineProps({
    index: {
        type: String,
        required: false
    },

    title: {
        type: String,
        required: false
    },

    available: {
        type: String,
        required: false
    },

    playable: {
        type: Boolean,
        required: false
    },

    background: {
        type: String,
        required: false
    },

    summary: {
        type: String,
        required: false
    }
})

const chapterOpened = ref(false)

const toggleChapter = () => {
    if(window.innerWidth < 992){
        chapterOpened.value = !chapterOpened.value;
    }
}

onMounted(() => {    

    const tlVote = gsap.timeline();

    if(props.index == 'Prologue'){
        tlVote
            .from('.result__percentage', {
                onStart: () => {
                    resetPercantage();
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
    }

    let percentageWinner = 73.8;
    let percentageLoser = 26.2;
    let percentageDefaultToWinner = 50;
    let percentageDefaultToLoser = 50;

    const percentageWinnerEl = document.querySelector('.result__winner .result__percentage');
    const percentageLoserEl = document.querySelector('.result__loser .result__percentage');

    function resetPercantage(){
        percentageDefaultToLoser = 50;
        percentageDefaultToWinner = 50;
    }

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


    
    if(window.innerWidth < 992 && props.index == 'Prologue'){
        chapterOpened.value = true;
    }
    if(props.index == 'Prologue'){
        const chap = document.querySelector('.chap');
        chap.addEventListener('mouseenter', () => {
            tlVote.restart();
        })
        chap.addEventListener('mouseleave', () => {
            tlVote.restart();
        })
    }
})




</script>

<style lang="scss">

.chap{
    background: linear-gradient(89.97deg, rgba(13, 13, 13, 0.9) 63.32%, rgba(13, 13, 13, 0.33) 99.97%), var(--bg-img);
    background-size: cover;
    background-position: center;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-sizing: border-box;
    position: relative;
    color: var(--grey-300);
    z-index: 22;

    @media (-webkit-min-device-pixel-ratio: 2){ 
        background: linear-gradient(89.97deg, rgba(13, 13, 13, 0.9) 63.32%, rgba(13, 13, 13, 0.33) 99.97%), var(--bg-img-retina);
    }

    @media (min-width: 992px){ 
        margin-bottom: 0;
    }

    &--open{
        background: linear-gradient(89.97deg, rgba(13, 13, 13, 0.9) 63.32%, rgba(13, 13, 13, 0.9) 99.97%), var(--bg-img);
        background-size: cover;
        background-position: center;
    }

    &--playable{
        filter: drop-shadow(-2px -2px 0 var(--main-cyan)) drop-shadow(2px 2px 0 var(--main-magenta));
        color: var(--c-txt);
    }

    &__index{
        font: var(--agrandir-default);
    }

    &__title{
        font: var(--agrandir-25px-light)
    }

    &__subtitle{
        font: var(--exo-16px-medium);
        text-transform: uppercase;
        margin-bottom: 8px;
        margin-top: 8px;
        letter-spacing: .1rem;
    }

    &__available{
        font: var(--agrandir-16px-bold);
    }

    &__name{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    &__vote{
        margin-top: 24px;
    }

    &__content{
        opacity: 0;
        transform-origin: center top;
        transition: .2s;
        max-height: 0;
        width: 100%;
        box-sizing: border-box;

        &--open{
            display: block;
            opacity: 1;
            color: var(--c-txt);
            transition: .5s;
            max-height: 500px;
        }
        

        @media (min-width: 992px){
            background-color: var(--grey-black);
            position: absolute;
            top: calc(100% + 4px);
            left: 0;
            width: 150%;
            padding: 16px;
            transform: rotateX(45deg);
            z-index: 999;
            user-select: none;
            touch-action: none;
            pointer-events: none;

            &--second{
                left: -25%;
            }

            &--third{
                left: auto;
                right: 0;
            }
        }
    }

    @media (min-width: 992px){
        &:hover{
            .chap__content{
                opacity: 1;
                color: var(--c-txt);
                height: auto;
                transition: .5s;
                background-color: var(--grey-950);
                transform: rotateX(0);
                max-height: 800px;
                user-select: all;
                touch-action: all;
                pointer-events: all;
            }
        }
    }
    
}

</style>