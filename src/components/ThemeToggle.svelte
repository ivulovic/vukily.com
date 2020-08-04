<script>
  const theme = localStorage.getItem("theme");
  let isDarkThemeEnabled = theme === "dark";
</script>

<style>
  .toggle-checkbox {
    visibility: hidden;
  }
  .toggle {
    cursor: pointer;
    display: inline-block;
    margin-left: 10px;
  }
  .toggle-switch {
    display: inline-block;
    background: var(--background);
    border: 2px solid var(--text);
    width: 48px;
    height: 20px;
    position: relative;
    vertical-align: middle;
  }
  .toggle-switch:before,
  .toggle-switch:after {
    content: "";
  }
  .toggle-switch:before {
    display: block;
    width: 22px;
    height: 16px;
    position: absolute;
    top: 2px;
    left: 2px;
    background: var(--text);
    transition: all 0.33s;
  }
  .toggle-checkbox:checked + .toggle-switch {
    background: var(--background);
    border-color: var(--text);
  }
  .toggle-checkbox:checked + .toggle-switch:before {
    background: var(--text);
    left: 24px;
  }
  .toggle-checkbox {
    position: absolute;
    visibility: hidden;
  }
  .toggle-label {
    margin-left: 5px;
    position: relative;
    top: 2px;
  }
</style>

<label class="toggle">
  <input
    class="toggle-checkbox"
    bind:checked={isDarkThemeEnabled}
    type="checkbox"
    on:change />
  <div class="toggle-switch" />
  <span class="toggle-label" />
</label>
