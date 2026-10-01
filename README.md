# Lansattic Shopify theme

Source files for the Lansattic Shopify theme.

## Version control

After making and reviewing changes:

```sh
git status
git add assets blocks config layout locales sections snippets templates
git commit -m "Describe the theme changes"
git push origin main
```

Add documentation or other new source files explicitly when needed.

View earlier versions with `git log --oneline`. Restore a file from an earlier
commit with `git restore --source=<commit> -- path/to/file`, then review and
commit the restored file.

Generated archives in `dist/`, local QA artifacts in `qa/`, Shopify CLI local
state, and environment files are excluded from version control.
