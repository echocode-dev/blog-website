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

    "page.home.title": "Home",
    "page.home.desc": "Learn and explore with us the vast development landscape through different eyes!",
    "page.home.recents": "Recents",

    "page.search.title": "Search results",
    "page.search.desc":
      "What are we looking for? Information about a new technology? A tutorial? Or something entirely different...",
    "page.search.results": "Results",

    "page.404.title": "404",
    "page.404.desc": "Not exactly what we were looking for :(",
    "page.404.heading": "404",
    "page.404.msg": "Page not found.",
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

    "page.home.title": "Inicio",
    "page.home.desc":
      "¡Aprende y explora con nosotros acerca del amplio panorama del desarrollo desde una perspectiva diferente!",
    "page.home.recents": "Reciente",

    "page.search.title": "Resultados de búsqueda",
    "page.search.desc":
      "¿Qué estamos buscando? ¿Información sobre una nueva tecnología? ¿Un tutorial? ¿O algo completamente diferente...",
    "page.search.results": "Resultados",

    "page.404.title": "404",
    "page.404.desc": "Not exactly what we were looking for :(",
    "page.404.heading": "404",
    "page.404.msg": "Página no encontrada.",
  },
} as const;
