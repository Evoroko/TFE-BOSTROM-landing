<template>
    <div class="slider">
        <a href="#" class="slider__control slider__control--prev" @click.prevent="prevIndex">Précédent</a>
        <a href="#" class="slider__control slider__control--next" @click.prevent="nextIndex">Suivant</a>
        <ul class="chara__container">
            <VCharacter v-for="(character, index) of characters" :key="index" :class="{ 'chara--active': activeIndex === index }"
                :name="character.name"
                :description="character.description"
                :image="character.image"
            />
        </ul>


        <div class="icons">
            <VCharaIcon
                v-for="(character, index) of characters" :key="index"
                :class="{ 'icon--active': activeIndex === index }"
                @click="changeIndex(index)"
                :image="character.image"
                />
        </div>
    </div>
    



</template>

<script setup>
import VCharacter from './VCharacter.vue'
import VCharaIcon from './VCharaIcon.vue'
import characters from './characters.js'
import { ref, onMounted } from 'vue';

const activeIndex = ref(0);

const changeIndex = (newIndex) => {
    activeIndex.value = newIndex;
}

onMounted(() => {
    document.addEventListener('keydown', (e) =>{
        if(e.keyCode == 37) prevIndex();
        if(e.keyCode == 39) nextIndex();
    })
})

const prevIndex = (e) => {
    if(activeIndex.value == 0){
        activeIndex.value = characters.length - 1;
    }else{
        activeIndex.value -= 1;
    }

    if(e){
        e.target.classList.add('slider__control--animLeft');
        e.target.addEventListener('animationend', () => {
            e.target.classList.remove('slider__control--animLeft');
        })
    }

}

const nextIndex = (e) => {
    if(activeIndex.value == characters.length - 1){
        activeIndex.value = 0;
    }else{
        activeIndex.value += 1;
    }

    if(e){
        e.target.classList.add('slider__control--animRight');
        e.target.addEventListener('animationend', () => {
            e.target.classList.remove('slider__control--animRight');
        })
    }

}


</script>

<style lang="scss">

.icons{
    margin-top: 16px;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    gap: 40px;
    overflow-y: hidden;
    height: 95px;
    position: relative;
    @media(min-width: 992px){
        filter: drop-shadow(-2px -2px 8px rgba(13, 13, 13, 0.3));
        justify-content: center;
        height: 128px;
        width: 600px;
        margin: -192px auto 160px auto;
        overflow: visible;
        flex-wrap: wrap;
        column-gap: 48px;
        row-gap: 0px;
    }
}

.slider{
    position: relative;

    &::after{
        content: "afficher plus →";
        position: absolute;
        bottom: -24px;
        right: 16px;
        color: var(--c-txt);
        font-style: italic;

        @media(min-width: 992px){
            display: none;
        }
    }

    @media(min-width: 992px){
        height: 100vh;
        max-height: 800px;

        &::before{
            content: "";
            position: absolute;
            width: 1200px;
            height: 400px;
            transform: rotate(-45deg);
            left: -40%;
            top: 10%;
            background: linear-gradient(0deg, rgba(13, 13, 13, 0.4), rgba(13, 13, 13, 0.4)), url(/plexus.svg);
            background-size: contain;
            background-repeat: no-repeat;
            z-index: -11;
        }
    }

    
    &__control{
        display: none;
        filter: drop-shadow(-2px -2px 3px rgba(0, 0, 0, 0.5));

        @media(min-width: 992px){
            background-repeat: no-repeat;
            background-position: center;
            width: 48px;
            height: 48px;
            display: block;
            overflow: hidden;
            text-indent: 100%;
            position: absolute;
            top: 50%;
            transform: translate(0, -50%);
            z-index: 10;
            animation-duration: .2s;
            animation-timing-function: ease-in-out;
        }
        

        &--prev{
            background-image: url(/arrow-left.svg);
            left: 16px;

            @media(min-width: 1328px){
                left: -16px;
            }
        }

        &--next{
            background-image: url(/arrow-right.svg);
            right: 16px;

            @media(min-width: 1328px){
                    right: -16px;
            }
        }

        &--animLeft{
            animation-name: arrow-left;
        }

        &--animRight{
            animation-name: arrow-right;
        }
    }
}


@keyframes arrow-left {
    0%{
        transform: translate(0, -50%);
    }

    50%{
        transform: translate(8px, -50%);
    }

    100%{
        transform: translate(0, -50%);
    }
}

@keyframes arrow-right {
    0%{
        transform: translate(0, -50%);
    }

    50%{
        transform: translate(-8px, -50%);
    }

    100%{
        transform: translate(0, -50%);
    }
}

</style>