<template>
    <li class="chara">
        <div class="chara__info grid">
            <h3 class="chara__name title title--medium grid-start-02 grid-end">{{ name }}</h3>
            <p class="chara__description grid-start-02 grid-end-08">{{ description }}</p>
        </div>

        <div class="chara__img">
            <img
                :src="'./assets/characters/' + image + '.webp'"
                :srcset="'./assets/characters/' + image + '.webp 1x, ' + './assets/characters/'+ image + '@2x.webp 2x'"
                :alt="'Représentation dessinée de ' + name">
        </div>

        
        <div class="chara__bg" :style="{'--bg-img': 'url(../assets/characters/' + image + '.webp)', '--bg-img-retina': 'url(../assets/characters/' + image + '@2x.webp)'}"></div>

        
    </li>
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

    @media(min-width: 992px){
        justify-content: center;
        height: 100%;
        margin-top: 64px;

        &__container{
            height: 100%;
        }
    }



    &--active{
        display: flex;
    }
    

    &__img{
        height: 100%;
        position: absolute;
        bottom: 0;
        z-index: -5;
        animation: slideSide 0.3s ease-out;

        @media(min-width: 992px){
            right: 96px;
        }
        
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
        background-color: transparent;
        @media (-webkit-min-device-pixel-ratio: 2){ 
            background-image: var(--bg-img-retina);
        }
        width: 100%;
        height: 100%;
        z-index: -6;
        
        animation: slideUp 1s ease-out;

        @media (min-width: 992px){
            background: linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 100%), var(--bg-img);
            background-size: 80%;
            background-position: center top;

            @media (-webkit-min-device-pixel-ratio: 2){ 
                background-image: var(--bg-img-retina);
            }
        }
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

        @media (min-width: 992px){
            background: none;

            &::before{
                background: none;
            }
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