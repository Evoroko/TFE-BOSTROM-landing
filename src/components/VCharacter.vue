<template>
    <div class="chara">
        <div class="chara__info">
            <h3 class="chara__name title title--medium">{{ name }}</h3>
            <p class="chara__description">{{ description }}</p>
        </div>

        <div class="chara__img">
            <img
                :src="'/characters/' + image + '.png'"
                :srcset="'/characters/' + image + '.png 1x, /characters/'+ image + '@2x.png 2x'"
                :alt="'Représentation dessinée de ' + name">
        </div>

        
        <div class="chara__bg" :style="{'--bg-img': 'url(/characters/' + image + '.png)', '--bg-img-retina': 'url(/characters/' + image + '@2x.png)'}"></div>

        
    </div>
</template>


<script setup>

const props = defineProps({
    name: {
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
    }
})

</script>

<style lang="scss">

.chara{
    display: flex;
    flex-direction: column-reverse;
    height: 80vh;
    position: relative;
    align-items: end;
    margin-top: 32px;
    display: none;
    overflow: hidden;
    

    &--active{
        display: flex;
    }
    

    &__img{
        height: 100%;
        position: absolute;
        bottom: 0;
        z-index: -5;
        animation: slideSide 0.3s ease-out;
        
        img{
            height: 100%;
        }
    }

    &__bg{
        opacity: .3;
        position: absolute;
        background-image: var(--bg-img);
        background-size: 180%;
        background-position: -200px top;
        background-repeat: no-repeat;

        @media (-webkit-min-device-pixel-ratio: 2){ 
            background-image: var(--bg-img-retina);
        }

        width: 100%;
        height: 100%;
        z-index: -6;
        
        animation: slideUp 1s ease-out;
    }

    &__info{
        background: linear-gradient(0deg, rgba(13,13,13,1) 0%, rgba(13,13,13,0.8) 20%, rgba(13,13,13,0.8) 100%);
        position: relative;
        width: 100%;

        & > *{
            margin-bottom: 8px;
        }

        &::before{
            content: "";
            position: absolute;
            top: -48px;
            height: 48px;
            width: 100%;
            background: linear-gradient(180deg, rgba(13,13,13,0) 0%, rgba(13,13,13,0.8) 100%);
        }
    }

    &__name{
        text-align: left;
        animation: slideSideLeft 0.4s ease-out;
    }

    &__description{        
        animation: slideSideLeft 0.4s ease-out;
        animation-delay: .1s;
        animation-fill-mode: backwards;
    }

    &__name, &__description{
        padding: 0 16px;
    }

}

@keyframes slideSide {
    0% {
        transform: translateX(20%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
    }
}

@keyframes slideUp {
    0% {
        transform: translateY(5%);
        opacity: 0;
    }

    20%{
        opacity: .3;
    }

    100% {
        transform: translateY(0%);
    }
}

@keyframes slideSideLeft {
    0% {
        transform: translateX(-10%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
    }
}


</style>