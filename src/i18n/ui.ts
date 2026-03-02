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

    "widget.toc.title": "Table of content",
    "widget.related.title": "Related posts",
    "widget.related.none": "Nothing to show.",

    "label.updated": "Updated",
    "label.filter.category": "Category",
    "label.filter.author": "Author",
    "label.filter.pubDate": "Publication date",
    "label.filter.updatedDate": "Updated date",

    "btn.label.filters": "Filters",
    "btn.label.close": "Close",
    "btn.label.menu": "Open menu",
    "btn.label.search": "Search",
    "btn.label.theme": "Toggle theme",
    "btn.label.langs": "Languages",

    "logo.alt": `${siteTitle}'s logo`,

    "page.home.title": "Home",
    "page.home.desc": "Learn and explore with us the vast development landscape through different eyes!",
    "page.home.recents": "Recents",

    "page.search.title": "Search results",
    "page.search.desc":
      "What are we looking for? Information about a new technology? A tutorial? Or something entirely different...",
    "page.search.results": "Results",
    "page.search.empty.queryFilters": 'No posts found for "{query}" with filters applied.',
    "page.search.empty.query": 'No posts found for "{query}".',
    "page.search.empty.filters": "No posts match the selected filters.",
    "page.search.error": "Search is currently unavailable.",

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

    "widget.toc.title": "Tabla de contenido",
    "widget.related.title": "Posts relacionados",
    "widget.related.none": "Nada que mostrar.",

    "label.updated": "Actualizado",
    "label.filter.category": "Categoría",
    "label.filter.author": "Autor",
    "label.filter.pubDate": "Publicado",
    "label.filter.updatedDate": "Actualizado",

    "btn.label.filters": "Filtros",
    "btn.label.close": "Cerrar",
    "btn.label.menu": "Abrir menú",
    "btn.label.search": "Buscar",
    "btn.label.theme": "Alternar tema",
    "btn.label.langs": "Idiomas",

    "logo.alt": `Logo de ${siteTitle}`,

    "page.home.title": "Inicio",
    "page.home.desc":
      "¡Aprende y explora con nosotros acerca del amplio panorama del desarrollo desde una perspectiva diferente!",
    "page.home.recents": "Reciente",

    "page.search.title": "Resultados de búsqueda",
    "page.search.desc":
      "¿Qué estamos buscando? ¿Información sobre una nueva tecnología? ¿Un tutorial? ¿O algo completamente diferente...",
    "page.search.results": "Resultados",
    "page.search.empty.queryFilters": 'No se encontraron posts para "{query}" con los filtros aplicados.',
    "page.search.empty.query": 'No se encontraron posts para "{query}".',
    "page.search.empty.filters": "Ningún post coincide con los filtros seleccionados.",
    "page.search.error": "La función de búsqueda no se encuentra disponible en este momento.",

    "page.404.title": "404",
    "page.404.desc": "Not exactly what we were looking for :(",
    "page.404.heading": "404",
    "page.404.msg": "Página no encontrada.",
  },
} as const;
