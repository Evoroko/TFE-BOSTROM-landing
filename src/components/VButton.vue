<template>
    <span class="button" :class="{ 'button--small': size == 'small',  'button--smaller': size == 'smaller', 'button--miniature': miniature == true}">
        <span class="button__txt">
            <slot/>

        </span>
    </span>
</template>

<script setup>

const props = defineProps({
    size: {
        type: String,
        required: false
    },
    miniature: {
        type: Boolean,
        default: false,
        required: false
    }
});

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

    &--small{
        font: var(--exo-16px-medium-maj);

        .button__txt{
            padding: 8px 12px;

            &::after, &::before{
                left: -14px;
                top: 6px;
                width: 28px;
                height: 28px;
                transform: rotate(45deg);
                background-color: var(--c-txt);
                z-index: -1;
            }

            &::after{
                left: auto;
                right: -14px;
            }
        }
    }

    &--smaller{

        @media(min-width: 992px){
            font: var(--exo-13px-medium);
            letter-spacing: .15rem;

            .button__txt{
                padding: 8px 12px;

                &::after, &::before{
                    left: -12px;
                    top: 5.4px;
                    width: 24.5px;
                    height: 24.5px;
                    transform: rotate(45deg);
                    background-color: var(--c-txt);
                    z-index: -1;
                }

                &::after{
                    left: auto;
                    right: -12px;
                }
            }
        }

    }

    &--miniature{
        .button__txt{
            width: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-indent: 3px;

            &::after, &::before{
                z-index: -2;
            }
        }
    }
}

</style>