/*
 * The case for Geek.me, with sources. Keep every claim tied to a citation below,
 * and keep figures as the sources state them (see docs/growth-plan.md for the research notes).
 */
const SOURCES = [
  {
    id: 1,
    text: "Fragmented learning from short videos modulates neural activity and connectivity during memory retrieval. npj Science of Learning, 2025.",
    url: "https://www.nature.com/articles/s41539-025-00399-y",
  },
  {
    id: 2,
    text: "Chiossi et al. Short-form videos degrade our capacity to retain intentions. CHI 2023.",
    url: "https://arxiv.org/abs/2302.03714",
  },
  {
    id: 3,
    text: "Gloria Mark, interviewed by the University of California on her research for Attention Span (2023).",
    url: "https://www.universityofcalifornia.edu/news/how-sharpen-your-attention-and-meet-your-goals-2024",
  },
  {
    id: 4,
    text: "Carpenter et al. Appearances can be deceiving: instructor fluency increases perceptions of learning without increasing actual learning. Psychonomic Bulletin & Review, 2013.",
    url: "https://digest.bps.org.uk/2013/05/14/engaging-lecturers-can-breed-overconfidence/",
  },
  {
    id: 5,
    text: "UCL and University of Florida, iScience, 2025: proportion of Americans reading for pleasure fell by 40% over 20 years.",
    url: "https://www.ucl.ac.uk/news/2025/aug/proportion-americans-reading-pleasure-fell-40-over-20-years",
  },
  {
    id: 6,
    text: "National Literacy Trust. Children and young people's reading in 2025.",
    url: "https://literacytrust.org.uk/reading-for-pleasure",
  },
  {
    id: 7,
    text: "Roediger & Karpicke. Test-enhanced learning. Psychological Science, 2006.",
    url: "https://psychology.ecu.edu/wp-content/pv-uploads/sites/216/2019/03/Roediger-Karpicke-2006.pdf",
  },
];

const Cite = ({ n }: { n: number }) => (
  <sup>
    <a href={`#source-${n}`} onClick={(e) => (e.preventDefault(), document.getElementById(`source-${n}`)?.scrollIntoView())}>
      {n}
    </a>
  </sup>
);

export function Why() {
  return (
    <article className="stack legal why">
      <button className="icon-btn" onClick={() => history.back()} aria-label="Back">
        ←
      </button>
      <h1>Why Geek.me</h1>
      <p className="lede">We take in more than ever, and keep very little of it.</p>

      <h2>Watching isn't the same as learning</h2>
      <p>
        A short video can make an idea feel clear. That feeling is real, but it isn't the same as remembering. In a 2025 study, people who learned
        material as a string of short clips remembered less of it than people who watched the same content as one longer video.
        <Cite n={1} /> Another study found that after a session of TikTok, people were worse at remembering to do something they'd planned, which
        wasn't true after the same time on Twitter or YouTube.
        <Cite n={2} />
      </p>
      <p>
        Our attention is moving faster too. Gloria Mark, who has measured how long people stay on one screen before switching, found it fell from
        about two and a half minutes in 2004 to about 47 seconds in recent years.
        <Cite n={3} />
      </p>
      <p>
        And how something is presented changes how much we <em>think</em> we learned, more than how much we did. When students watched a smooth,
        confident speaker, they expected to remember more than students who watched a hesitant one. In the test, both groups did the same.
        <Cite n={4} />
      </p>

      <h2>Curiosity needs room</h2>
      <p>
        Reading for its own sake is fading. On an average day in 2023, 16% of Americans read for pleasure, down about 40% in twenty years.
        <Cite n={5} /> In the UK, only about a third of 8 to 18-year-olds say they enjoy reading in their free time, the lowest level in twenty years
        of asking.
        <Cite n={6} />
      </p>
      <p>
        Curiosity hasn't gone anywhere. People still want to know why the sky is blue or how a fridge works. What's missing is a habit that turns a
        passing question into something you actually know.
      </p>

      <h2>What makes things stick</h2>
      <p>
        Decades of research point the same way: trying to recall something is what makes it last. In a well-known experiment, students who read a
        passage once and then practised recalling it remembered much more a week later than students who reread it several times.
        <Cite n={7} /> Coming back to it after a gap, just as it starts to fade, helps even more.
      </p>

      <h2>So Geek.me works like this</h2>
      <ul>
        <li>One idea at a time, short enough to read in two minutes, with nothing to scroll past.</li>
        <li>Three questions straight after, so you recall it rather than just reading it.</li>
        <li>The questions come back days later, then weeks later, so it stays with you.</li>
        <li>When today's lesson is done, you're done. There's no feed to keep you going.</li>
      </ul>
      <p>
        Videos are a fine way to spark an interest. Geek.me is for what comes next: knowing it a week from now, and being able to explain it to
        someone else.
      </p>

      <h2>Sources</h2>
      <ol className="source-list">
        {SOURCES.map((s) => (
          <li key={s.id} id={`source-${s.id}`}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.text}
            </a>
          </li>
        ))}
      </ol>
    </article>
  );
}
