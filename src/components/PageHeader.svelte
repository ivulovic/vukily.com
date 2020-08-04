<script>
  import { Route, active } from "tinro";
  export let title;
  export let links = [];
</script>

<style>
  .page-header {
    margin: 25px 0px;
  }
  .page-header .section-nav-wrapper {
    margin: 0px 0px 15px 0px;
    align-items: center;
  }
  .page-header h1 a {
    line-height: 1.24;
    margin: 1.2rem 0px;
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
    justify-content: space-between;
  }
  .page-header .section-nav-container li {
    list-style: none;
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
  }
</style>

<div class="page-header">
  <ul class="flex-row section-nav-wrapper">
    <li class="base section-nav-container">
      {#if title}
        <h1>
          <a href={`${title.path}`}>{title.title}</a>
        </h1>
      {/if}
      {#each links as link}
        <li key={link.path}>
          <a use:active href={`${link.path}`}>{link.title}</a>
        </li>
      {/each}
    </li>
  </ul>
</div>
