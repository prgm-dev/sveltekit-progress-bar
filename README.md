# sveltekit-progress-bar

A SvelteKit component that displays a progress bar when the page is loading.

This component is based on the [svelte-progress-bar](https://github.com/saibotsivad/svelte-progress-bar)
component for Svelte. It has been adapted to integrate with SvelteKit.

**If you are looking for a standalone component, check out the original component.**

## Demo

Please refer to the [svelte-progress-bar](https://github.com/saibotsivad/svelte-progress-bar) package for a demo.

## Installation

In a SvelteKit project:

```bash
npm install --save-dev @prgm/sveltekit-progress-bar
```

Using `pnpm`:

```bash
pnpm add --save-dev @prgm/sveltekit-progress-bar
```

## Usage

In a SvelteKit page or layout where you would like to use the component,
for instance in the `src/routes/+layout.svelte` file:

```html
<!-- +layout.svelte -->
<script lang="ts">
    import { ProgressBar } from "@prgm/sveltekit-progress-bar";
</script>

<ProgressBar color="#7F57F1" />
<!-- Or, if you're using Tailwind/Windi: -->
<ProgressBar class="text-green-500" />

<slot />
```

## Bar Color

The progress bar does **not** have a default color, so you will need to set one. You can either set the color as a data property, as a `text-` class if you're using Tailwind/WindiCSS, or override the CSS.

Svelte component:

```html
<!-- Set the CSS color through an attribute: -->
<ProgressBar color="#0366d6" />
<!-- Or, if you're using Tailwind/Windi: -->
<ProgressBar class="text-green-500" />
```

## Other Styles

If you are using some type of navbar at the top of the page, like Bootstrap's,
it is likely that you will need to change the z-index to get the progress bar to appear over the navbar:

```svelte
<ProgressBar color="#7F57F1" zIndex={100} />
```

## Options

You shouldn't need to play with these, they've been selected based on UX design expertise, but they're available if you need them:

-   `minimum` _(number, range: 0-1, default: 0.08)_: The starting percent width use when the bar starts. Starting at `0` doesn't usually look very good.
-   `maximum` _(number, range: 0-1, default: 0.994)_: The maximum percent width value to use when the bar is at the end but not marked as complete. Letting the bar stay at 100% width for a while doesn't usually look very good either.
-   `intervalTime` _(number, default: 700)_: Milliseconds to wait between incrementing bar width when using the `start` (auto-increment) method.
-   `settleTime` _(number, default: 700)_: Milliseconds to wait after the `complete` method is called to hide the progress bar. Letting it sit at 100% width for a very short time makes it feel more fluid.

## Methods

These additional methods are available on an instantiated progress bar:

-   `start()`: Set the width to the minimum and increment until maximum width.
-   `complete()`: Set the width to `100%` and then hide after `settleTime`.
-   `reset()`: Set the width to minimum but do not start incrementing.
-   `animate()`: Start incrementing from whatever the current width is.
-   `stop()`: Stop incrementing and take no further action.
-   `setWidthRatio(ratio: number)`: Stop auto-incrementing and manually specify the width.
