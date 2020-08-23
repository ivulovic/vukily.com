<script>
  import { Route, active } from "tinro";
  export let title;
  export let links = [];
</script>

<style>
  /* .page-header {
    margin: 15px 0px 25px 0px;
  }
  .page-header .section-nav-wrapper {
    margin: 0px 0px 15px 0px;
    align-items: center;
  } */
  /* .page-header h1 {
    font-style: normal;
    text-align: justify;
    line-height: 1.24;
    margin: 1.2rem 0px;
    color: var(--text);
    font-size: 3rem;
    font-family: "Roboto Condensed", sans-serif;
    letter-spacing: 0.03em;
    font-weight: 500;
  } */
  /* .page-header h1 a {
    line-height: 1.24;
    margin: 1.2rem 0px;
    margin-right: 1rem;
    font-size: 36px !important;
  }
  .page-header .section-nav-container {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    color: var(--text);
    align-items: center;
    flex-direction: row;
    width: 100% !important;
    padding: 10px 0px;
  }
  .page-header .section-nav-container li {
    list-style: none;
    margin-right: 1rem;
  }
  .page-header .section-nav-container a {
    font-size: 14px;
    text-decoration: none;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-family: "Roboto Condensed", sans-serif;
  }
  .page-header .section-nav-container a:not(.active) {
    color: inherit;
  }
  .page-header .section-nav-container a:not(.active):hover {
    color: var(--primary);
  }

  .page-header .section-nav-container h1 a {
    padding: 0;
    font-weight: 500;
  }
  .page-header .section-nav-container h1 a,
  .page-header .section-nav-container h1 a:hover {
    color: var(--text) !important;
  } */

  .title {
    font-style: normal;
    text-align: justify;
    line-height: 1.24;
    margin: 1.2rem 0px;
    font-size: 3rem;
    text-transform: uppercase;
    display: block;
  }
  .title,
  .subtitle {
    font-family: "Roboto Condensed", sans-serif;
    letter-spacing: 0.03em;
    font-weight: 500;
    text-decoration: none;
    color: var(--text);
  }
  ul {
    margin: 1.2rem 0px;
    align-items: center;
  }
  .subtitle {
    font-size: 1.4rem;
    text-transform: lowercase;
  }
  ul li {
    list-style: none;
  }
  .middot {
    color: var(--text);
    display: inline-block;
    margin: 0px 10px 0px 5px;
  }
  .flex-row {
    display: flex;
    flex-direction: row;
  }
</style>

<div class="page-header">
  {#if title}
    <h1>
      <a class="title" href={`${title.path}`}>{title.title}</a>
    </h1>
  {/if}
  <ul class="flex-row">
    {#each links as link, index}
      <li key={link.path}>
        <a class="subtitle" use:active href={`${title.path}${link.path}`}>
          {link.title}
        </a>
        {#if index !== links.length - 1}
          <span class="middot">&middot;</span>
        {/if}
      </li>
    {/each}
  </ul>
</div>
