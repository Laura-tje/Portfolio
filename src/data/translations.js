// Pagina vertalingen template
export const pageTranslations = {
  home: {
    nl: {
      welcome: "Welkom 👋",
      greeting: "Hey, ik ben Laura",
      projectsTitle: "Mijn Projecten",
      projectsDescription: "Hier zijn de projecten waar ik aan heb gewerkt",
    },
    en: {
      welcome: "Welcome 👋",
      greeting: "Hey, I'm Laura",
      projectsTitle: "My Projects",
      projectsDescription: "Here are the projects I've worked on",
    }
  },

  about: {
    nl: {
      title: "Over mij",
      storyTitle: "Mijn Verhaal",
      downloadCv: "Download CV",
    },
    en: {
      title: "About Me",
      storyTitle: "My Story",
      downloadCv: "Download CV",
    }
  },

  contact: {
    nl: {
      title: "Contact",
      directContact: "Direct contact",
      findOnline: "Vind me online",
      emailMessage: "Stuur me een email en ik reageer zo snel mogelijk.",
    },
    en: {
      title: "Contact",
      directContact: "Direct contact",
      findOnline: "Find me online",
      emailMessage: "Send me an email and I'll respond as soon as possible.",
    }
  },

  projects: {
    nl: {
      backToProjects: "Terug naar projecten",
      previousProject: "Vorig project",
      nextProject: "Volgende project",
      previous: "Vorige",
      next: "Volgende",
    },
    en: {
      backToProjects: "Back to projects",
      previousProject: "Previous project",
      nextProject: "Next project",
      previous: "Previous",
      next: "Next",
    }
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
    }
  },

  footer: {
    nl: {
      copyright: "© {year} Laura Delissen. Alle rechten voorbehouden.",
    },
    en: {
      copyright: "© {year} Laura Delissen. All rights reserved.",
    }
  }
};

// Helper functie
export const t = (section, key, language) => {
  return pageTranslations[section]?.[language]?.[key] || key;
};
