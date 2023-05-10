<template>
    <dialog open class="modal" v-if="props.open">
        <div class="modal__window">
            <h2 class="title title--huge">Crédits</h2>
            <div class="credits">
                <div class="credits__el">
                    <h3>Musique</h3>
                    <ul>
                        <li>Musique (exploration, action) — Dorian Maissin</li>
                        <li><a class="link" href="https://www.youtube.com/watch?v=svAspF0nxC0">Horror Ambience</a> — ESN Productions</li>
                    </ul>
                </div>
                <div class="credits__el">
                    <h3>Typographie</h3>
                    <ul>
                        <li>PP Agrandir (personal use) — PangramPangram</li>
                        <li>Exo — Google Fonts</li>
                    </ul>
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

.credits{
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__el{

        @media(min-width: 992px){
            display: grid;
            grid-template-columns: 160px 1fr;
        }
    }
}

</style>