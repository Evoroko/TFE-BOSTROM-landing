<template>
    <footer class="footer__container">
        <div class="footer">
            <p class="footer__info">
                <span class="logo logo--smaller"><span class="logo__txt">BOSTROM</span></span>
                <small class="footer__copyright">© Nell Maissin&nbsp;—&nbsp;2023</small>
            </p>
            <ul class="otherLinks">
                <li class="otherLinks__link"><a href="#" @click.prevent="openCredits = true">Crédits</a></li>
                <li class="otherLinks__link"><a href="#" @click.prevent="openCS = true">Case Study</a></li>
            </ul>

            <VCaseStudy :open="openCS" @close-modal="openCS = false"/>
            <VCredits :open="openCredits" @close-modal="openCredits = false"/>
        </div>

        
    </footer>
</template>

<script setup>
import VCaseStudy from './VCaseStudy.vue'
import VCredits from './VCredits.vue'
import { ref } from 'vue';

const openCS = ref(false);
const openCredits = ref(false);

</script>

<style lang="scss">

.footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    max-width: 1200px;
    margin: auto;

    @media(min-width: 992px){
        flex-direction: row;
        justify-content: space-between;
    }

    &__container{
        background-color: var(--grey-black);
        padding: 32px 16px 64px 16px;

        @media(min-width: 992px){
            padding: 16px 32px;
        }
    }

    &__copyright{
        display: block;
        margin-top: 16px;
        font: var(--agrandir-default);
        @media(min-width: 992px){
            margin-top: 0;
        }
    }

    @media(min-width: 992px){
        &__info{
            display: flex;
            align-items: center;
            gap: 32px;
        }
    }
}

.otherLinks{
    display: flex;
    justify-content: center;
    gap: 32px;

    &__link{
        font: var(--exo-16px-medium-maj);
        text-transform: uppercase;
        letter-spacing: .2rem;
        padding-bottom: 4px;
        border-bottom: 1px solid var(--c-txt);
        transition: .3s;

        a:active{
            filter: drop-shadow(-2px -2px 0 var(--main-cyan)) drop-shadow(2px 2px 0 var(--main-magenta));
        }

        &:hover{
            filter: drop-shadow(0 0 3px var(--c-txt));
        }
    }
}

</style>