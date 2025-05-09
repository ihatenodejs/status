# status

[![Next.js](https://img.shields.io/badge/Next.js-black?logo=next.js&logoColor=white)](https://nextjs.org)
[![Unlicense](https://img.shields.io/badge/-Unlicense-555555.svg?style=flat&labelColor=808080&logoColor=white&logo=Unlicense)](https://unlicense.org)

[LibreCloud](https://librecloud.cc)'s status monitor

## Donate

You can donate to [LibreCloud](https://librecloud.cc) to support this and other projects with the below link(s).

- [Donate with Stripe](https://donate.stripe.com/6oE8yxaPk6yXbpS145)

## Stack

- [Next.js](https://nextjs.org)
- [shadcn/ui](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

## Customize `status`

You can customize `status`, even with limited TypeScript/Next.js knowledge. We've created a `/src/config` directory to make this as easy as possible.

### Modify services

You can modify the monitored services by editing the `/src/config/Services.ts` file. Replace the services you want with the desired URLs you would like to monitor, and `status` will do the rest!

### App Name/Branding

Branding customization is easy! You may modify `/src/app/page.tsx` to change the title and description of the page, and `/src/app/layout.tsx` to modify metadata.