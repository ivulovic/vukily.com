<script>
  import Meta from "../../components/Meta.svelte";

  export let params = {};
  export let content;
  export let basePath;
  let articles = [];
  let metadata = {};

  $: {
    let currentPage = content.pages.find(
      (x) => x.path === "/" + params.category
    );
    if (currentPage) {
      articles = currentPage.articles;
    }
    metadata = {
      title: currentPage.title,
      description: currentPage.description,
    };
  }
</script>

<style>
  .title {
    font-style: normal;
    color: var(--text);
    line-height: 1.4em;
    text-align: justify;
    margin: 1.5em 0 0.8em;
    letter-spacing: 0.03em;
    text-decoration: none;
    font-family: "Roboto Condensed", sans-serif;
    margin-bottom: 0px;
    margin-top: 0px;
    font-weight: 500;
    font-size: 1.4rem;
    transition: color 0.3s ease;
  }
  .description {
    line-height: 2rem;
    font-size: 1rem;
    margin: 10px 0px 0px 0px;
    text-align: justify;
    color: var(--text);
    line-height: 24px;
    font-family: "Roboto", sans-serif;
  }
  main {
    display: grid;
    grid-row-gap: 1rem;
  }
  a {
    text-decoration: none;
  }
  a:hover .title {
    color: var(--primary);
  }
</style>

<Meta {metadata} />
<main>
  {#if !articles.length}
    <h2 class="title">Ne postoji nijedan zapis u ovoj kategoriji</h2>
  {/if}
  {#each articles as article}
    <div class="article">
      <a href="{basePath}/{params.category}{article.path}">
        <h2 class="title">{article.title}</h2>
        <p class="description">{article.description}</p>
      </a>
    </div>
  {/each}
</main>
