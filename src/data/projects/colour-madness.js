export const ColourMadness = {
  id: "Colour Madness",
  title: "Colour Madness",
  tagline: "Een kleurenblind simulatie met 3 minigames in mixed reality.",
  description: "Deze XR escape room is ontwikkeld met Unity's XR Interaction Toolkit en plaatst spelers in een mysterieuze kamer vol interactieve puzzels. Elke puzzel kan op meerdere manieren opgelost worden, wat spelers de vrijheid geeft om creatief te denken.\n\nIk wilde onderzoeken hoe je natuurlijke interacties kunt bouwen met VR controllers waarbij physics-based interactions zorgen voor maximale immersion.\n\nHet project richtte zich op drie kernpijlers: natuurlijke object manipulatie, physics-based puzzels en environmental storytelling waarbij de ruimte zelf het verhaal vertelt.",
  thumbnail: "assets/colourmadness/thumbnail.png",
  youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  screenshots: [

  ],
  tags: [
    "Unity (C#)",
    "MR",
  ],
  projectRole: "Developer",
  timeline: "3 weken",
  mechanics: [
    {
      subtitle: "Grab Interaction",
      description: "Objecten worden fysiek opgepakt door middel van XR Grab Interactables waarbij physics properties dynamisch worden aangepast. Voor kleine objecten gebruik ik precision grabs, terwijl grote objecten velocity-based grabs gebruiken die natuurlijker aanvoelen. De throw mechanic tracks controller velocity over meerdere frames voor realistische gooibewegingen.",
      image: "https://placehold.co/600x400?text=Grab",
      code: "public void OnSelectEntered(SelectEnterEventArgs args)\n{\n    grabbed = true;\n    rb.isKinematic = true;\n}\n\npublic void OnSelectExited(SelectExitEventArgs args)\n{\n    grabbed = false;\n    rb.isKinematic = false;\n}"
    }
  ],
  git: "https://github.com/Daangulitz/XRpedition-team-10",
  itch: "https://fvugt.itch.io/asteroids-3d"
};
