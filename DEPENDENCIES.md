# Open-source dependencies

Dependency inventory for the MACGZ Accelerators catalog site (full transitive graph, SPDX license IDs).

## How the graph was calculated

The site is static HTML, CSS and vanilla JavaScript. There is no `package.json`, lockfile, build step, or bundler, so there are no package-manager dependencies and no transitive tree. The graph was built by scanning `index.html` and `assets/*` for external references (`<link>`, `<script>`, `@import`, `import`, CDN URLs). The accelerator repos the catalog links to are separate projects with their own dependency reviews.

## Dependency table

| Name | Version | License (SPDX) | Source | License evidence | Graph position | Use | Required | Redistributed |
|---|---|---|---|---|---|---|---|---|
| Outfit (font) | Google Fonts latest (weight 500) | OFL-1.1 | https://fonts.google.com/specimen/Outfit | https://github.com/Outfitio/Outfit-Fonts (OFL.txt) | Direct, no transitive deps | Run-time (loaded in the viewer's browser) | Optional (falls back to system font) | No: loaded from fonts.googleapis.com, not bundled |
| Source Sans 3 (font) | Google Fonts latest (400, 600, 700, 400 italic) | OFL-1.1 | https://fonts.google.com/specimen/Source+Sans+3 | https://github.com/adobe-fonts/source-sans (LICENSE.md) | Direct, no transitive deps | Run-time (loaded in the viewer's browser) | Optional (falls back to system font) | No: loaded from fonts.googleapis.com, not bundled |
| GitHub mark glyph (`repo` icon in `assets/icons.js`) | n/a (inline SVG path) | MIT (Primer Octicons) | https://github.com/primer/octicons | https://github.com/primer/octicons/blob/main/LICENSE | Direct, inlined in source | Run-time | Optional | Yes: inlined in `assets/icons.js`. Trademark use of the GitHub logo is separate from the code license. |

All other icons in `assets/icons.js` are simple hand-drawn SVG shapes written for this project.

## Summary

- **Project:** a static catalog website listing MACGZ accelerator repos. Opened locally or hosted as static files.
- **License types found:** OFL-1.1 (two fonts), MIT (one icon path). No copyleft code linked or bundled.
- **Redistribution:** the fonts are not redistributed; they are fetched by the viewer's browser from Google Fonts. The Octicons GitHub glyph is inlined in `assets/icons.js`, which ships with the site (MIT, attribution notice below).
- **Apache projects:** none.

## Attribution

GitHub mark path from Primer Octicons, Copyright (c) GitHub, Inc., MIT License: https://github.com/primer/octicons/blob/main/LICENSE
