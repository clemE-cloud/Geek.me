# Daily Spark

Learn one thing a day. Daily Spark gives you a short lesson each day, then a 3-question quiz to lock it in.

- **Daily lesson.** A 1–2 minute read on science, history, the mind, language, space and more.
- **Quiz.** Three multiple-choice questions, each with a one-line explanation.
- **Streaks and XP.** Finish a lesson each day to build your streak.
- **Spaced review.** Every question comes back later. Get it right and it moves out (1, 2, 4, 7, 15, 30, 60 days); miss it and it comes back tomorrow.
- **Knowledge bank.** Every lesson you finish is saved there, and you can search it and filter by subject.

Progress is saved in your browser's `localStorage`, so there's no account and no server. It stays on the device and browser you use.

When the page runs inside claude.ai, it can also have Claude write new lessons. Outside claude.ai, that option is hidden. When you've read every built-in lesson, the app sends you to Review.

## Files

| File | What it is |
|---|---|
| `index.html` | The app: markup, styles and logic |
| `lessons.js` | The lesson library |

There's no build step and nothing to install.

## Run it locally

Open `index.html` in your browser by double-clicking it.

Or serve the folder:

```sh
npx serve
```

Then open the address it prints, usually http://localhost:3000.

## Add lessons

Open `lessons.js` and add a lesson to the end of the `LIB` array. The comment at the top of the file shows the format:

```js
{id:"b22", subject:"History", title:"Short title",
 body:["Paragraph one.", "Paragraph two.", "Paragraph three."],
 takeaway:"One sentence to remember.",
 qs:[{q:"Question?", o:["A","B","C","D"], a:2, why:"Why C is right."},
     /* two more questions */]},
```

- `id` must be unique, and you shouldn't change it later, because saved progress uses it.
- `a` is the position of the correct option, counting from 0.
- Lessons are served in the order they appear, one a day. New lessons at the end reach people who have already finished the rest.

## Deploy free on GitHub Pages

1. Push this folder to a **public** GitHub repository.
2. On GitHub, open the repository and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**. Pick the `main` branch and the `/ (root)` folder, then click **Save**.
4. After a minute or two, the site is live at `https://<your-username>.github.io/<repo-name>/`.

Every push to `main` updates the site.
