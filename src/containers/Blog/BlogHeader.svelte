<script>
  import PageHeader from "../../components/PageHeader.svelte";
  let pageName = "Blog Page";
  export let title;
  export let links;
  // const title = { path: "/blog", title: "Blog" };
  // const links = [
  //   { path: "/stav", title: "Stav" },
  //   { path: "/razvoj", title: "Razvoj" },
  //   { path: "/licno", title: "Lično" },
  //   // { path: "/blog/not-handled", title: "Not Found" },
  // ];
</script>

<PageHeader {title} {links} />
