<template>

    <div class="glitch">
        <video src="/assets/glitch-video.mp4" autoplay loop muted></video>
    </div>
    

</template>


<script setup>
import { onMounted } from 'vue';

let glitch;

onMounted(() => {
    glitch = document.querySelector('.glitch');
    activateGlitch();
})

const RandomNum = (min, max) => {
    const n = min + (Math.random() * ((max + 1) - min));
    return n;
}

const activateGlitch = () => {
    glitch.classList.remove('glitch--hidden');
    setTimeout(() => {
        glitch.classList.add('glitch--hidden');
    }, 3900);
}



</script>

<style lang="scss">

.glitch{
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    overflow: hidden;
    opacity: 1;
    touch-action: none;
    user-select: none;
    pointer-events: none;
    z-index: -8;
    filter: grayscale(1);
    mix-blend-mode: screen;
    transition: 2s;
    
    video{
        min-width: 100%;
        min-height: 100vh;
    }

    &--hidden{
        opacity: 0;
    }
}

</style>