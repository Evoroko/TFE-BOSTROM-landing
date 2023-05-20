<template>
    <li>
        <a class="tab" href="#" @click.prevent="makeActive" :class="{ 'tab--active': active == true}">
            <slot/>
        </a>
    </li>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    active: {
        type: Boolean,
        required: false,
        default: false
    }
})

let whichTab = ref(0);

const emit = defineEmits(['whichTab'])

const makeActive = (e) => {
    const tabs = document.querySelectorAll('.tab');
    for(let i = 0; i < tabs.length; i++){
        tabs[i].classList.remove('tab--active');

        if(e.target == tabs[i]){
            whichTab.value = i;
        }
    }
    e.target.classList.add('tab--active');
    emit('whichTab', whichTab.value);


}

</script>

<style lang="scss">
.tab{
    padding: 16px;
    display: block;
    font: var(--agrandir-20px-light);
    background-color: var(--grey-900);
    box-sizing: border-box;
    border: 1px solid transparent;
    border-bottom: 1px solid var(--c-txt);

    @media(min-width: 992px){
        border: none;
        width: calc(100%);
    }
    
    &--active{
        border: 1px solid var(--c-txt);
        border-bottom: 1px solid transparent;
        background-color: var(--grey-1000);

        @media(min-width: 992px){
            border-right: 1px solid var(--grey-1000);
            border-bottom: 1px solid var(--c-txt);
            width: calc(100% + 1px);
        }
    }
}
</style>