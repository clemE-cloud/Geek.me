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
| **Circles** | Groups of up to 8 with one shared weekly XP goal. Friends circles are for ages 16+; family circles can include children, added by their parent. Join with a 6-character code or an invite link (`#/join/CODE`). Reaching the goal earns everyone the Better together badge, and the in-circle ranking is optional. Members see only first names, pictures and weekly XP. |

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

There are 100 lessons in 13 constellations. Each constellation has its own file in `src/data/packs/`, and each lesson keeps its standard version, its simpler version for ages 6–12 and its sources together.

1. Open the pack you want, e.g. `src/data/packs/diver.ts`, and append a lesson to `lessons`. The comment at the top of `src/data/packs/index.ts` shows the format.
2. Write the simpler version in the lesson's `young` field. Use short sentences, everyday words and 3 options per question, and keep the same number of questions.
3. Add at least one source link, and fact-check the lesson against it.
4. If any question makes sense without reading the lesson first, list its index in `daily` so it can be a daily question.
5. Run `npm test`. It checks that ids are unique, every lesson has a source, a simpler version and 3 questions with valid answers, lessons stay short, the simpler sentences stay under 25 words, and right answers aren't all in the same position.

Lessons unlock in the order they appear in their pack. To add a new constellation, copy one of the pack files and add it to `PACKS` in `src/data/packs/index.ts`.

Don't change or reuse an `id` once it's published, because saved progress uses it.

## Deploy free on GitHub Pages

Pushing to `main` runs `.github/workflows/deploy.yml`. It tests and builds the app, then publishes `dist/` to the `gh-pages` branch, which GitHub Pages serves.

The app is at **https://geekme.io** (a custom domain: the workflow publishes a `CNAME` file, and the domain's DNS points at GitHub Pages). If it doesn't appear, open **Settings → Pages** and check that the source is **Deploy from a branch**, using the `gh-pages` branch and the `/ (root)` folder.

## Project layout

```
src/
  data/packs/  the lessons, one file per constellation
  lib/         game rules and content selection (pure, unit-tested), dates, storage, sharing, state hook, router
  components/  shell, quiz, star map, meters, results
  screens/     onboarding, today, sky, lesson, review, collection, circles, profile
public/        manifest, icons, service worker
```

## Growth plan

See [`docs/growth-plan.md`](docs/growth-plan.md) for research on how to grow the app and what to build next.

## Accounts (Supabase)

There are two kinds of account:

- **Learner accounts** for anyone 16 or older.
- **Parent accounts**, where a parent adds a profile for each child under 16. Each child's lessons and look follow their age (under-13s get simpler lessons and no links out of the app). Children never sign up or sign in themselves. On a shared device the app opens on "Who's learning?", and opening the parent's profile, where account and family settings live, needs a quick adult check.

Signing up is optional: everything works as a guest on one device, and a guest's profiles join the account when they sign in.

- Sign-in uses a one-time email link or code, so there are no passwords.
- Guest progress is merged into the account on first sign-in (`src/lib/merge.ts`), without counting the same day twice.
- Changes are saved in the browser immediately and sent to Supabase a moment later (`src/lib/cloud.ts`), so the app keeps working offline.
- The project address and publishable key are in `src/lib/supabase.ts`. They're safe to publish, because the row-level security rules in `supabase/schema.sql` only let each person read and write their own row. Never put a secret or service-role key in the app.

The **Profile** tab is where people manage everything: picture, name, learning settings, taking a break (missed weeks during a break don't end a run), family profiles, signing in and out, changing email, downloading their data, starting over, and deleting their account. Deleting calls the `delete_my_account()` database function in `supabase/schema.sql`, which can only delete the caller's own account. The Privacy page (`#/privacy`) explains what's stored and gives a contact address.

Setup in the Supabase dashboard:

1. **Database:** SQL Editor → New query → paste `supabase/schema.sql` → Run.
2. **Site address:** Authentication → URL Configuration → Site URL `https://<your-username>.github.io/<repo-name>/`. Add `http://localhost:5173/` under Redirect URLs for local development.
3. **Email code:** Authentication → Emails → Magic Link template. Add `{{ .Token }}` to the message, so people can type the code instead of tapping the link. This is useful when the email opens in a different browser from the installed app.
4. **Email sending:** Supabase's built-in email service is for testing only and sends to very few addresses. Before real users sign up, connect your own email provider under Authentication → Emails → SMTP Settings.

## Upgrading from Daily Spark v1

If you used the original single-page version on the same site, your learned lessons, review schedule and XP are imported automatically the first time you open Geek.me.
