import type { PageLoad } from "./$types.js";

export const load = (async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
}) satisfies PageLoad;
