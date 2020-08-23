<script>
  import { blogs as data } from "../../../public/data";
  import NotFound from "../NotFound.svelte";
  export let params = {};
  export let content;
  let currentArticle;
  $: {
    let currentPage = content.pages.find(
      (x) => x.path === "/" + params.category
    );

    if (currentPage) {
      currentArticle = currentPage.articles.find(
        (x) => x.path === "/" + params.title
      );
    }
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
  }
  main {
    color: var(--text);
    font-weight: 400;
    font-family: "Varela Round", sans-serif;
    margin: 1.2rem 0px;
    line-height: 1.6rem;
    text-align: justify;
    font-size: 1rem;
  }
  .description {
    margin: 10px 0px 0px 0px;
  }

  /** QUILL CSS */

  :global(.ql-container.ql-snow) {
    border: none !important;
  }
  :global(.ql-editor) {
    padding: 0px !important;
  }

  :global(.ql-snow a) {
    color: var(--primary) !important;
  }
  :global(.ql-snow h2),
  :global(.ql-snow h1) {
    text-transform: none;
  }
  :global(.ql-editor p) {
    line-height: 2rem;
    font-size: 1rem;
  }
  :global(.ql-editor .ql-size-large) {
    line-height: 2.8rem;
  }
  :global(.ql-editor .ql-size-huge) {
    line-height: 3.6rem;
  }
  :global(.ql-editor a) {
    text-decoration: none !important;
  }
</style>

<main>
  {#if currentArticle}
    <h2 class="title">{currentArticle.title}</h2>
    <div class="editor ql-container ql-snow">
      <div class="description ql-editor">
        {@html currentArticle.content}
      </div>
    </div>
  {:else}
    <NotFound />
  {/if}
</main>
