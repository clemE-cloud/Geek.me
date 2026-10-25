import type { CapacitorConfig } from "@capacitor/cli";

/** The iPhone and Android apps wrap the same web build (dist), so lessons and features match the website. */
const config: CapacitorConfig = {
  appId: "io.geekme.app",
  appName: "Geek.me",
  webDir: "dist",
  backgroundColor: "#0e1118",
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_geekme",
      iconColor: "#f2b544",
    },
  },
};

export default config;
