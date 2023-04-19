<script setup>
import VButton from './components/VButton.vue'
import VHeader from './components/VHeader.vue'
import VFooter from './components/VFooter.vue'
import VChapter from './components/VChapter.vue'
import VGameplay from './components/VGameplay.vue'
import VSliderchara from './components/VSliderchara.vue'
</script>

<template>
  <VHeader/>

  <main>

    <section class="section--full section--top">
      <div class="mainContent mainContent--centered">
        <h1 class="logo">
          <span class="logo__txt">BOSTROM</span>
        </h1>
        <p>Le visual novel point & click sur navigateur où VOUS avez le pouvoir d’influencer l’histoire.</p>
        <VButton>Jouer</VButton>
      </div>    
    </section>

    <section class="section mainContent--diamondBg">
      <div class="mainContent section__sub">
        <video class="grid-start-03 grid-end-11" src=""></video>
      </div>

      <div class="mainContent section__sub">
        <h2 class="title title__huge grid grid-start-01 grid-end"><span class="title--block grid-start-02 grid-end-08">Une histoire</span> <span class="title--block grid-start-05 grid-end">dans un monde</span> <span class="title--block grid-start-03 grid-end-09">distordu…</span></h2>
        <div class="mainContent__sub grid-start-01 grid-end">
          <p class="grid-start-04 grid-end-10">Anaëlle est une romancière qui a rencontré un petit succès avec son œuvre majeure jusqu’à ce qu’un scandale éclate et qu’elle n’ait d’autre choix que de disparaître aux yeux du public. Désormais au chômage, avec le poids de la vie sur les épaules et seul son cynisme pour la porter, elle n’était pourtant pas au bout de ses peines. Alors qu’elle pensait avoir déjà touché le fond, le monde autour d’elle changea pour laisser place à un univers horrifique, malsain et distordu. Qui aurait cru qu’elle se retrouverait un jour projetée dans le monde du roman qui avait causé sa déchéance&nbsp;?</p>
          <p class="text--highlighted text--centered grid-start-03 grid-end-11">Suivez neuf protagonistes forcés à prendre part aux jeux d’un univers étrange dans lesquels ils parient leurs idéaux, leurs valeurs, ainsi que leurs vies.</p>
        </div>
      </div>
      
      <div class="mainContent">
        <h2 class="title title__huge grid-start-01 grid-end">Chapitres parus</h2>

        <div class="mainContent__sub grid-start-01 grid-end">
          <p class="text--centered grid-start-04 grid-end-10">Chaque nouvelle publication contiendra un nouveau chapitre allant de 20 minutes à une heure de gameplay. L’intervalle de publication n’est pas défini et suivra le rythme de développement.</p>
          
          <VChapter
            class="grid-start-01 grid-end-05"
            :index="'Prologue'"
            :title="'«&nbsp;Le début de la fin&nbsp;»'"
            :available="'Disponible'"
            :playable="true"
            :background="'placeholder'"
          />
          <VChapter
            class="grid-start-05 grid-end-09"
            :index="'Chapitre 1'"
            :title="'«&nbsp;Président manichéen&nbsp;»'"
            :available="'Bientôt disponible — Vote en cours'"
            :playable="false"
            :background="'placeholder'"
          />
          
        </div>
      </div>
    </section>
    

    <section class="section mainContent mainContent--onlySpace">
      <h2 class="title title__huge">Personnages</h2>
      <VSliderchara/>
    </section>

    <section class="section mainContent">
      <h2 class="title title__huge grid-start-01 grid-end">Gameplay</h2>
      <div class="mainContent__sub mainContent__sub--nogrid grid-start-01 grid-end">
          <VGameplay
          :title="'Dans un décor étrange,'"
          :description="'cherchez des indices pour vous échapper en vous déplaçant et en explorant les environs.'"
          :image="'01'"
          :image-alt="'Représentation d\'un décor de BOSTROM, un univers en noir et blanc distordu.'"
        />
        <VGameplay
          :title="'Ramassez des objets'"
          :description="'et utilisez les informations obtenues pour vous en sortir.'"
          :image="'02'"
          :image-alt="'Exemple d\'objet à inspecter et à ramasser.'"
        />
        <VGameplay
          :title="'Profitez de l’histoire'"
          :description="'en lisant les parties Visual Novel qui entourent les phases d’énigmes.'"
          :image="'03'"
          :image-alt="'Interface Visual Novel montrant le personnage de Roxy en train d\'avoir une conversation avec la protagoniste, Anaëlle.'"
        />
      </div>
    </section>

    <section class="section">
      <div class="mainContent section__sub">
        <h2 class="title title__huge grid-start-01 grid-end">Vote</h2>
        <div class="mainContent__sub grid-start-01 grid-end text--centered">
          <p class="grid-start-04 grid-end-10">Votre avis sera requis à maintes reprises lors de la publication des différents chapitres de BOSTROM. Vos choix ont une importance et déterminent le déroulement du scénario&nbsp;—&nbsp;choisissez avec prudence.</p>
          <p class="text--highlighted grid-start-03 grid-end-11">Lorsque vous finissez un chapitre, si le vote est toujours en cours, vous pouvez voter pour le déroulement du prochain chapitre qui paraîtra.</p>
        </div>
      </div>
      
      
      <div class="mainContent mainContent--centered grid">
        <h3 class="title title--medium grid-start-01 grid-end">Résultat du vote préliminaire</h3>
        <p class="text--big grid-start-04 grid-end-10">«&nbsp;Vous qui détenez le pouvoir d'influencer le cours de l'histoire, choisissez l'allié que vous souhaitez mettre en avant.&nbsp;»</p>
        <div class="vote grid-start-05 grid-end-09">
          <img
            class="vote__img"
            src="/vote.png"
            srcset="/vote.png 1x, /vote@2x.png 2x"
            alt="Image de résultat du vote préliminaire avec Roxy en position de vaincqueur à côté de Lio.">
          <div class="vote__result vote__result--loser">
            <h4 class="vote__name">Lio</h4>
            <p>26,2%</p>
          </div>
          <div class="vote__result vote__result--winner">
            <h4 class="vote__name">Roxy</h4>
            <p>73,8%</p>
          </div>
        </div>

      </div>
      
    </section>

    <section class="section--full section--bottom">
      <div class="mainContent mainContent--centered mainContent--bottom">
        <h2 class="title title--light">Découvrez sans plus attendre l'univers de
          <span class="logo"><span class="logo__txt">BOSTROM</span></span>
        </h2>
        <VButton>Jouer</VButton>
      </div>
      
    </section>

  </main>

  <VFooter/>
</template>

<style scoped>

</style>
