<template>
    <div class="slider">
        <div>
            <VCharacter v-for="(character, index) of characters" :key="index" :class="{ 'chara--active': activeIndex === index }"
                :name="character.name"
                :description="character.description"
                :image="character.image"
            />
        </div>


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
import { ref } from 'vue';

const activeIndex = ref(0);

const changeIndex = (newIndex) => {
    activeIndex.value = newIndex;
}


</script>

<style lang="scss">

.icons{
    margin-top: 16px;
    padding-left: 32px;
    padding-right: 32px;
    display: flex;
    gap: 40px;
    overflow-y: scroll;
    height: 95px;
    position: relative;
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
    }
}
</style>