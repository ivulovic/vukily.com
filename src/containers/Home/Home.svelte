<script>
  import { onMount } from "svelte";

  import Meta from "../../components/Meta.svelte";

  export let pageHeader;
  let metadata = {
    title: "vukily",
    hideTitleSuffix: true,
    description: "Ivan Vulović",
  };
  onMount(async () => {
    if (location.hostname !== "localhost") {
      gtag("config", "UA-176986597-1", { page_path: location.pathname });
    }
  });
</script>

<style>
  main {
    display: flex;
    color: var(--text);
    flex-direction: column;
  }
  .title {
    font-style: normal;
    text-align: justify;
    line-height: 1.24;
    margin: 1.2rem 0px;
    color: var(--text);
    font-size: 3rem;
  }
  .title,
  .subtitle {
    font-family: "Roboto Condensed", sans-serif;
    letter-spacing: 0.03em;
    font-weight: 500;
  }
  .subtitle {
    font-size: 1.4rem;
  }
  .subtitle a {
    text-decoration: none;
    color: var(--text);
  }
  .subsubtitle {
    font-size: 1.1rem;
  }
  .about {
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    margin: 1.2rem 0px;
    line-height: 1.6rem;
    text-align: justify;
    font-size: 1rem;
  }
  .about a {
    text-decoration: none;
    font-weight: 500;
    color: var(--primary);
  }
  .col-2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* grid-template-columns: 1fr 2fr; */
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    margin: 0px;
    /* margin: 1.2rem 0px; */
  }
  .uppercase {
    text-transform: uppercase;
  }
  ul {
    display: grid;
  }
  ul li {
    list-style: none;
    display: inline-block;
  }
  ul li a {
    font-family: "Roboto", sans-serif;
    display: grid;
    grid-row-gap: 0.5rem;
    text-decoration: none;
    color: var(--text);
    margin: 1.2rem 0px 0px 0px;
  }
  ul li:last-child a {
    margin-bottom: 1.2rem;
  }
  ul li a:hover .link-title {
    color: var(--primary);
  }

  ul li a .link-title,
  ul li a .link-description {
    transition: color 0.3s ease;
  }
  ul li a .link-title {
    font-size: 1rem;
    font-weight: 500;
  }
  ul li a .link-description {
    font-size: 0.9rem;
    text-align: justify;
    line-height: 1.4rem;
  }
  .accent {
    color: var(--accent);
  }
  @media only screen and (max-width: 640px) {
    .col-2 {
      display: flex;
      flex-direction: column;
    }
  }
</style>

<Meta {metadata} />
<main>
  <h1 class="title">IVAN VULOVIĆ</h1>
  <!-- <h2 class="subtitle">
    Bachelor of Science in Informatics &middot; JavaScript Developer &middot;
    Belgrade, Serbia
  </h2> -->
  <!-- <h3 class="about">
    Ovaj sajt postoji jer sam želeo da pokažem svoj način razmišljanja i kako
    koristim tehnologiju. Najveći deo ćete videti u sekciji
    <a href="/blog">Blog</a>. Tu će biti dosta razmišljanja i komentara na razne
    teme iz sveta i generalno dešavanja na tehnološkoj sceni. Ovde ću
    predstaviti i projekte na kojima radim, kao i one koje sam napustio, koji su
    razlozi za sve to, kao i koje jezike koristim dok razvijam aplikacije.
  </h3> -->
  <div class="col-2">
    <div>
      <h2 class="subtitle uppercase">
        <a href={`${pageHeader.title.path}`}>{pageHeader.title.title || ''}</a>
      </h2>
      <ul>
        {#each pageHeader.links as link}
          <li>
            <a href={`${pageHeader.title.path}${link.path}`}>
              <p class="link-title">{link.title}</p>
              <p class="link-description">{link.description}</p>
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <!-- <div>
      <h2 class="subtitle uppercase">Eksperimenti</h2>
      <ul>
        <li>
          <a href="#" tinro-ingore target="new">
            <p class="link-title">Animirani crv</p>
            <p class="link-description">
              Crv koji prolazi kroz sve faze svima nama dobro poznate
            </p>
          </a>
        </li>
      </ul>
    </div> -->
    <!-- <div>
      <h2 class="subtitle uppercase">Projekti</h2>
      <ul>
        <li>
          <a href="https://spisko.com" target="new" tinro-ignore>
            <p class="link-title">2020 &middot; Spisko</p>
            <p class="link-description">Tvoj lični spisak želja</p>
          </a>
        </li>
      </ul>
    </div> -->
    <!-- <strong class="subtitle subsubtitle uppercase"> ... </strong> -->
    <div>
      <h2 class="subtitle uppercase">Kontakt</h2>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/ivulovic/"
            target="new"
            tinro-ignore>
            <p class="link-title uppercase">LinkedIn</p>
            <p class="link-description">Povežimo se</p>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/vukily" target="new" tinro-ignore>
            <p class="link-title uppercase">Twitter</p>
            <p class="link-description">Prozborimo koju</p>
          </a>
        </li>
        <li>
          <a href="https://github.com/ivulovic" target="new" tinro-ignore>
            <p class="link-title uppercase">GitHub</p>
            <p class="link-description">Hajde da radimo</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</main>
