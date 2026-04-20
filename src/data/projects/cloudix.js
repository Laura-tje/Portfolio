export const CloudIX = {
  id: "CloudIX",
  thumbnail: "assets/cloudix/banner.png",
  gif: "assets/cloudix/SteamDeckBuild.gif",
  banner: "assets/cloudix/banner.png",
  //gameWidth: "100%",
  //gameAspectRatio: "16 / 9",
  youtube: "https://www.youtube.com/embed/Erl9RNMznnE",
  screenshots: [],
  tags: [
    "Unity",
    "Porting",
    "3D",
    "C#",
    "Steam Deck",
    "Android",
  ],
  git: "https://github.com/Laura-tje/CloudIX",
  itch: "https://laura-tje.itch.io/cloudix",

  nl: {
    title: "Cloud IX",
    tagline: "Een 3D platformer speedrun geport naar verschillende platformen",
    description: `Cloud IX is een 3D platformer speedrun geport naar verschillende platformen, waaromder
                PC, Steam Deck en mobiele apparaten. Het project richtte zich op het optimaliseren van de
                prestaties en het aanpassen van de game voor verschillende hardware specificaties.

                De eerste 3 weken werkten we aan de game zelf, waarbij we de kernmechanieken implementeerden
                en zorgden voor een soepele gameplay ervaring. De volgende 3 weken waren gewijd aan het porten 
                van de game naar verschillende platformen, wat inhield dat we de prestaties optimaliseerden en 
                de controls aanpasten voor elk platform.`,

    projectRole: "Developer",
    timeline: "6 weken",
    mechanics: [
      {
        subtitle: "SteamDeck Build",
        description: `De SteamDeck build vereiste specifieke optimalisaties om soepel te draaien op de hardware. 
                    Ik heb gebruik gemaakt van de SteamOS Devkit client. Daarnaast heb ik de controls 
                    aangepast voor een betere ervaring op de SteamDeck, waarbij ik rekening hield met de 
                    unieke inputmogelijkheden van het apparaat.`,
        images: [],
        gifs: ["assets/cloudix/SteamDeckBuild.gif"],
      },
      {
        subtitle: "Android Build",
        description: `Voor de Android build heb ik de input van de game moeten aanpassen naar touch controls. 
                    Ik heb een virtuele joystick geïmplementeerd voor beweging en touch buttons voor acties 
                    zoals springen. Daarnaast heb ik de UI aangepast om beter te werken op kleinere schermen 
                    en heb ik verschillende optimalisaties doorgevoerd om ervoor te zorgen dat de game soepel 
                    draait op een breed scala aan Android-apparaten.`,
        images: [],
        gifs: ["assets/cloudix/AndroidBuild.gif"],
      }
    ]
  },

  en: {
    title: "Cloud IX",
    tagline: "A 3D platformer speedrun ported to multiple platforms",
    description: `Cloud IX is a 3D platformer speedrun game ported to multiple platforms, including PC, Steam Deck, 
                and mobile devices. The project focused on optimizing performance and adapting the game 
                for different hardware specifications.

                The first 3 weeks we worked on the game itself, implementing core mechanics and ensuring 
                a smooth gameplay experience. The next 3 weeks were dedicated to porting the game to 
                different platforms, which involved optimizing performance and adapting controls for each 
                platform.`,

    projectRole: "Developer",
    timeline: "6 weeks",
    mechanics: [
      {
        subtitle: "SteamDeck Build",
        description: `The SteamDeck build required specific optimizations to run smoothly on the hardware. 
                    I used the SteamOS Devkit client for development. Additionally, I adapted the controls 
                    for a better experience on the SteamDeck, taking into account the unique input 
                    capabilities of the device.`,
        images: [],
        gifs: ["assets/cloudix/SteamDeckBuild.gif"],
      },
      {
        subtitle: "Android Build",
        description: `For the Android build, I had to adapt the game's input to touch controls. I 
                    implemented a virtual joystick for movement and touch buttons for actions like jumping. 
                    Additionally, I modified the UI to work better on smaller screens and implemented various 
                    optimizations to ensure the game runs smoothly on a wide range of Android devices.`,
        images: [],
        gifs: ["assets/cloudix/AndroidBuild.gif"],
      }
    ]
  }
};
