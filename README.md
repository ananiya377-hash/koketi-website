# Koketi Website

A React site for Koketi (Financial & Accounting Consulting), built with Vite.

## Run it locally

```
npm install
npm run dev
```

Opens at http://localhost:5173

## Deploy it for real (recommended: Vercel)

1. Create a free account at https://vercel.com (you can sign up with GitHub).
2. Push this folder to a new GitHub repository.
3. In Vercel, click "Add New Project", select the repo, and click Deploy.
   Vercel auto-detects Vite — no config needed.
4. You'll get a live URL like `koketi.vercel.app` within about a minute.
5. To use your own domain: in the Vercel project, go to Settings → Domains,
   add your domain (e.g. koketi.com), and follow the DNS instructions it
   gives you (usually just adding one or two records at your registrar).

Netlify works the same way if you prefer it instead.

## Making the contact form actually send emails

Right now the contact form only shows a confirmation message locally — it
doesn't send anything anywhere. Easiest fixes, no backend required:

- **Formspree** (https://formspree.io): free tier, gives you an endpoint
  URL, then change the form's `onSubmit` to POST to it.
- **EmailJS** (https://www.emailjs.com): sends straight from the browser
  using your own email account, also has a free tier.

Ask your developer (or come back here) when you're ready to wire this up —
it's a small change once you've picked one.

## Editing content

All the page content and copy lives in `src/App.jsx` — services, About text,
contact details, etc. Just edit the strings directly.


