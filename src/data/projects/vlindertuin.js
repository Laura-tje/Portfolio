export const Vlindertuin = {
  id: "vlindertuin",
  thumbnail: "assets/vlindertuin/banner.png",
  gif: "assets/vlindertuin/vlindertuin.gif",
  youtube: "",
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

  nl: {
    title: "Vlindertuin",
    tagline: "Een immersieve installatie waar de gebruiker vlinders kan tekenen.",
    description: `Een immersieve installatie gebouwd met Node.js en Socket.IO. Gebruikers kunnen interactief communiceren met de installatie in realtime, waarbij de server de status bijhoudt en synchroniseert 
                tussen clients. Het project omvatte het implementeren van interactieve elementen, een 
                gebruikersinterface en netwerkcommunicatie.`,

    projectRole: "Developer",
    timeline: "8 weken",
    mechanics: [
      {
        subtitle: "Render",
        description: `De SteamDeck build vereiste specifieke optimalisaties om soepel te draaien op de hardware. 
                    Ik heb gebruik gemaakt van de SteamOS Devkit client. Daarnaast heb ik de controls 
                    aangepast voor een betere ervaring op de SteamDeck, waarbij ik rekening hield met de 
                    unieke inputmogelijkheden van het apparaat.`,
        //gif: "assets/vlindertuin/renderlogo.png",
      },
      {
        subtitle: "API",
        description: `De SteamDeck build vereiste specifieke optimalisaties om soepel te draaien op de hardware. 
                    Ik heb gebruik gemaakt van de SteamOS Devkit client. Daarnaast heb ik de controls 
                    aangepast voor een betere ervaring op de SteamDeck, waarbij ik rekening hield met de 
                    unieke inputmogelijkheden van het apparaat.`,
        gif: "assets/cloudix/SteamDeckBuild.gif",
      },
      {
        subtitle: "Teken omgeving",
        description: `De SteamDeck build vereiste specifieke optimalisaties om soepel te draaien op de hardware. 
                    Ik heb gebruik gemaakt van de SteamOS Devkit client. Daarnaast heb ik de controls 
                    aangepast voor een betere ervaring op de SteamDeck, waarbij ik rekening hield met de 
                    unieke inputmogelijkheden van het apparaat.`,
        gif: "assets/vlindertuin/tekenomgeving.png",
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
