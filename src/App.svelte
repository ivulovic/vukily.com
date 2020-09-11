<script>
  import { Route } from "tinro";
  import Header from "./components/Header.svelte";
  import NotFound from "./containers/NotFound.svelte";
  import BlogHeader from "./containers/Blog/BlogHeader.svelte";
  import BlogCategory from "./containers/Blog/BlogCategory.svelte";
  import Home from "./containers/Home/Home.svelte";
  import BlogDetails from "./containers/Blog/BlogDetails.svelte";
  import { getBlogContent, getArticleContent } from "./actions/blog";
  import { onMount } from "svelte";

  let content = {};
  let pageHeader = { title: {}, links: [] };
  let blogBasePath;

  const loadArticleContent = async ({ detail }) => {
    const category = "/" + detail.category;
    const title = "/" + detail.title;
    let contentCopy = content;

    const articleContent = await getArticleContent({
      article: title,
      page: category,
    });

    let pages = contentCopy.pages.map((p) => {
      let page = p;
      if (page.path === category) {
        if (page.articles) {
          page.articles = page.articles.map((a) => {
            let article = a;
            if (article.path === title) {
              article.content = articleContent.content;
            }
            return article;
          });
        }
      }
      return page;
    });

    content.pages = pages;
  };

  onMount(async () => {
    content = await getBlogContent();
    blogBasePath = content.path;
    pageHeader = {
      title: { path: content.path, title: content.title },
      links: content.pages.map((c) => ({
        path: c.path,
        title: c.title,
        description: c.description,
      })),
    };
  });

  let theme = localStorage.getItem("theme") || "light";

  const onThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    theme = newTheme;
    document.bgColor = theme === "light" ? "#fff" : "#000";
  };
  document.bgColor = theme === "light" ? "#fff" : "#000";
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
    --neutral: #6d6d6d;
    --accent: #d29b1e;
  }
  :global(.theme-dark) {
    --primary: #19ce7e;
    --text: rgb(232, 230, 227);
    --background: #000;
    --edge: #1a1818;
    --neutral: #afafafde;
    --accent: #d29b1e;
  }
</style>

<div id="root" class="theme-{theme}">
  <div class="base">
    <Header on:themeChange={onThemeChange} />
    <Route>
      <Route path="/">
        <Home {pageHeader} />
      </Route>
      {#if blogBasePath}
        <Route path={`${blogBasePath}/*`}>
          <BlogHeader title={pageHeader.title} links={pageHeader.links} />
          <Route
            path="/"
            redirect={`${blogBasePath}${pageHeader.links.length ? pageHeader.links[0].path : ''}`} />
          <Route path="/:category" let:params>
            <BlogCategory {content} basePath={blogBasePath} {params} />
          </Route>
          <Route path="/:category/:title" let:params>
            <BlogDetails
              {content}
              {params}
              on:loadArticleContent={loadArticleContent} />
          </Route>
          <Route fallback>
            <NotFound />
          </Route>
        </Route>
      {/if}
      <Route fallback>
        <NotFound />
      </Route>
    </Route>
  </div>
</div>
