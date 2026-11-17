export const pageTranslations = {
  projects: {
    nl: {
      aboutThisProject: "Over dit project",
      details: "Details",
      role: "Rol",
      timeline: "Tijdlijn",
    },
    en: {
      aboutThisProject: "About this project",
      details: "Details",
      role: "Role",
      timeline: "Timeline",
    },
  },
  navigation: {
    nl: {
      projects: "Projecten",
      about: "Over mij",
      contact: "Contact",
    },
    en: {
      projects: "Projects",
      about: "About",
      contact: "Contact",
    },
  },
  footer: {
    nl: {
      copyright: "© {year} Laura Delissen. Alle rechten voorbehouden.",
    },
    en: {
      copyright: "© {year} Laura Delissen. All rights reserved.",
    },
  },
};

export function t(section, key, language) {
  return pageTranslations[section]?.[language]?.[key] || key;
}
