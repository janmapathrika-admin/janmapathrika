# Janmapathrika GitHub Pages Site

Static Janmapathrika website built with plain HTML, CSS, and minimal vanilla JavaScript. It is designed to run directly on GitHub Pages without React, npm, build tools, package managers, or server-side code.

## Project Structure

- `index.html` - Home page with hero, sections, FAQ, and request form.
- `privacy.html` - Draft Privacy Policy page.
- `terms.html` - Draft Terms page.
- `contact.html` - Contact page with email and Google contact form.
- `styles.css` - Shared visual system and responsive layout styles.
- `script.js` - Mobile navigation and footer year enhancement.
- `assets/` - Local logo, hero image, and favicon placeholders.

## Preview Locally

Open `index.html` directly in a browser. No local server is required.

You can also use a simple static server if preferred, but do not add project dependencies just to preview the site.

## Replace the Logo

Replace `assets/logo-placeholder.svg` with the final logo file, or add a new file under `assets/` and update every logo `<img>` reference in:

- `index.html`
- `privacy.html`
- `terms.html`
- `contact.html`

Keep the path relative, for example `assets/logo.svg`.

## Replace the Hero Image

Replace `assets/hero-placeholder.svg` with the final hero image, or add a new file under `assets/` and update the hero image in `index.html`.

Use meaningful `alt` text if the image communicates content. Keep `alt=""` only when the image is decorative.

## Public Form and Contact Details

The request form, contact form, public contact email, canonical URLs, and social preview image URL have been inserted into the HTML pages. Only public form URLs are used.

Do not paste private edit URLs, Google Sheet URLs, Apps Script code, credentials, or Drive links into the static site.

## Deploy Through GitHub Pages

1. Push the static files to the repository branch used for GitHub Pages.
2. In GitHub, open repository settings.
3. Go to Pages.
4. Select the branch and folder that contain `index.html`.
5. Save and wait for GitHub Pages to publish the site.

## Files That Should Never Contain Secrets

Never place secrets, credentials, private URLs, API keys, Apps Script source, private Google Sheet links, private Drive links, or form-editing URLs in:

- `index.html`
- `privacy.html`
- `terms.html`
- `contact.html`
- `styles.css`
- `script.js`
- `README.md`
- any file under `assets/`

## Test Before Publishing

- Open every page directly in a browser.
- Check all navigation and footer links.
- Resize the browser down to about 320px wide.
- Test the mobile menu with keyboard and mouse.
- Disable JavaScript and confirm navigation links remain usable.
- Confirm iframe URLs are public Google Form URLs.
- Review draft Privacy and Terms content before launch.
- Confirm there are no private URLs, credentials, or internal Google links.
