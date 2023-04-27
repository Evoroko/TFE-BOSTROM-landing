<template>
    <div class="gameplayPoint__container">
        <div class="gameplayPoint grid">
            <div
                class="gameplayPoint__txt"
                :class="{'grid-start-08': image == '02', 'grid-end': image == '02', 'grid-start-01': image !== '02', 'grid-end-06': image !== '02'}"
                :style="{'--bg-img': 'url(/' + image + '.svg)'}"
            >
                <h3 class="gameplayPoint__title title title--small">{{ title }}</h3>
                <p class="gameplayPoint__description">{{ description }}</p>
            </div>
            <img
                class="gameplayPoint__img"
                :class="{'grid-start-01': image == '02', 'grid-end-07': image == '02', 'grid-start-07': image !== '02', 'grid-end': image !== '02'}"
                :src="'/gameplay-' + image + '.png'"
                :srcset="'/gameplay-' + image + '.png 1x, /gameplay-' + image + '@2x.png 2x'"
                :alt="imageAlt">
        </div>
    </div>
    
</template>

<style lang="scss">

.gameplayPoint{

    &__container{
        overflow: hidden;
    }

    &:not(:last-of-type){
        @media(min-width: 992px){
            margin-bottom: 64px;
        }
    }
    
    & > *:not(:last-child){
        margin-bottom: 16px;
    }

    &__img{
        width: 100%;
        grid-row-start: 1;
    }

    &__txt{
        & > * {
            margin-bottom: 12px;
        }

        @media(min-width: 992px){
            display: flex;
            flex-direction: column;
            justify-content: center;
            background-image: var(--bg-img);
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
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