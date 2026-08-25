import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

// Note: with `output: 'export'` this proxy does NOT run in the built site.
// It only applies during `next dev` and non-static deployments.
export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for files and internal paths.
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
