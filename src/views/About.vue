<template>
  <div class="about">
    <h2 class="about__title">few words</h2>
    <p class="about__text">
      La Tierra, is the way Spanish speaking people call our planet. Others call
      it Zemlja, Chikyū, Talamh, Dünya, Pacha, Pământ etc.<br />Or Earth.
      <br />
      I wonder around this planet for years, looking for inspirations and trying
      to find out how everything works. And how we, the people living on it,
      deal with ourselves and our pale blue dot we all call home.
      <br />Ususally I have camera with me, to immortalize scenes I see. I'll
      keep posting on this page some of these scenes. So you can see our planet
      through my eyes.<br />Hope you'll enjoy your time here. :)
    </p>
    <div class="about__contact">
      <h3 class="about__title">contact</h3>
      <p>
        My name is Michał Krawczyk.<br />If you would like to contact me, fell
        free to send me an email.
      </p>
      <p>And if you are interested in my coding skills, check my Github.</p>
      <div class="about__icons">
        <a
          class="about__bird"
          href="mailto:michal.krawczyk10@gmail.com"
          target="_blank"
          title="michal.krawczyk10@gmail.com"
        >
          <img alt="email icon" src="@/assets/img/birdo.png" /> </a
        ><a
          class="about__github"
          href="https://github.com/michal-krawczyk10/mi-calles"
          title="https://github.com/michal-krawczyk10/mi-calles"
        >
          <img alt="github link" src="@/assets/img/github.png" />
        </a>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.about {
  width: 30%;
  margin: 2rem auto;
  line-height: 2;
  text-align: justify;
  &__title {
    font-size: 1.4rem;
    margin: 1rem;
  }
  &__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    & > * {
    margin: 1rem 2rem;
}
  }
  &__bird > img {
    width: 100px;
  }
  &__github > img {
    width: 80px;
  }
}
</style>