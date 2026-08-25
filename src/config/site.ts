/**
 * Central site configuration.
 *
 * All company/contact details live here as placeholders — edit this single
 * file (plus the message files in /messages) to finalize the real content.
 */

export type SolutionSlug =
  | "web-development"
  | "mobile-app-development"
  | "consulting"
  | "branding"
  | "seo";
  

export const siteConfig = {
  name: "Wiesmann Software Engineering",
  shortName: "Wiesmann SE",
  domain: "https://wiesmann-se.ch",
  founder: "Matthias Wiesmann",

  contact: {
    // Placeholder contact details — replace with the real ones.
    email: "m.wiesmann@wiesmann-se.ch",
    addressLines: [
      "Wiesmann Software Engineering",
      "Bächirainstrasse 4",
      "6422 Steinen",
      "Schweiz",
    ],
    // Optional: Formspree (or similar) endpoint for the static contact form.
    // Leave empty to fall back to a mailto: submission.
    formEndpoint: "",
  },

  socials: [
    // Placeholder social profiles — replace hrefs with real URLs.
    { label: "LinkedIn", href: "https://www.linkedin.com/in/matthias-wiesmann/" },
    { label: "GitHub", href: "https://github.com/MatthiasWiesmann21" },
  ],

  solutions: [
    "web-development",
    "mobile-app-development",
    "consulting",
    "branding",
    "seo",
  ] as SolutionSlug[],
} as const;
