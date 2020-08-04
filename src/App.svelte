<script>
  import { Route } from "tinro";
  import Header from "./components/Header.svelte";
  import NotFound from "./containers/NotFound.svelte";
  import BlohHeader from "./containers/Blog/BlohHeader.svelte";
  import BlogRoot from "./containers/Blog/BlogRoot.svelte";
  import BlogCategory from "./containers/Blog/BlogCategory.svelte";
  import Home from "./containers/Home/Home.svelte";

  let theme = localStorage.getItem("theme") || "light";

  const onThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    theme = newTheme;
  };
</script>

<style>
  .base {
    margin: 0 8%;
  }
  @media only screen and (max-width: 1024px) {
    .base {
      margin: 0 10px;
    }
  }
  :global(a.active) {
    color: var(--primary) !important;
  }
  :global(*) {
    margin: 0px;
    padding: 0px;
  }
  :global(html),
  :global(body) {
    height: 100%;
  }
  :global(#root) {
    min-height: 100%;
    background-color: var(--background);
  }
  :global(.theme-light) {
    --primary: #19ce7e;
    --text: #000;
    --background: #fff;
    --edge: #f6f6f6;
    --neutral: #9c9999;
  }
  :global(.theme-dark) {
    --primary: #19ce7e;
    --text: #fff;
    --background: #000;
    --edge: #1a1818;
    --neutral: #383636;
  }
</style>

<div id="root" class="theme-{theme}">
  <div class="base">
    <Header on:themeChange={onThemeChange} />
    <Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/blog/*">
        <BlohHeader />
        <Route path="/">
          <BlogRoot />
        </Route>
        <Route path="/category-one">
          <BlogCategory />
        </Route>
        <Route fallback>
          <NotFound />
        </Route>
      </Route>
      <Route fallback>
        <NotFound />
      </Route>
    </Route>
  </div>
</div>
