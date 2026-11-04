export const THEME_STORAGE_KEY = "codexia-theme";

export type Theme = "light" | "dark";

/**
 * Se ejecuta en <head> antes de pintar para evitar el parpadeo:
 * usa la preferencia guardada o, si no hay, la del sistema.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})();`;
