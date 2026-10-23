/*
 * Plain-language privacy notice. Keep it in step with what the app actually stores
 * (src/lib/types.ts, supabase/schema.sql) and who it relies on (hosting, email, fonts).
 */
export function Privacy() {
  return (
    <article className="stack legal">
      <button className="icon-btn" onClick={() => history.back()} aria-label="Back">
        ←
      </button>
      <h1>Privacy</h1>
      <p className="note">Last updated 23 October 2026</p>

      <h2>What we store</h2>
      <ul>
        <li>
          For each learner: a first name, an age group, a picture choice, settings, and learning progress (lessons finished, quiz
          results, XP, the review schedule, daily question answers and any breaks).
        </li>
        <li>
          If you create an account: your email address, and the sign-in records our login provider keeps to keep your account
          secure.
        </li>
      </ul>
      <p>
        We don't show ads, we don't use tracking or analytics tools, and we don't sell or share your data with anyone for
        marketing.
      </p>

      <h2>Circles</h2>
      <p>
        If you join a circle, the other members can see each member's first name, picture and XP for the week, and whether a
        member is a child. They can't see anything else, such as email addresses or which lessons you've done. Children can
        only be added to family circles, by their parent. You can leave a circle, or take your child out of one, at any time.
      </p>

      <h2>Children</h2>
      <p>
        Nobody under 16 can have their own account. Children learn on a profile that a parent or guardian creates and manages from
        their own account. For a child's profile we store only a first name, an age group and their learning progress. Children
        under 13 don't see links that leave the app.
      </p>

      <h2>Where it's kept</h2>
      <ul>
        <li>As a guest, everything stays in this browser on this device.</li>
        <li>
          With an account, your progress is stored with Supabase, our database and login provider, on servers in Ireland (EU).
        </li>
        <li>
          The app is hosted on GitHub Pages, and its fonts load from Google Fonts. Like any website, these services see your
          device's IP address when they send you the app.
        </li>
        <li>Sign-in emails are sent through our email provider.</li>
      </ul>

      <h2>Your choices</h2>
      <ul>
        <li>Change your details, or a child's, at any time in Profile.</li>
        <li>Download all your data from Profile → Your data.</li>
        <li>
          Delete your account from Profile → Your data. This removes your account and all its progress, including children's
          profiles, straight away. Copies may remain in routine backups for a short time before they're overwritten.
        </li>
        <li>As a guest, you can delete everything on your device from the same place.</li>
      </ul>

      <h2>Contact</h2>
      <p>
        For questions about your data, or if you'd like us to delete it for you, email{" "}
        <a href="mailto:cewinsm@gmail.com">cewinsm@gmail.com</a>.
      </p>
    </article>
  );
}
