<script setup>
import VButton from './components/VButton.vue'
import VHeader from './components/VHeader.vue'
import VFooter from './components/VFooter.vue'
import VChapter from './components/VChapter.vue'
import VGameplay from './components/VGameplay.vue'
import VSliderchara from './components/VSliderchara.vue'
import VVote from './components/VVote.vue'
import VCursor from './components/VCursor.vue'
import { onMounted, ref } from 'vue'

const isDesktop = ref(false);

onMounted(() => {
  if(window.innerWidth > 992){
    isDesktop.value = true;
  }
})

</script>

<template>
  <VCursor v-if="isDesktop"/>
  <VHeader/>

  <main>
    <div class="bg"></div>
    <section class="section--full section--top">
      <div class="topBg topBg--prota"></div>
      <div class="topBg topBg--bg"></div>
      <div class="mainContent mainContent--top">
        <h1 class="logo topAnim">
          <span class="logo__txt">BOSTROM</span>
        </h1>
        <p class="topAnim">Le visual novel point & click sur navigateur où VOUS avez le pouvoir d’influencer l’histoire.</p>
        <div class="topAnim">
          <VButton :size="'medium'">Jouer</VButton>
        </div>
        
      </div>    
    </section>

    <section class="section section--diamondBg mainContent--diamondBg" id="section_0">
      <div class="mainContent section__sub">
        <video class="video grid-start-03 grid-end-11" src=""></video>
      </div>

      <div class="mainContent section__sub">
        <h2 class="title title--huge title--slideAnim grid grid-start-01 grid-end">
          <span class="title--block title--blockLeft grid-start-02 grid-end-08">Une histoire</span> 
          <span class="title--block title--blockRight grid-start-05 grid-end">dans un monde</span> 
          <span class="title--block title--blockLeft grid-start-03 grid-end-09">distordu…</span>
        </h2>
        <div class="mainContent__sub grid-start-01 grid-end">
          <p class="grid-start-04 grid-end-10">Anaëlle est une romancière qui a rencontré un petit succès avec son œuvre majeure jusqu’à ce qu’un scandale éclate et qu’elle n’ait d’autre choix que de disparaître aux yeux du public. Désormais au chômage, avec le poids de la vie sur les épaules et seul son cynisme pour la porter, elle n’était pourtant pas au bout de ses peines. Alors qu’elle pensait avoir déjà touché le fond, le monde autour d’elle changea pour laisser place à un univers horrifique, malsain et distordu. Qui aurait cru qu’elle se retrouverait un jour projetée dans le monde du roman qui avait causé sa déchéance&nbsp;?</p>
          <p class="text--highlighted text--centered grid-start-03 grid-end-11">Suivez neuf protagonistes forcés à prendre part aux jeux d’un univers étrange dans lesquels ils parient leurs idéaux, leurs valeurs, ainsi que leurs vies.</p>
        </div>
      </div>
      
      <div class="mainContent">
        <h2 class="title title--huge grid-start-01 grid-end">Chapitres parus</h2>

        <div class="mainContent__sub mainContent__sub--space grid-start-01 grid-end">
          <p class="text--centered grid-start-04 grid-end-10">Chaque nouvelle publication contiendra un nouveau chapitre allant de 20 minutes à une heure de gameplay. L’intervalle de publication n’est pas défini et suivra le rythme de développement.</p>

          <VChapter
            class="grid-start-01 grid-end-05"
            :index="'Prologue'"
            :title="'«&nbsp;Le début de la fin&nbsp;»'"
            :available="'Disponible'"
            :playable="true"
            :background="'chap_prologue'"
          />
          <VChapter
            class="grid-start-05 grid-end-09"
            :index="'Chapitre 1'"
            :title="'«&nbsp;Président manichéen&nbsp;»'"
            :available="'Bientôt disponible — Vote en cours'"
            :playable="false"
            :background="'chap_1'"
          />
          <VChapter
            class="grid-start-09 grid-end"
            :index="'Autres chapitres'"
            :title="`???`"
            :available="`Plus d'informations à venir`"
            :playable="false"
            :background="'glitch'"
          />
          
        </div>
      </div>
    </section>
    

    <section class="section mainContent mainContent--onlySpace" id="section_1">
      <h2 class="title title--huge">Personnages</h2>
      <VSliderchara/>
    </section>

    <section class="section mainContent" id="section_2">
      <h2 class="title title--huge grid-start-01 grid-end">Gameplay</h2>
      <div class="mainContent__sub mainContent__sub--nogrid grid-start-01 grid-end">
          <VGameplay
          :title="'Un décor étrange'"
          :description="'Cherchez des indices pour vous échapper en vous déplaçant et en explorant les environs. Prêtez bien attention à ce qui vous entoure — des énigmes tordues vous attendent.'"
          :image="'01'"
          :image-alt="'Représentation d\'un décor de BOSTROM, un univers en noir et blanc distordu.'"
        />
        <VGameplay
          :title="'Des objets à ramasser'"
          :description="`En interagissant avec le décor à l'aide de votre souris, collectionnez tout ce qui pourrait vous être utile, peut-être pourriez-vous en avoir besoin plus tard.`"
          :image="'02'"
          :image-alt="'Exemple d\'objet à inspecter et à ramasser.'"
        />
        <VGameplay
          :title="'Une histoire sombre à découvrir'"
          :description="`Lisez les parties Visual Novel qui entourent les phases d’énigmes afin de découvrir les mystères de ce monde aux côtés des neuf protagonistes.`"
          :image="'03'"
          :image-alt="'Interface Visual Novel montrant le personnage de Roxy en train d\'avoir une conversation avec la protagoniste, Anaëlle.'"
        />
      </div>
    </section>

    <section class="section" id="section_3">
      <div class="mainContent">
        <h2 class="title title--huge grid-start-01 grid-end">Vote</h2>
        <div class="mainContent__sub grid-start-01 grid-end text--centered">
          <p class="grid-start-04 grid-end-10">Votre avis sera requis à maintes reprises lors de la publication des différents chapitres de BOSTROM. Vos choix ont une importance et déterminent le déroulement du scénario&nbsp;—&nbsp;choisissez avec prudence.</p>
          <p class="text--highlighted grid-start-03 grid-end-11">Lorsque vous finissez un chapitre, si le vote est toujours en cours, vous pouvez voter pour le déroulement du prochain chapitre qui paraîtra.</p>
        </div>
      </div>
      
      
      <VVote/>
      
    </section>

    <section class="section--full section--bottom">
      <div class="mainContent mainContent--centered mainContent--bottom">
        <h2 class="title title--light anim--bottom">Découvrez l'univers de
          <span class="logo anim--bottom"><span class="logo__txt">BOSTROM</span></span>
        </h2>
        <VButton :size="'medium'" class="anim--bottom">Jouer</VButton>
      </div>
      
    </section>

  </main>

  <VFooter/>
</template>

<style scoped>

</style>
