export const ColourMadness = {
  id: "Colour Madness",
  title: "Colour Madness",
  gif: "assets/colourmadness/Vissen.gif",
  tagline: "Een kleurenblind simulatie met 3 minigames in mixed reality.",
  description: "Colour Madness is een mixed reality project dat zich richt op het simuleren van kleurenblindheid. Het project bestaat uit drie minigames die spelers uitdagen om taken uit te voeren terwijl ze de wereld zien door de ogen van iemand met kleurenblindheid. Ik heb gebruik gemaakt van Unity en de XR Interaction Toolkit om een meeslepende ervaring te creëren die zowel educatief als vermakelijk is.",
  thumbnail: "assets/colourmadness/thumbnail.png",
  youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  screenshots: [],

  tags: [
    "Unity (C#)",
    "MR",
    "Team Project",
  ],
  projectRole: "Developer",
  timeline: "5 weken",
  mechanics: [
    {
      subtitle: "Fish Game",
      description: "Objecten worden fysiek opgepakt door middel van XR Grab Interactables waarbij physics properties dynamisch worden aangepast. Voor kleine objecten gebruik ik precision grabs, terwijl grote objecten velocity-based grabs gebruiken die natuurlijker aanvoelen. De throw mechanic tracks controller velocity over meerdere frames voor realistische gooibewegingen.",
      gif: "assets/colourmadness/Vissen.gif",
      code: "public void OnSelectEntered(SelectEnterEventArgs args)\n{\n    grabbed = true;\n    rb.isKinematic = true;\n}\n\npublic void OnSelectExited(SelectExitEventArgs args)\n{\n    grabbed = false;\n    rb.isKinematic = false;\n}"
    },
    {
      subtitle: "Memory Game",
      description: "In de Memory Game worden objecten willekeurig gepositioneerd binnen een bepaald gebied. Ik heb gebruik gemaakt van Unity's Random.Range om de x- en z-coördinaten te bepalen, terwijl de y-coördinaat constant blijft voor een consistente hoogte. Dit zorgt voor een dynamische en steeds veranderende speelomgeving.",
      gif: "assets/colourmadness/Memory.gif",
      //image: "https://placehold.co/600x400?text=Memory",
      code: "void SpawnObject()\n{\n    float x = Random.Range(-spawnAreaSize, spawnAreaSize);\n    float z = Random.Range(-spawnAreaSize, spawnAreaSize);\n    Vector3 spawnPos = new Vector3(x, spawnHeight, z);\n\n    Instantiate(objectPrefab, spawnPos, Quaternion.identity);\n}"
    }
  ],
  git: "https://github.com/Daangulitz/XRpedition-team-10",
  itch: "https://daangulitz.itch.io/colormadness"
};
