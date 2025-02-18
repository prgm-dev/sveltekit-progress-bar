<script lang="ts">
  import { ProgressBar } from "$lib/index.js";

  const { children } = $props();

  let progressBar: ProgressBar;
</script>

<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/fast">Fast load</a></li>
    <li><a href="/slow">Slow load</a></li>
    <li><a href="/redirects">Redirected load</a></li>
  </ul>
</nav>

<ProgressBar color="#7F57F1" bind:this={progressBar} />

<!-- Actions -->
<span>Actions:</span>
<button
  onclick={() => {
    progressBar.start();
  }}>Start</button
>
<button
  onclick={() => {
    progressBar.complete();
  }}>Complete</button
>

<main>
  {@render children()}
</main>
