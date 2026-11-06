export const THEME_STORAGE_KEY = "codexia-theme";

export type Theme = "light" | "dark";

/**
 * Se ejecuta en <head> antes de pintar para evitar el parpadeo:
 * usa la preferencia guardada con el botón o, si no hay, el modo claro.
 */
export const themeInitScript = `(function(){var t="light";try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");if(s==="dark")t="dark"}catch(e){}document.documentElement.dataset.theme=t})();`;
