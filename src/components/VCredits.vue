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
                <div class="credits__el">
                    <h3>Effets sonores</h3>
                    <ul>
                        <li>Objet obtenu — <a class="link" href="https://freesound.org/people/newlocknew/sounds/546970/">newlocknew sur Freesound</a></li>
                        <li>Code correct — <a class="link" href="https://freesound.org/people/Eponn/sounds/619836/">Eponn sur Freesound</a></li>
                        <li>Code incorrect — <a class="link" href="https://freesound.org/people/EminYILDIRIM/sounds/547250/">EminYILDIRIM sur Freesound</a></li>
                        <li>Click — <a class="link" href="https://freesound.org/people/Luis0413/sounds/683048/">Luis0413 sur Freesound</a></li>
                    </ul>
                </div>
                <div class="credits__el">
                    <h3>Vidéos</h3>
                    <ul>
                        <li>Additional Footage Provided By <a class="link" rel="nofollow" href="https://www.videezy.com/abstract/53078-abstract-video-glitch-loop">Videezy</a></li>
                        <li>Free Broll provided by <a class="link" target="_blank" href="https://www.videezy.com/backgrounds/44869-glitch-static-television">Videezy</a></li>
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