# Aitana & Israel — Wedding Website

A beautiful wedding invitation website built with Next.js 16 and React 19.

## The Couple

**Aitana** & **Israel** are getting married! 🎉

## Features

- ✉️ Digital envelope invitation with animated reveal
- 📖 Our love story timeline
- 💒 Wedding program & schedule
- ✈️ Travel & accommodation info
- 📍 Location details
- 💌 Form

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19
- **Styling:** Tailwind CSS v4
- **Fonts:** Noto Serif + Manrope (Google Fonts)
- **Animation:** Framer Motion

## Getting Started

1. Install dependencies:
```bash
pnpm install
# or
npm install
```

2. Run development server:
```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
pnpm build
pnpm start
```

## Deployment

Deploy on Vercel (recommended):

```bash
pnpm build
vercel deploy --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Project Structure

```
src/
├── app/              # Next.js app router pages
│   ├── layout.tsx    # Root layout with fonts & metadata
│   ├── page.tsx     # Main page (envelope/Home)
│   └── globals.css   # Tailwind + custom styles
├── views/            # Page components
│   ├── home/        # Home page sections
│   └── envelope/    # Envelope invitation
├── widgets/          # Reusable components
│   ├── navbar/
│   └── footer/
└── shared/         # Shared UI utilities
```

## Customization

### Colors & Theme
Edit `src/app/globals.css` to customize:
- `--color-background`
- `--color-on-background`
- Custom wave transitions

### Content
Edit files in `src/views/` to update:
- Wedding story (`OurStorySection.tsx`)
- Program details (`ProgramSection.tsx`)
- Travel info (`TravelSection.tsx`)
- Contact info (`ContactSection.tsx`)

## Credits

- Built with [Next.js](https://nextjs.org)
- Icons by [Lucide](https://lucide.dev)
- Deployed on [Vercel](https://vercel.com)

---

*Made with 💙 for our special day*