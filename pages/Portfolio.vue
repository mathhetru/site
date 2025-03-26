<template>
  <div id="portfolio">
    <section class="section-orange">
      <h1 class="section-orange__title">Portfolio</h1>
      <div class="section-orange__line"></div>
      <p class="section-orange__text">
        Du crayon au code, je donne vie à vos projets. <br />
        Un projet ? Une idée ? Ou juste un coucou. <br />
      </p>
    </section>
    <NuxtImg
      src="images/waves/wave-orange-down.svg"
      alt="wave blue Mathilde Hétru"
      class="section-blue__wave"
      preload
    />
    <section class="portfolio-container">
      <p class="portfolio-sentences-for-tag">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, officiis
        cumque aperiam officia sint eveniet eum in, quo modi exercitationem
        itaque ducimus expedita mollitia quod quos perferendis eos dolore!
        Quasi!
      </p>
      <span>ou accordions</span>
      <div class="tags">
        <button class="tag all">Tous les projets</button>
        <button class="tag dev-web">Developpement web / site web</button>
        <button class="tag graphic-design">Graphisme print et digital</button>
        <button class="tag all">Illustration professionel / particulier</button>
      </div>
      <div>
        <label for="search">Search :</label>
        <input type="text" id="search" placeholder="Rechercher un projet" />
      </div>
    </section>
    <section class="portfolio-projects-container">
      <!-- <NuxtLink class="projects-mh-section__link_dev-web"> -->
      <div class="projects-mh-section-card">
        <span class="projects-mh-section-card__text">Booki</span>
      </div>
      <div class="projects-mh-section__blue"></div>
      <img
        src="images/mathilde-hetru-booki-OC.jpg"
        alt="Mathilde-Hetru-projet"
        class="projects-mh-section__img"
      />
      <!-- </NuxtLink> -->
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Mes projets - Mathilde Hétru",
  meta: [
    {
      name: "description",
      content:
        "Découvrez mon portfolio en illustration, graphisme et développement web. Un aperçu de mes réalisations et de mon univers créatif.",
    },
    { property: "og:url", content: "https://www.mathildehetru.com/portfolio" },
    { property: "og:title", content: "Mon portfolio - Mathilde Hétru" },
    {
      property: "og:description",
      content:
        "Explorez mon portfolio et découvrez mes créations en illustration, graphisme et développement web !",
    },
  ],
});
</script>
