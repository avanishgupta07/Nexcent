# Nexcent Next.js Landing Page

Pixel-focused implementation of the supplied Nexcent hero screenshot using:

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Server Components by default
- Structured content in `data/site.ts`

## Run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Structure

- `app/` — App Router entry points and global styles
- `components/` — reusable presentation components
- `data/` — structured page content
- `public/images/` — supplied hero visual crop

The page content is passed into components from `data/site.ts`, rather than being embedded in presentation components.

## Added sections

The page now includes the supplied designs for client logos, community cards, detail section, testimonial, blog cards, CTA banner, and footer. Content is kept in `data/site.ts` and rendered through reusable components.
