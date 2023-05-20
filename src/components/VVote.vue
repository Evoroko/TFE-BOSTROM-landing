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
            <p>Jouez au prologue de BOSTROM pour accéder au vote et influencer le futur chapitre 1.</p>
            <VButton>Jouer</VButton>
        </div>

        <div class="tabContent grid-start-05 grid-end">
            <p>Vote à paraître lors de la publication du chapitre 1.</p>

        </div>
        
        <p class="text--highlighted grid-start-03 grid-end-11">Lorsque vous finissez un chapitre, si le vote est toujours en cours, vous pouvez voter pour le déroulement du prochain chapitre qui paraîtra.</p>

    </div>
    
</template>

<script setup>
import VVoteTab from './VVoteTab.vue';
import VButton from './VButton.vue';
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



</style>