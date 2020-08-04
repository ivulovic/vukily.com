<script>
  import PageHeader from "../../components/PageHeader.svelte";
  let pageName = "Blog Page";
  const title = { path: "/blog", title: "Blog" };
  const links = [
    { path: "/blog/category-one", title: "Category" },
    { path: "/blog/not-handled", title: "Not Found" },
  ];
</script>

<PageHeader {title} {links} />
