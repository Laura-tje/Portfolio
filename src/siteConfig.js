export const siteConfig = {
  name: "Laura Delissen",
  role: "XR Developer",
  aboutImage: "assets/aboutme/profilepic1.png",
  profileImages: [
    "assets/aboutme/profilepic1.png",
    "assets/aboutme/vr.jpg",
  ],
  cv: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",

  // Include in-development projects in the filter system
  includeInDevelopmentInFilters: true,

  // Tags georganiseerd in categorieën voor het filter systeem
  filterableTags: {
    engine: {
      label: "Engine",
      tags: [
        "Unity",
        //"Unreal",
        //"Godot",
      ]
    },
    hardware: {
      label: "Hardware",
      tags: [
        //"Raspberry Pi",
        //"Arduino",
        "Steam Deck",
        "Android",
        "Oculus Quest",
      ]
    },
    language: {
      label: "Language",
      tags: [
        "C#",
        "JavaScript",
        //"Python",
        //"C++"
      ]
    },
    type: {
      label: "Type",
      tags: [
        "2D",
        "3D",
        //"Porting",
        "Multiplayer",
        "Virtual Reality",
        "Mixed Reality",
      ]
    },
    tools: {
      label: "Tools",
      tags: [
        //"API",
        //"Socket.io",
        "P5.js",
        //"OpenCV",
      ]
    }
  },

  socials: {
    email: "lauradelissen@hotmail.com",
    github: "https://github.com/Laura-tje",
    linkedin: "https://www.linkedin.com/in/laura-delissen/",
    itch: "https://laura-tje.itch.io"
  },

  nl: {
    tagline: "Ik bouw interactieve ervaringen met een doel; mensen iets nieuws leren.",
    aboutLong: `
      Ik ben iemand die vooral gedreven wordt door het maken van dingen die iets betekenen 
      voor anderen. Waar veel mensen zich richten op het bouwen van games, ligt mijn 
      interesse ergens anders: ik wil technologie gebruiken om mensen te helpen of
      iets te leren.

      Tijdens mijn projecten merk ik dat ik automatisch denk vanuit de gebruiker. Wat ziet 
      iemand? Wat snapt iemand niet? Waar haakt iemand af? Die vragen sturen mijn werk. 
      Zo heb ik bijvoorbeeld een simulatie gemaakt die laat zien hoe kleurenblindheid wordt 
      ervaren, met als doel om iets abstracts ineens concreet en invoelbaar te maken. Ook 
      werk ik in mijn vrije tijd aan een distraction tracker, die mensen bewust maakt van 
      hoe snel en vaak ze eigenlijk worden afgeleid — iets waar veel mensen zich nauwelijks v
      an bewust zijn.

      Mijn motivatie komt niet uit een liefde voor games, want die heb ik eigenlijk nooit 
      gehad. Ik ben opgegroeid zonder, en daardoor kijk ik er ook anders naar. Waar anderen 
      focussen op entertainment en “feeling”, ben ik juist gefocust op duidelijkheid, 
      inzicht en impact. Ik wil dat iemand iets gebruikt en daarna denkt: “nu snap ik het.”

      Dat betekent ook dat ik kritisch ben op mijn eigen werk. Ik weet dat ik minder leun 
      op speelsheid of game-gevoel, en juist daarom focus ik extra op hoe een ervaring 
      logisch, helder en betekenisvol kan zijn. Voor mij is een project pas geslaagd als 
      het niet alleen werkt, maar ook echt iets overbrengt.`,
    softSkills: ["Samenwerken met artists", "Feedback geven & ontvangen", "Probleemoplossend denken"],
    hardSkills: ["Unity & XR Interaction Toolkit", "C# Scripting", "Git & Version Control"],
  },

  en: {
    tagline: "I build simulations with a purpose; to help people learn something new.",
    aboutLong: `
      VOEG ENGELSE ABOUT BESCHRIJVING IN
    `,
    softSkills: ["VOEG ENGELSE SOFT SKILLS IN"],
    hardSkills: ["VOEG ENGELSE HARD SKILLS IN"],
  }
};