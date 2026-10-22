# Geek.me

Two-minute lessons on science, history, the mind, money, space and more, for any age. Geek.me is a web app you can install on your phone's home screen. Missing a day doesn't reset anything.

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
| **Daily question** | One question a day, the same for everyone. Anyone can answer it from a shared link (`#/daily`) without signing up, then share their result. |
| **Any age** | Onboarding asks for an age band. Ages 6–12 get simpler lessons (short sentences, 3-option questions) and no links out of the app; 6–9 also get a brighter look and larger text, and 65+ get larger text. Everyone can change the lesson level, look and text size in Profile. |
| **Read aloud** | Every lesson has a Listen button that uses the device's built-in voice. |
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
2. Add a simpler version with the same `id` to `src/data/lessons-young.ts`. Use short sentences, everyday words and 3 options per question, and keep the same number of questions.
3. Add its `id` to a constellation in `src/data/constellations.ts`. Its position in that list decides where it appears on the map.
4. If any of its questions make sense without reading the lesson first, add them to `DAILY_POOL` in `src/lib/content.ts`.
5. Run `npm test`. It checks that every lesson is in exactly one constellation, that every lesson has a simpler version, that answer indexes are valid, and that the simpler sentences stay short.

Don't change or reuse an `id` once it's published, because saved progress uses it.

## Deploy free on GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`. It tests and builds the app, then publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

The app is at `https://<your-username>.github.io/<repo-name>/`. If it doesn't appear, open **Settings → Pages** and check that the source is **Deploy from a branch**, using the `gh-pages` branch and the `/ (root)` folder.

## Project layout

```
src/
  data/        lessons (standard and young), constellations
  lib/         game rules and content selection (pure, unit-tested), dates, storage, sharing, state hook, router
  components/  shell, quiz, star map, meters, results
  screens/     onboarding, today, sky, lesson, review, collection, circles, profile
public/        manifest, icons, service worker
```

## Growth plan

See [`docs/growth-plan.md`](docs/growth-plan.md) for research on how to grow the app and what to build next.

## Accounts (next step)

Progress goes through the `ProgressStore` interface in `src/lib/storage.ts`. Today the only store is `localStore`. To add accounts, implement a cloud store (the plan is Supabase, with sign-in through GitHub, Google or email) and pass it to `<GameProvider store={...}>`. The screens don't need to change. Guest progress can then be uploaded on first sign-in.

## Upgrading from Daily Spark v1

If you used the original single-page version on the same site, your learned lessons, review schedule and XP are imported automatically the first time you open Geek.me.
