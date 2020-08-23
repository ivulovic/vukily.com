<script>
  import { createEventDispatcher } from "svelte";
  import Logo from "./Logo.svelte";
  import { active } from "tinro";
  import ThemeToggle from "./ThemeToggle.svelte";
  const dispatch = createEventDispatcher();
</script>

<style>
  header {
    padding: 10px 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
</style>

<header>
  <Logo />
  <ThemeToggle on:change={() => dispatch('themeChange')} />
</header>
