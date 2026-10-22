# Geek.me

Learn one curious idea at a time. Geek.me is an installable web app with short lessons on science, history, the mind, money, space and more. It's built for people who are tired of streak guilt and cartoon owls.

## How it works

| | |
|---|---|
| **Your sky** | Lessons are stars, grouped into constellations of related ideas. Start any constellation; each star unlocks the next. |
| **Lesson + quiz** | A 1–2 minute read, a one-line takeaway, then 3 questions. A "rabbit hole" link lets you dig deeper. |
| **Weekly rhythm** | Instead of a daily streak, you choose how many days a week you'll learn (e.g. 4). Rest days never break anything. |
| **Daily goal** | An XP target for the days you do show up. |
| **Focus** | Wrong answers in a new lesson cost focus (max 5). Right answers in Review earn it back. No timers, no paywall. |
| **Spaced review** | Every question comes back: 1, 2, 4, 7, 15, 30, then 60 days as you keep remembering it. Missed ones come back tomorrow. |
| **Collection** | Every finished lesson becomes a collectible fact card you can search and reread, and there are 10 badges to earn. |
| **Circles** | Small study groups with a shared weekly goal and no demotions. *Needs accounts (coming next).* For now it compares you with your own last week. |

Progress is saved in the browser (`localStorage`). It also works offline once loaded, and can be added to a phone's home screen.

## Run it locally

You need [Node.js](https://nodejs.org) 20 or newer.

```sh
npm install
npm run dev        # http://localhost:5173 with live reload
npm test           # unit tests for the game logic
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## Add a lesson

1. Open `src/data/lessons.ts` and append a lesson. The comment at the top shows the format.
2. Add its `id` to a constellation in `src/data/constellations.ts`. Its position in that list decides where it appears on the map.
3. Run `npm test`. It checks that every lesson is in exactly one constellation and that every answer index is valid.

Don't change or reuse an `id` once it's published, because saved progress uses it.

## Deploy free on GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`, which tests, builds and publishes the site.

The first time:

1. On GitHub, open the repository and go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main`, or re-run the workflow from the **Actions** tab.

The app will be at `https://<your-username>.github.io/<repo-name>/`.

## Project layout

```
src/
  data/        lessons and constellations
  lib/         game rules (pure, unit-tested), dates, storage, state hook, router
  components/  shell, quiz, star map, meters, results
  screens/     onboarding, today, sky, lesson, review, collection, circles, profile
public/        manifest, icons, service worker
```

## Accounts (next step)

Progress goes through the `ProgressStore` interface in `src/lib/storage.ts`. Today the only store is `localStore`. To add accounts, implement a cloud store (the plan is Supabase, with sign-in through GitHub, Google or email) and pass it to `<GameProvider store={...}>`. The screens don't need to change. Guest progress can then be uploaded on first sign-in.

## Upgrading from Daily Spark v1

If you used the original single-page version on the same site, your learned lessons, review schedule and XP are imported automatically the first time you open Geek.me.
