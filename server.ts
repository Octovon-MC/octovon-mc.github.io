import { serve } from "aleph/server";
import ssr from "aleph/react-ssr";
import routes from "./routes/_export.ts";

if (Deno.args.includes("--dev")) {
	// Enable react refresh
	Deno.env.set("REACT_REFRESH", "true");
}

serve({
	baseUrl: import.meta.url,
	router: { routes },
	ssr,
});
