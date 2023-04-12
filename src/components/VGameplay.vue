<template>
    <div class="gameplayPoint">
        <div class="gameplayPoint__txt">
            <h3 class="gameplayPoint__title title title--small">{{ title }}</h3>
            <p class="gameplayPoint__description">{{ description }}</p>
        </div>
        <img
            class="gameplayPoint__img"
            :src="'gameplay-' + image + '.png'"
            :srcset="'gameplay-' + image + '.png 1x, gameplay-' + image + '@2x.png 2x'"
            :alt="imageAlt">
    </div>
</template>

<style lang="scss">

.gameplayPoint{
    
    & > *:not(:last-child){
        margin-bottom: 16px;
    }

    &__img{
        width: 100%;
    }

    &__txt{
        & > * {
            margin-bottom: 4px;
        }
    }
}

</style>



<script setup>

const props = defineProps({
    title: {
        type: String,
        required: false
    },

    description: {
        type: String,
        required: false
    },

    image: {
        type: String,
        required: false
    },

    imageAlt: {
        type: String,
        required: false
    }
})

</script>