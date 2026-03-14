export const ColourMadness = {
  id: "Colour Madness",
  gif: "assets/colourmadness/Vissen.gif",
  thumbnail: "assets/colourmadness/thumbnail.png",
  youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  screenshots: [],
  tags: [
    "Unity (C#)",
    "MR",
    "Team Project",
  ],
  git: "https://github.com/Daangulitz/XRpedition-team-10",
  itch: "https://daangulitz.itch.io/colormadness",

  nl: {
    title: "Colour Madness",
    tagline: "Een kleurenblind simulatie met 3 minigames in mixed reality.",
    description: `Colour Madness is een mixed reality project dat zich richt op het simuleren van 
                kleurenblindheid. Het project bestaat uit drie minigames die spelers uitdagen om taken 
                uit te voeren terwijl ze de wereld zien door de ogen van iemand met kleurenblindheid. 
                Ik heb gebruik gemaakt van Unity en de XR Interaction Toolkit om een meeslepende 
                ervaring te creëren die zowel educatief als vermakelijk is.`,

    projectRole: "Developer",
    timeline: "5 weken",
    mechanics: [
      {
        subtitle: "Fish Game",
        description: `Objecten worden fysiek opgepakt door middel van XR Grab Interactables waarbij physics 
                    properties dynamisch worden aangepast. Voor kleine objecten gebruik ik precision grabs, 
                    terwijl grote objecten velocity-based grabs gebruiken die natuurlijker aanvoelen. De throw 
                    mechanic tracks controller velocity over meerdere frames voor realistische gooibewegingen.`,
        gif: "assets/colourmadness/Vissen.gif",
        code: `public void OnSelectEntered(SelectEnterEventArgs args)
{
    grabbed = true;
    rb.isKinematic = true;
}

public void OnSelectExited(SelectExitEventArgs args)
{
    grabbed = false;
    rb.isKinematic = false;
}`
      },
      {
        subtitle: "Memory Game",
        description: `In de Memory Game worden objecten willekeurig gepositioneerd binnen een bepaald gebied. 
                    Ik heb gebruik gemaakt van Unity's Random.Range om de x- en z-coördinaten te bepalen, 
                    terwijl de y-coördinaat constant blijft voor een consistente hoogte. Dit zorgt voor een 
                    dynamische en steeds veranderende speelomgeving.`,
        gif: "assets/colourmadness/Memory.gif",
        code: `void SpawnObject()
{
    float x = Random.Range(-spawnAreaSize, spawnAreaSize);
    float z = Random.Range(-spawnAreaSize, spawnAreaSize);
    Vector3 spawnPos = new Vector3(x, spawnHeight, z);

    Instantiate(objectPrefab, spawnPos, Quaternion.identity);
}`
      }
    ]
  },

  en: {
    title: "Colour Madness",
    tagline: "VOEG ENGELSE TAGLINE IN",
    description: "VOEG ENGELSE BESCHRIJVING IN",
    projectRole: "Developer",
    timeline: "5 weeks",
    mechanics: [
      {
        subtitle: "Fish Game",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        gif: "assets/colourmadness/Vissen.gif",
        code: `public void OnSelectEntered(SelectEnterEventArgs args)
{
    grabbed = true;
    rb.isKinematic = true;
}

public void OnSelectExited(SelectExitEventArgs args)
{
    grabbed = false;
    rb.isKinematic = false;
}`
      },
      {
        subtitle: "Memory Game",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        gif: "assets/colourmadness/Memory.gif",
        code: `void SpawnObject()
{
    float x = Random.Range(-spawnAreaSize, spawnAreaSize);
    float z = Random.Range(-spawnAreaSize, spawnAreaSize);
    Vector3 spawnPos = new Vector3(x, spawnHeight, z);

    Instantiate(objectPrefab, spawnPos, Quaternion.identity);
}`
      }
    ]
  }
};
