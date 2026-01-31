# Portfolio

A minimal, responsive developer portfolio built with Next.js 15, React 19, and Tailwind CSS 4.

## Tech Stack

- Next.js 15 (Turbopack)
- React 19
- TypeScript
- Tailwind CSS 4
- next-themes (dark/light mode)
- lucide-react, react-icons

## Features

- Responsive design with mobile navigation
- Dark/light theme toggle
- Smooth scroll navigation
- Skills section with skillicons.dev integration
- Project showcase cards
- Open source contributions timeline
- Visitor counter with localStorage
- OG image generation (edge runtime)

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with theme provider
    page.tsx            # Main page assembling all sections
    globals.css         # Global styles and CSS variables
    opengraph-image.tsx # OG image generation
  components/
    constants/
      data.ts           # All portfolio data (edit this)
    sections/
      navbar.tsx        # Navigation bar
      header.tsx        # Hero section with profile
      skills.tsx        # Technologies and tools
      projects.tsx      # Featured projects
      open-source.tsx   # Open source contributions
      footer.tsx        # Footer with visitor counter
    ui/
      theme-toggle.tsx  # Dark/light mode toggle
      scroll-to-top.tsx # Scroll to top button
```

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Edit `src/components/constants/data.ts` with your information
4. Run development server: `npm run dev`

## Scripts

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run start   # Start production server
npm run lint    # Run ESLint
```

## Deployment

Deploy to Vercel or any platform supporting Next.js.
