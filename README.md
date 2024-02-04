# Nuxt 3 template system for Laravel v. 8

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Used stack:

- #### Tailwind CSS
  * CSS framework
  * Module docs: https://tailwindcss.nuxtjs.org/
  * TailwindCSS docs: https://tailwindcss.com/docs/installation

- #### Nuxt Image
  * Image compiler etc. Recommended to use on every image.
  * Module docs: https://v1.image.nuxtjs.org/

- #### Pinia
  * Vue store for setting global variables etc.
  * Module docs: https://nuxt.com/modules/pinia

- #### AOS
  * Animate on scroll library
  * Library docs: https://michalsnik.github.io/aos/

- #### Google Fonts
  * Add google fonts to project
  * Library docs: https://google-fonts.nuxtjs.org/


## Setup

> Use latest Node.js if possible, minimum version is 16.10.0

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm (recommended)
pnpm install
```

### Development Server

Start the development server on `http://localhost:3000`.
Before start, please make sure you set your .env file correctly.

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# or just
nuxt dev
```

### Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview
```

## Working directory

### assets
- Mainly for custom files.
- Fonts directory as well as google-fonts.css file are created automatically via google fonts module
- main.css file serves as helper for Tailwind - if you need to add some global classes, you can do it here

### components
- Serves as place for storing all components:
  - effects - if you need some reusable effect, such as DynamicNumber component
  - elements - all reusable smaller components
  - layout - base components
  - modules - all components asociated with Admin Modules
  - placeholders - if you need to create some placeholder for lazy loading

### composables
- This we use for some helper files usually.

### config
- Storing config files including locales.

### pages
- Here you need to create file for your pages.
- Search documentation to better understand how it works.

### public
- This folder serves for your public files. Such as icons or whatever.

### nuxt.config.ts
This is where you do all settings, import new moduls etc.
- multilanguage must be setted correctly here - via. i18n
  - directories might stay named with czech slugs and via this module you give theme alternatives for every other language
- google fonts are imported here
- runtimeConfig serves as a SAFE place to put all variables you need to load in your pages

## More help

Look for more help inside /wiki.
