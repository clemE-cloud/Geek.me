# Geek.me growth plan

October 2026. A working plan, not a forecast. Numbers from outside sources are marked with where they come from; anything without a source is a judgement call.

## The short version

1. **The daily question is the main sharing mechanism.** Everyone gets the same question, anyone can answer it from a link without signing up, and the result can be shared without giving the answer away. That's the loop that made Wordle spread. It's built.
2. **The biggest risk is running out of lessons, not growth.** There are now 100 lessons, each with a source and a simpler version: roughly six months for someone learning 4 days a week. Keep adding more steadily, and fact-check each one.
3. **The clearest gap in the market is families.** A parent and a child can take the same lesson at two reading levels and talk about it. Duolingo doesn't do that, and it's a reason for adults to tell other adults about the app.
4. **Accounts for under-13s are a legal project.** The US COPPA rule changed in 2025. Keep children's use account-free, or parent-managed, until that work is done.

## What we learned

### Why Wordle spread

- Its share grid shows how you did without showing the answer, so posting it spoils nothing ([Dinogame analysis](https://dinogame.gg/blog/why-is-wordle-so-popular/)).
- The grid looks like a puzzle to people who haven't played, which makes them ask about it ([University of Queensland](https://stories.uq.edu.au/contact-magazine/2022/word-on-wordle/index.html)).
- One puzzle a day for everyone was deliberate. Its creator said a different word for each person wouldn't have caught on the same way, because the shared puzzle is what people talk about (same UQ source).
- 3.3 million people tweeted about it between mid-October 2021 and early 2022, according to a Twitter data scientist's case study ([Dinogame](https://dinogame.gg/blog/why-is-wordle-so-popular/)). Its creator also said most players never posted results publicly, so sharing was done by a small, visible minority.

**What we built from this:** the daily question (`#/daily`). It's the same for everyone on a given date and playable before onboarding. Sharing gives a short line like `Geek.me daily #12 ✓` plus the question text and a link. The question works as a hook, but the answer isn't included.

### How Duolingo grows

- Its marketing is mostly social content and creators. A WSJ-sourced report says less than half its marketing budget goes to performance ads ([Adweek](https://www.adweek.com/brand-marketing/duolingo-duo-owl-marketing-strategy/)). Its social posts don't push people to download, and its CMO calls daily posting a retention driver as well as an acquisition one ([Socialinsider](https://socialinsider.io/blog/duolingo-tiktok-strategy)).
- Growth is large but slowing. One Q2 2025 preview reported 46.6 million daily users, up 49% year on year ([iTiger](https://www.itiger.com/hant/news/1100051276)). An analyst note put the growth rate at 53% in March 2025 and 37% in June.
- Non-language subjects are growing for them too. Maths and Music had about 3 million daily users in early 2025 (same source). That means Duolingo itself is moving into general learning, so being different matters.

**Takeaway:** a recognisable voice on social video matters more than ad spend. We shouldn't copy the owl. Our equivalent is the content itself: lessons are surprising facts, which suit 30-second videos.

### Streak fatigue is real but under-researched

- A survey of 350 university students found that heavy immersion in gamified learning was linked to anxiety and then burnout, and that moderate engagement was the healthier zone ([PMC, 2025](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12913498/)).
- Designers have written about streaks turning from pride into fear after a few weeks ([Yu-kai Chou](https://yukaichou.com/gamification-analysis/streak-design-gamification-motivation-burnout/)) and about "streak creep" ([The Decision Lab](https://thedecisionlab.com/insights/consumer-insights/streak-creep-the-perils-of-too-much-gamification)). These are practitioner opinions, not trials.

**Takeaway:** the weekly rhythm, with nothing that resets after a missed day, is a real point of difference. Lead with it in marketing, but don't overclaim with phrases like "science-backed" or "anxiety-free". The evidence is thin.

### Children and the law

- The amended COPPA rule took effect on 23 June 2025, and most of it had to be in place by 22 April 2026 ([Federal Register](https://www.federalregister.gov/documents/2025/04/22/2025-05904/childrens-online-privacy-protection-rule)). It requires a written data-retention policy and a written security program, and separate parental consent before sharing children's data with third parties ([White & Case summary](https://www.whitecase.com/insight-alert/unpacking-ftcs-coppa-amendments-what-you-need-know)).
- The app today collects nothing. Progress stays in the browser, so none of this applies yet. It applies once accounts, analytics or circles reach under-13s.
- Also check the UK Age Appropriate Design Code and similar EU rules before marketing to children there. This plan hasn't researched them.

**What we built from this:** an under-13 mode has no external links. The Circles copy says children's circles will be family or class groups set up by an adult.

## Who it's for, in order

| Audience | Why they'd care | Where to reach them |
|---|---|---|
| **Adults who quit Duolingo or similar** | Want the habit without the pressure | Short video, Reddit threads about streak burnout, newsletters |
| **Parents of 6–12s** | Same lesson at two levels, read aloud, no ads, no links out | Parenting groups, school newsletters, "screen time that isn't junk" lists |
| **Teachers** | A 2-minute class starter with a shared daily question | Teacher communities, education creators; circles as classes later |
| **Over-65s** | Large text, read aloud, nothing to break | Libraries, community centres, family members setting it up |

## What to build next

Ordered by value for the effort. ✓ means it's done.

**Done in this round**
- ✓ Daily question with share text, playable from a link without onboarding
- ✓ "Today I learned" share on each lesson result
- ✓ Age-adapted lessons, look and text size, plus read aloud
- ✓ Link previews (Open Graph image and text)

**Next (before telling anyone)**
1. ✓ **100 lessons,** each with a simpler version and at least one source shown under "Read more". Next: have a second person fact-check each lesson against its sources. A single wrong fact going viral is the worst outcome for a learning app.
2. **Share as an image,** not just text. Draw the fact card or daily result onto a canvas and share the PNG. Instagram and TikTok stories need images.
3. **A page per lesson** (e.g. `/lessons/why-the-sky-is-blue/`) built at deploy time, with its own link preview. Today everything sits behind `#/` routes, so search engines and link previews only see the home page.
4. **Privacy-friendly counting** with no cookies and no personal data. That means a tool like Plausible, or a self-built counter. Track: daily-link visits, daily answers, share taps, and how many link visitors start onboarding. Leave it off in under-13 mode.

**After that**
5. **Accounts** (Supabase), with progress syncing across devices.
6. **Circles:** friends and family first, classes second. A family circle where everyone does today's lesson at their own level is the feature most likely to be talked about.
7. **"Challenge a friend" on a full lesson:** send your three questions, then compare scores.
8. **Reminders,** opt-in and at most one a day, with no guilt wording. Web push works for installed PWAs, including on iOS 16.4+.
9. **Play Store listing** by wrapping the PWA as a Trusted Web Activity (Google's Bubblewrap tool). It's cheap and gives a store presence without a rewrite.

## Launch sequence

1. **Seed the content (weeks 1–4).** Keep adding lessons. Each lesson is also a 30-second video script: open with the surprising fact, then "the answer's in Geek.me" at the end. Post 3–5 a week from a Geek.me account before launching anything.
2. **Daily question in public (week 3 on).** Post the daily question as a poll on social each morning, linking to `#/daily`. This tests the loop with no spend.
3. **Small launches (weeks 5–6).** Use Product Hunt, a Show HN-style post, and two or three relevant subreddits. Read each subreddit's rules first: large ones such as r/todayilearned restrict self-promotion.
4. **Families and teachers (weeks 6–10).** Contact a handful of parenting and teacher creators. Give them the two-level lesson angle and a free class or family circle once accounts exist.

## Numbers to watch

| Metric | Why | A good early sign |
|---|---|---|
| Daily-link visitors who answer | Is the hook working? | Most of them |
| Answerers who start onboarding | Does the hook convert? | 1 in 5 or better |
| Share taps per daily answer | Is the loop alive? | Rising week on week |
| Week-4 retention | Do people keep coming back? | Better than half of week-1 users still active |
| Lessons finished per active user per week | Is content running out? | Should stay below your lesson count ÷ 8 |

The "good early sign" targets are guesses to revise once real data exists, not benchmarks.

## Writing rules for app copy

These came out of the copy review and apply to all new text:

- Say the thing plainly: "Missing a day doesn't reset anything", not "No guilt, no lost streaks".
- Don't use "not X, it's Y" contrasts, sets of three negatives, or slogans that could appear on a poster.
- Don't take digs at competitors in the product.
- Lessons: one idea per paragraph, real numbers and names, and say so when something is disputed (see the Dunning–Kruger lesson).
- Simpler lessons: sentences of 24 words or fewer (checked by `npm test`), everyday words, and 3 answer options.
