import { App } from "@capacitor/app";
import { Capacitor } from "@capacitor/core";
import { LocalNotifications } from "@capacitor/local-notifications";
import type { PlannedReminder } from "./reminders";

/** True inside the iPhone and Android apps; false on the website. */
export const isNative = Capacitor.isNativePlatform();

/** Asks for permission to show notifications. Resolves to whether it was granted. */
export async function allowReminders(): Promise<boolean> {
  if (!isNative) return false;
  const { display } = await LocalNotifications.requestPermissions();
  return display === "granted";
}

/** Replaces every scheduled reminder with this plan. */
export async function scheduleReminders(plan: PlannedReminder[]): Promise<void> {
  if (!isNative) return;
  const { notifications } = await LocalNotifications.getPending();
  if (notifications.length) await LocalNotifications.cancel({ notifications: notifications.map(({ id }) => ({ id })) });
  if (!plan.length) return;
  const { display } = await LocalNotifications.checkPermissions();
  if (display !== "granted") return;
  await LocalNotifications.schedule({
    notifications: plan.map((p) => ({ id: p.id, title: p.title, body: p.body, schedule: { at: p.at, allowWhileIdle: true } })),
  });
}

/** Listens for a reminder being tapped and for the app coming back to the foreground. Returns an unsubscribe. */
export function onNativeEvents(handlers: { tapped: () => void; resumed: () => void }): () => void {
  if (!isNative) return () => {};
  const subs = [
    LocalNotifications.addListener("localNotificationActionPerformed", handlers.tapped),
    App.addListener("resume", handlers.resumed),
  ].map((s) => s.catch(() => null));
  return () => subs.forEach((s) => void s.then((h) => h?.remove()));
}
