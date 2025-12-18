export const PRO_KEY = "cv_pro_unlocked";

export function isProUnlocked() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(PRO_KEY) === "true";
}

export function setProUnlocked(value = true) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(PRO_KEY, value ? "true" : "false");
}
