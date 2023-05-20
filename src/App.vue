<script setup>
import VButton from './components/VButton.vue'
import VHeader from './components/VHeader.vue'
import VFooter from './components/VFooter.vue'
import VChapter from './components/VChapter.vue'
import VGameplay from './components/VGameplay.vue'
import VSliderchara from './components/VSliderchara.vue'
import VVote from './components/VVote.vue'
import VCursor from './components/VCursor.vue'
import VGlitch from './components/VGlitch.vue'
import { onMounted, ref, computed } from 'vue'

const isDesktop = ref(false);

onMounted(() => {
  if(window.innerWidth > 992){
    isDesktop.value = true;
  }
})


const targetDate = new Date('June 26, 2023 14:00:00 GMT+0200');
let now = new Date();
let diff = targetDate - now;

const days = ref(0);
const hours = ref(0);
const minutes = ref(0);
const seconds = ref(0);



const updateTime = () => {
    if (diff <= 0){
    days.value = 0;
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  }else{
    
    now = new Date();
    diff = targetDate - now;
    days.value = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours.value = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes.value = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    seconds.value = Math.floor((diff % (1000 * 60)) / 1000);
    
    setTimeout(() => {
      updateTime();
    }, 1000)
  }
}

updateTime();



</script>

<template>
  <VCursor v-if="isDesktop"/>
  <VHeader/>
  <VGlitch/>

  <div class="openAnim">
    <video src="/assets/logo_compressed.mp4" autoplay muted></video>
  </div>


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
          <a href="http://nell-maissin.be/projets/tfe/game/"><VButton :size="'medium'">Jouer</VButton></a>
        </div>
        
      </div>    
    </section>

    <section class="section section--diamondBg mainContent--diamondBg" id="section_0">
      <div class="mainContent section__sub">
        <video class="video grid-start-03 grid-end-11" src="/assets/trailer.mp4" controls></video>
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
            :summary="'Anaëlle se retrouve prise au piège en compagnie de Roxy dans un environnement désaturé et étrange. Elles réalisent rapidement qu’elles ne sont pas seules, et que la situation est plus délicate qu’elle n’y paraît.'"
          />
          <VChapter
            class="grid-start-05 grid-end-09"
            :index="'Chapitre 1'"
            :title="'«&nbsp;Président manichéen&nbsp;»'"
            :available="'Bientôt disponible — Vote en cours'"
            :playable="false"
            :background="'chap_1'"
            :summary="'Retrouvez le résumé du chapitre 1 après la publication du résultat du vote.'"
          />
          <VChapter
            class="grid-start-09 grid-end"
            :index="'Autres chapitres'"
            :title="`???`"
            :available="`Plus d'informations à venir`"
            :playable="false"
            :background="'glitch'"
            :summary="'Pas encore disponible.'"
          />
          
        </div>
      </div>
    </section>
    

    <section class="section section--vote" id="section_1">
      <div class="mainContent mainContent--vote">
        <h2 class="title title--huge grid-start-01 grid-end">Impliquez-vous</h2>

        <div class="mainContent__sub mainContent__sub--space mainContent__sub--vote grid-start-01 grid-end">
          <div class="vote__txt grid-start-01 grid-end-07">
            <p>Votre avis est précieux, il vous sera demandé en jeu à chaque fin de chapitre pendant un temps limité. Vos choix ont une importance et détermineront le déroulement du scénario dans le futur — choisissez avec prudence.</p>
            <p class="text--bold">Votez en terminant le prologue de BOSTROM.</p>
          </div>
          
        </div>
      </div>
      <div class="duration__container">
        <div class="duration">
          <div class="duration__content">
            <h3 class="duration__title">Fin du vote pour le chapitre&nbsp;1</h3>
            <p class="timer">
              <span class="timer__el">
                <span class="timer__num">{{ days }}</span>
                <span class="timer__indic">jours</span>
              </span>
              <span class="timer__el timer__el--separator">:</span>
              <span class="timer__el">
                <span class="timer__num">{{ hours }}</span>
                <span class="timer__indic">heures</span>
              </span>
              <span class="timer__el timer__el--separator">:</span>
              <span class="timer__el">
                <span class="timer__num">{{ minutes }}</span>
                <span class="timer__indic">min</span>
              </span>
              <span class="timer__el timer__el--separator">:</span>
              <span class="timer__el">
                <span class="timer__num">{{ seconds }}</span>
                <span class="timer__indic">sec</span>
              </span>
            </p>
            <p class="duration__txt">Terminé le 26/06/2023 à 14h UTC+2.</p>
          </div>
        </div>
      </div>
      
    </section>

    <section class="section section--chara mainContent mainContent--onlySpace" id="section_2">
      <h2 class="title title--huge">Personnages</h2>
      <VSliderchara/>
    </section>

    <section class="section mainContent" id="section_3">
      <h2 class="title title--huge grid-start-01 grid-end">Gameplay</h2>
      <div class="mainContent__sub mainContent__sub--nogrid mainContent__sub--gameplay grid-start-01 grid-end">
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

    <section class="section--full section--bottom">
      <div class="mainContent mainContent--centered mainContent--bottom">
        <h2 class="title title--light anim--bottom">Découvrez l'univers de
          <span class="logo anim--bottom"><span class="logo__txt">BOSTROM</span></span>
        </h2>
        <a class="anim--bottom" href="http://nell-maissin.be/projets/tfe/game/">
          <VButton :size="'medium'">Jouer</VButton>
        </a>
        
        <div class="bottomBg">
          <video class="bottomBg--video" src="/assets/plexus.mp4" muted autoplay loop></video>
        </div>
      </div>
      
    </section>

  </main>

  <VFooter/>
</template>

<style scoped>

</style>
