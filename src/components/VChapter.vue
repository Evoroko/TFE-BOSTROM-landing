<template>
    <div class="chap" :class="{ 'chap--playable': playable }" :style="{'--bg-img': 'url(/' + background + '.png)', '--bg-img-retina': 'url(/' + background + '@2x.png)'}">
        <div class="chap__name">
            <h3 class="chap__index">{{ index }}</h3>
            <h4 class="chap__title">{{ title }}</h4>
        </div>

        <p><small class="chap__available">{{ available }}</small></p>
    </div>
</template>

<script setup>

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

    @media (-webkit-min-device-pixel-ratio: 2){ 
        background: linear-gradient(89.97deg, rgba(13, 13, 13, 0.9) 63.32%, rgba(13, 13, 13, 0.33) 99.97%), var(--bg-img-retina);
    }

    @media (min-width: 992px){ 
       flex-basis: calc(33% - 8px);
    }


    &--playable{
        border-left: 4px solid var(--c-txt);
    }

    &__index{
        font: var(--agrandir-default);
    }

    &__title{
        font: var(--agrandir-25px-light)
    }

    &__available{
        font: var(--agrandir-16px-bold);
    }

    &__name{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }
}

</style>