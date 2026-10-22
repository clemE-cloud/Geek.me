const pad = (n: number) => String(n).padStart(2, "0");

export const ymd = (d: Date): string => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;

export const parseYmd = (s: string): Date => {
  const [y, m, d] = s.split("-").map(Number);
  return new Date(y, m - 1, d);
};

export const addDays = (s: string, n: number): string => {
  const d = parseYmd(s);
  d.setDate(d.getDate() + n);
  return ymd(d);
};

export const today = (): string => ymd(new Date());

/** Monday of the week containing `s`. */
export const weekStart = (s: string): string => {
  const day = (parseYmd(s).getDay() + 6) % 7; // Mon = 0
  return addDays(s, -day);
};

export const weekDays = (s: string): string[] => {
  const start = weekStart(s);
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
};

export const fmt = (s: string, opts: Intl.DateTimeFormatOptions): string =>
  parseYmd(s).toLocaleDateString(undefined, opts);
