<script>
  import Meta from "../../components/Meta.svelte";
  import NotFound from "../NotFound.svelte";
  import { createEventDispatcher, onMount } from "svelte";

  const dispatch = createEventDispatcher();
  export let params = {};
  export let content;
  let currentArticle;

  let metadata = {};

  $: {
    let currentPage = content.pages.find(
      (x) => x.path === "/" + params.category
    );

    if (currentPage) {
      currentArticle = currentPage.articles.find(
        (x) => x.path === "/" + params.title
      );
      metadata = {
        title: currentArticle.title,
        description: currentArticle.description,
      };
    }
  }

  onMount(async () => {
    if (!currentArticle.content) {
      dispatch("loadArticleContent", params);
    }
    if (location.hostname !== "localhost") {
      gtag("config", "UA-176986597-1", { page_path: location.pathname });
    }
  });
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
    font-family: "Roboto", sans-serif;
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
    font-family: "Roboto", sans-serif !important;
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

<Meta {metadata} />
<main>
  {#if currentArticle}
    <h2 class="title">{currentArticle.title}</h2>
    <div class="editor ql-container ql-snow">
      {#if currentArticle.content}
        <div class="description ql-editor">
          {@html currentArticle.content}
        </div>
      {/if}
    </div>
  {:else}
    <NotFound />
  {/if}
</main>
