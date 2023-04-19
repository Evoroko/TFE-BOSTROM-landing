<template>
    <div class="icon">
        <button class="icon__content"  :style="{'--bg-img': 'url(/characters/' + image + '.png)', '--bg-img-retina': 'url(/characters/' + image + '@2x.png)'}"></button>
    </div>

</template>

<script setup>

const props = defineProps({
    image: {
        type: String,
        required: false
    }
})

</script>

<style lang="scss">

.icon{

    &__content{
        cursor: pointer;
        width: 64px;
        height: 64px;
        background-color: var(--grey-black);
        border: 1px solid var(--c-txt);
        transform: rotate(45deg);
        margin-top: 13px;
        position: relative;
        overflow: hidden;

        @media(min-width: 992px){
            width: 72px;
            height: 72px;
        }

        &::before{
            content: "";
            width: 300%;
            height: 300%;
            display: block;
            position: absolute;
            top: -64px;
            
            background-image: var(--bg-img);
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;

            @media (-webkit-min-device-pixel-ratio: 2){ 
                background-image: var(--bg-img-retina);
            }

            transform: rotate(-45deg);
        }
    }

    

    &--active .icon__content::after{
        content: "";
        width: 80%;
        height: 80%;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid var(--c-txt);
        box-shadow: 0 0 0px 4px rgb(0, 0, 0, .5);
    }
}

</style>