export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "en";
export const siteTitle = "Echo Code";
const year = new Date().getFullYear();

export const ui = {
  en: {
    "nav.featured": "Featured",
    "nav.recents": "Recents",
    "nav.blog": "Blog",
    "hero.title": `${siteTitle} News`,
    "footer.copyright": `© ${year} ${siteTitle}. All rights reserved.`,
    "card.footer.readmore": "Read more",
    "btn.label.filters": "Filters",
    "btn.label.close": "Close",
    "btn.label.menu": "Open menu",
    "btn.label.search": "Search",
    "btn.label.theme": "Toggle theme",
    "logo.alt": `${siteTitle}'s logo`,
  },
  es: {
    "nav.featured": "Destacado",
    "nav.recents": "Reciente",
    "nav.blog": "Blog",
    "hero.title": `Noticias de ${siteTitle}`,
    "footer.copyright": `© ${year} ${siteTitle}. Todos los derechos reservados.`,
    "card.footer.readmore": "Leer más",
    "btn.label.filters": "Filtros",
    "btn.label.close": "Cerrar",
    "btn.label.menu": "Abrir menú",
    "btn.label.search": "Buscar",
    "btn.label.theme": "Alternar tema",
    "logo.alt": `Logo de ${siteTitle}`,
  },
} as const;
