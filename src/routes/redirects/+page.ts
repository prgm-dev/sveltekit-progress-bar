import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types.js";

export const load = (async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	redirect(307, "/fast?redirected");
}) satisfies PageLoad;
