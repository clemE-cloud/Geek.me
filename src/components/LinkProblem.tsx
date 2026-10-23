import { useAuth } from "../lib/auth";

/** Explains a sign-in link that didn't work, e.g. one opened in a different browser. */
export function LinkProblem() {
  const { linkProblem, dismissLinkProblem } = useAuth();
  if (!linkProblem) return null;
  return (
    <div className="link-problem" role="alert">
      <p>{linkProblem}</p>
      <button className="btn ghost small-btn" onClick={dismissLinkProblem}>
        OK
      </button>
    </div>
  );
}
