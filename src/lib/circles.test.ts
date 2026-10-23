import { describe, expect, it } from "vitest";
import { makeProfile } from "./account";
import { circleTotal, inviteText, memberSnapshot, memberWeekXp, sortMembers, weekXp, type Member } from "./circles";
import { addDays, weekStart } from "./dates";
import type { Account } from "./types";

const T = "2026-10-22"; // Thursday
const MON = weekStart(T);
const member = (name: string, xp: number, start: string | null = MON): Member => ({
  circle_id: "c",
  user_id: name,
  profile_id: name,
  display_name: name,
  avatar: "",
  is_child: false,
  week_start: start,
  week_xp: xp,
});

describe("circle maths", () => {
  it("counts only this week's XP", () => {
    const p = makeProfile("self", "Ada", "18-64");
    p.state.xpByDay = { [MON]: 10, [T]: 15, [addDays(MON, -1)]: 99 };
    expect(weekXp(p.state, T)).toBe(25);
  });

  it("treats rows from an earlier week as zero", () => {
    expect(memberWeekXp(member("a", 40), T)).toBe(40);
    expect(memberWeekXp(member("b", 40, addDays(MON, -7)), T)).toBe(0);
    expect(memberWeekXp(member("c", 40, null), T)).toBe(0);
    expect(circleTotal([member("a", 40), member("b", 30), member("c", 99, addDays(MON, -7))], T)).toBe(70);
  });

  it("sorts by name, or by XP when the ranking is shown", () => {
    const ms = [member("Cleo", 10), member("Ade", 30), member("Ben", 30)];
    expect(sortMembers(ms, false, T).map((m) => m.display_name)).toEqual(["Ade", "Ben", "Cleo"]);
    expect(sortMembers(ms, true, T).map((m) => m.display_name)).toEqual(["Ade", "Ben", "Cleo"]);
    ms[0].week_xp = 50; // Cleo
    expect(sortMembers(ms, true, T).map((m) => m.display_name)).toEqual(["Cleo", "Ade", "Ben"]);
  });

  it("snapshots every profile on the account", () => {
    const ada = makeProfile("self", "Ada", "18-64", { avatar: "🦊" });
    const mia = makeProfile("child", "Mia", "6-9");
    mia.state.xpByDay = { [T]: 20 };
    const account: Account = { version: 2, type: "parent", profiles: [ada, mia], setupDone: true };
    expect(memberSnapshot(account, T)).toEqual([
      { profile_id: ada.id, display_name: "Ada", avatar: "🦊", week_start: MON, week_xp: 0 },
      { profile_id: mia.id, display_name: "Mia", avatar: "", week_start: MON, week_xp: 20 },
    ]);
  });

  it("writes an invite that includes the code", () => {
    expect(inviteText({ name: "Smith family", code: "AB12CD" })).toContain("AB12CD");
  });
});
