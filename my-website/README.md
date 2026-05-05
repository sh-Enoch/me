# Personal Portfolio

A fresh Next.js portfolio starter with a simple structure for profile data,
sections, and reusable components.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```text
src/
  app/
    globals.css
    layout.js
    page.js
  components/
    project-card.js
    section-heading.js
    site-footer.js
    site-header.js
  data/
    profile.js
public/
  profile-placeholder.svg
```

## Customize

- Update personal details, skills, projects, and experience in `src/data/profile.js`.
- Replace `public/profile-placeholder.svg` with your portrait or preferred hero image.
- Adjust global styles in `src/app/globals.css`.

## Scripts

- `npm run dev` starts the local dev server.
- `npm run build` creates a production build.
- `npm run start` runs the production server.
- `npm run lint` runs ESLint.

## Deploy

Deploy with Vercel, Netlify, Render, or any platform that supports Next.js.
