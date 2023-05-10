<template>
    <dialog open class="modal" v-if="props.open">
        <div class="modal__window">
            <h2 class="title title--huge">Case Study</h2>
            <div class="casestudies">
                <div class="casestudy__container">
                    <a class="casestudy" target="_blank" href="https://medium.com/@nellmaissin/tfe-case-study-n-1-333d83c27336">1</a>
                </div>
                <div class="casestudy__container">
                    <a class="casestudy" target="_blank" href="https://medium.com/@nellmaissin/tfe-case-study-n-2-25eb81f7e1c8">2</a>
                </div>
                <div class="casestudy__container">
                    <a class="casestudy" target="_blank" href="https://medium.com/@nellmaissin/tfe-case-study-n-3-c1921da46cb0">3</a>
                </div>
                <div class="casestudy__container">
                    <a class="casestudy" target="_blank" href="https://medium.com/@nellmaissin/tfe-case-study-n-4-2622b57119e9">4</a>
                </div>
                <div class="casestudy__container">
                    <a class="casestudy" target="_blank" href="https://medium.com/@nellmaissin/tfe-case-study-n-51-1544bcfa1b2d">5</a>
                </div>
                <div class="casestudy__container">
                    <a class="casestudy" target="_blank" href="https://medium.com/@nellmaissin/tfe-case-study-n-6-f84034a88cf8">6</a>
                </div>
                <div class="casestudy__container">
                    <a class="casestudy" target="_blank" href="#">7</a>
                </div>
            </div>

            <VButton aria-label="close" class="modal__close" :miniature="true" @click="closeModal">✖</VButton>
            
        </div>
    </dialog>
    
</template>

<script setup>
import VButton from './VButton.vue';

const emit = defineEmits(['closeModal'])

const props = defineProps({
    open: {
        type: Boolean,
        required: false,
        default: false
    }
})

const closeModal = () => {
    emit('closeModal')
}
</script>

<style lang="scss">

.modal{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: var(--transparent-black-80);
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &__close{
        position: absolute;
        top: 8px;
        right: calc(8px + 8px);

        @media (min-width: 992px) {
            top: 16px;
            right: calc(8px + 16px);
        }
    }
    
    &__window{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        height: 40%;
        min-height: 400px;
        position: relative;
        gap: 24px;
        padding: 16px;
        background-color: var(--grey-950);
        color: var(--c-txt);

        @media(min-width: 700px){
            width: auto;
            height: auto;
            min-height: auto;
            padding: 96px;
        }

        @media(min-width: 992px){
            gap: 32px;
        }
    }
}

.casestudies{
    width: 100%;
    display: flex;
    gap: calc(18px + 8px);
    row-gap: calc(18px + 8px);
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    
    @media(min-width: 345px){
        row-gap: 0;
    }
}

.casestudy{
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    rotate: -45deg;

    &__container{
        rotate: 45deg;
        border: 1px solid var(--c-txt);
        background-color: var(--grey-1000);
        

        &:hover{
            filter: drop-shadow(-2px -2px 0 var(--main-cyan)) drop-shadow(2px 2px 0 var(--main-magenta));
        }

        &:active{
            filter: drop-shadow(2px 2px 0 var(--main-cyan)) drop-shadow(-2px -2px 0 var(--main-magenta));
        }
    }
}

</style>