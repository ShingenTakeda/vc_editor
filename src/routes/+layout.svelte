<script>
    import "../app.postcss"
</script>

<h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  
  <style lang="postcss">
    :global(html) {
      background-color: theme(colors.gray.100);
    }
  </style>

<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/settings">Settings</a>
</nav>

<slot></slot>