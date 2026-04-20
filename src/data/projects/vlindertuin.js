export const Vlindertuin = {
  id: "vlindertuin",
  thumbnail: "assets/vlindertuin/banner.png",
  gif: "assets/vlindertuin/vlindertuin.gif",
  //youtube: "",
  screenshots: [],
  tags: [
    "Raspberry Pi",
    "API",
    "Team Project",
    "OpenCV",
    "2D",
  ],
  git: "",
  itch: "",
  oustanding: "Showcased at CIIIC",

  nl: {
    title: "Vlindertuin",
    tagline: "Een immersieve installatie waar de gebruiker vlinders kan tekenen.",
    description: `Dit project is een interactieve installatie waarbij bezoekers via een 
                  QR-code een vlinder kunnen tekenen op hun telefoon. De getekende 
                  vlinder wordt vervolgens weergegeven op een groot beeldscherm.

                  Met behulp van een camera en handtracking kunnen bezoekers hun hand voor 
                  het scherm bewegen en de vlinders aanraken. Wanneer een vlinder wordt geraakt, 
                  verandert deze visueel in een animatie van bloemen. 

                  De installatie bestaat uit een Raspberry Pi, camera, beeldscherm en QR-code 
                  bordje. Het scherm wordt zichtbaar opgesteld zodat bezoekers eenvoudig kunnen 
                  deelnemen aan de interactie.`,

    projectRole: "Developer",
    timeline: "8 weken",
    mechanics: [
      {
        subtitle: "CIIIC Showcase",
        description: `blablabla`,
        images: [
                  "assets/vlindertuin/groepsfoto.jpg",
                  "assets/vlindertuin/website.png",
                ],
        gifs:   [
                  "assets/vlindertuin/ciiic.gif",
                ],
      },
      {
        subtitle: "Tekenomgeving",
        description: `De SteamDeck build vereiste specifieke optimalisaties om soepel te draaien op de hardware. 
                    Ik heb gebruik gemaakt van de SteamOS Devkit client. Daarnaast heb ik de controls 
                    aangepast voor een betere ervaring op de SteamDeck, waarbij ik rekening hield met de 
                    unieke inputmogelijkheden van het apparaat.`,
        images: ["assets/vlindertuin/tekenomgeving.png"],
        gifs: [],
      },
      {
        subtitle: "API",
        description: `De SteamDeck build vereiste specifieke optimalisaties om soepel te draaien op de hardware. 
                    Ik heb gebruik gemaakt van de SteamOS Devkit client. Daarnaast heb ik de controls 
                    aangepast voor een betere ervaring op de SteamDeck, waarbij ik rekening hield met de 
                    unieke inputmogelijkheden van het apparaat.`,
        images: [],
        gifs: [],
      },
      {
        subtitle: "Database Manager",
        description: `De SteamDeck build vereiste specifieke optimalisaties om soepel te draaien op de hardware. 
                    Ik heb gebruik gemaakt van de SteamOS Devkit client. Daarnaast heb ik de controls 
                    aangepast voor een betere ervaring op de SteamDeck, waarbij ik rekening hield met de 
                    unieke inputmogelijkheden van het apparaat.`,
        images: ["assets/vlindertuin/tekenomgeving.png"],
        gifs: [],
      },
      {
        subtitle: "Promotie materiaal",
        images: [],
        gifs: [],
      },
    ]
  },

  en: {
    title: "Vlindertuin",
    tagline: "An immersive installation where users can draw butterflies.",
    description: `An immersive installation built with Node.js and Socket.IO. Users can interactively communicate with the installation in real-time, with the server managing the status and synchronizing it 
                between clients. The project involved implementing interactive elements, a 
                user interface, and network communication.`,

    projectRole: "Developer",
    timeline: "8 weeks",
  }
};
