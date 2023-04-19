<template>
    <span class="button">
        <span class="button__txt">
            <slot/>

        </span>
    </span>
</template>

<script setup>

</script>

<style lang="scss">

.button{
    font: var(--exo-20px-medium-maj);
    text-transform: uppercase;
    letter-spacing: .2rem;
    color: var(--grey-black);
    border: none;
    height: 48px;
    width: max-content;
    background-color: transparent;
    box-sizing: border-box;
    transition: .2s;
    cursor: pointer;

    &:hover{
        filter: drop-shadow(-2px -2px 0 var(--main-cyan)) drop-shadow(2px 2px 0 var(--main-magenta));
    }

    &:active{
        filter: drop-shadow(2px 2px 0 var(--main-cyan)) drop-shadow(-2px -2px 0 var(--main-magenta));
    }

    &__txt{
        background-color: var(--c-txt);
        display: flex;
        padding: 8px 24px;
        margin: 0 -16px;
        position: relative;
        z-index: 1;
    
        &::after, &::before{
            content: "";
            position: absolute;
            left: -16px;
            top: 7px;
            z-index: 0;
            width: 32.5px;
            height: 32.5px;
            transform: rotate(45deg);
            background-color: var(--c-txt);
        }

        &::after{
            left: auto;
            right: -16px;
        }
    }
}

</style>