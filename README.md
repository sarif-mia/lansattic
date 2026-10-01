# Lansattic Shopify Theme

Custom Shopify storefront theme for **Lansattic**, a jewelry brand focused on natural jade, jadeite, pearls, gemstones, and meaningful objects.

This repository stores the theme source and its change history so updates can be reviewed, tracked, and restored when needed. The theme is based on **Prestige 11.4.0 by Maestrooo**, with custom Lansattic sections, styling, and imagery.

## Theme features

- Modular homepage with collection cards, founder story, brand stories, Five Elements, reviews, and journal sections.
- Custom pages for the brand story, jewelry care, jade standard, FAQ, contact, and shipping information.
- Shared jewelry image banner on collection pages, scaled without cropping on desktop and mobile.
- Shopify product listings, filters, product pages, cart, and customer account templates.
- Theme editor settings for supported text, images, links, and layout options.

## Project structure

| Folder | Contents |
| --- | --- |
| `assets/` | Theme CSS, JavaScript, images, and other static files |
| `blocks/` | Reusable theme blocks |
| `config/` | Global theme settings and saved configuration |
| `layout/` | Base storefront layouts |
| `locales/` | Translation files |
| `sections/` | Configurable page sections, including custom Lansattic sections |
| `snippets/` | Reusable Liquid components |
| `templates/` | Page layouts and section settings |

Local QA artifacts in `qa/`, generated archives in `dist/`, Shopify CLI state, environment files, and dependencies are excluded by `.gitignore`.

## Local development

Use Git, Node.js, and the Shopify CLI, with a Shopify account that has theme access to the store.

```sh
git clone https://github.com/sarif-mia/lansattic.git
cd lansattic
shopify theme dev --store 9mvz1j-wm.myshopify.com
```

Open the preview URL printed by the CLI. Review the affected pages on desktop and mobile, including image cropping, navigation, and product layouts.

Check Liquid and theme files before uploading:

```sh
shopify theme check
git diff --check
```

## Save changes to GitHub

Review changes, stage only the intended files, and create a descriptive commit:

```sh
git status
git diff
git add sections/example.liquid templates/example.json
git commit -m "Describe the theme changes"
git push origin main
```

The paths above are examples; replace them with the files you changed. Include any new image assets or documentation in the same commit when relevant.

## Upload to Shopify

**A GitHub push saves source history; it does not deploy the theme to Shopify.**

List available themes and confirm the destination:

```sh
shopify theme list --store 9mvz1j-wm.myshopify.com
```

The draft used for this project's recent uploads is theme **130612330568**. Upload only the intended files to it:

```sh
shopify theme push \
  --store 9mvz1j-wm.myshopify.com \
  --theme 130612330568 \
  --nodelete \
  --only sections/example.liquid \
  --only templates/example.json
```

Replace the example paths and include dependent snippets or assets. `--nodelete` preserves remote files missing from the local folder; uploaded files still overwrite their remote versions.

Uploading to a draft theme does not publish it. Preview and review the changes before publishing through Shopify.

- [Draft theme preview](https://9mvz1j-wm.myshopify.com/?preview_theme_id=130612330568)
- [Draft theme editor](https://9mvz1j-wm.myshopify.com/admin/themes/130612330568/editor)

## Restore an earlier version

Find the relevant commit and inspect its changes:

```sh
git log --oneline
git show <commit>
```

Restore a particular file from that commit:

```sh
git restore --source=<commit> -- path/to/file
git diff
git add path/to/file
git commit -m "Restore earlier version of file"
git push origin main
```

Replace `<commit>` and `path/to/file` with the actual values. Restore dependent files together when a change spans sections, snippets, templates, or assets. To undo a complete commit while preserving history, use `git revert <commit>`.

A Git restore or revert changes theme files only. Upload the restored files to Shopify separately. Products, collections, menus, store files, and other Shopify admin data are not backed up by this repository.

## Theme attribution

The base theme metadata identifies **Prestige** by **Maestrooo**. Lansattic-specific customizations are maintained in this repository. No additional license is granted here for the base theme or supplied imagery.
