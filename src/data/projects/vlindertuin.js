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
      { //ciiic showcase
        subtitle: "CIIIC Showcase",
        description: `Tijdens dit project zijn we uitgenodigd om onze installatie te presenteren op de CIIIC showcase.
                    Dit was voor ons een geweldige kans om ons project te testen en laten zien aan een breder publiek.
                    We hebben de installatie opgezet en bezoekers uitgenodigd om deel te nemen aan de interactieve ervaring.

                    In het begin verliep het wat stroef, mede doordat we helemaal achterin in een hoekje stonden. Maar
                    naarmate de dag vorderde, kwamen er steeds meer bezoekers langs die enthousiast waren om de installatie uit te proberen.
                    We hebben veel feedback ontvangen van de bezoekers, die onder de indruk waren dat ze hun eigen getekende
                    vlinder konden zien rondvliegen op het scherm.`,
        images: [
                  "assets/vlindertuin/groepsfoto.jpg",
                  "assets/vlindertuin/website.png",
                ],
        gifs:   [
                  "assets/vlindertuin/ciiic.gif",
                ],
      },
      { //tekenomgeving
        subtitle: "Tekenomgeving",
        description: `De tekenomgeving is een webapplicatie die gebruikers in staat stelt om hun eigen vlinders te tekenen.
                    De webapplicatie is geoptimaliseerd voor mobiele apparaten, zodat bezoekers eenvoudig via hun telefoon 
                    kunnen deelnemen aan de interactieve ervaring.`,
        gifs: [
                  "assets/vlindertuin/tekenomgeving.gif"
              ],
      },
      { //Database
        subtitle: "Database",
        description: `De database is een essentieel onderdeel van de installatie, omdat het de getekende vlinders opslaat en beheert.
                    We hebben een database opgezet die de vlinders opslaat en beheert, zodat ze kunnen worden weergegeven op het scherm.
                    De database is geoptimaliseerd voor snelheid en efficiëntie, zodat de installatie soepel kan draaien.`,
        images: [],
        gifs: [],
      },
      { //Database manager
        subtitle: "Database Manager",
        description: `Tijdens het playtesten van ons project merkten we dat veel van onze medestudenten het grappig vond om 
                    andere dingen dan vlinders te tekenen. Om dit probleem op te lossen, hebben we een database manager ontwikkeld
                    waarin we kunnen zien wat er is getekend en door wie. Daarnaast hebben we een 'verwijder' knop toegevoegd,
                    waarmee we aan de hand van een wachtwoord specifieke tekeningen kunnen verwijderen.`,
        images: [],
        gifs: [
          "assets/vlindertuin/databasemanager.gif"
              ],
      },
      {
        subtitle: "Promotie materiaal",
        description: `nom nom`,
        images: [
                  "assets/vlindertuin/poster.png",
                  "assets/vlindertuin/qrposter.jpg",
                ],
        gifs:   [
                  "assets/vlindertuin/laserprinter.gif"
                ],
      },
    ]
  },

  en: {
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
        images: [],
        gifs: [
                  "assets/vlindertuin/tekenomgeving.gif"
              ],
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
        images: [],
        gifs: [
          "assets/vlindertuin/databasemanager.gif"
              ],
      },
      {
        subtitle: "Promotie materiaal",
        description: `nom nom`,
        images: [
                  "assets/vlindertuin/poster.png",
                  "assets/vlindertuin/qrposter.jpg",
                ],
        gifs:   [
                  "assets/vlindertuin/laserprinter.gif"
                ],
      },
    ]
  }
};
