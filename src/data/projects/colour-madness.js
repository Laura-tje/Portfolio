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
    description: `Colour Madness is een mixed reality project dat verschillende vormen van 
                kleurenblindheid simuleert. Spelers kunnen kiezen uit vier typen kleurenblindheid 
                en drie minigames. Omdat de minigames kleurafhankelijk zijn, worden spelers uitgedaagd 
                om andere visuele kenmerken te herkennen, zoals vorm en textuur.

                Het project bevat drie minigames. In de eerste minigame maakt de speler een 
                smoothie door fruit op een lijstje te verzamelen. In de tweede minigame vangt 
                de speler vissen van de juiste kleur die door de ruimte bewegen. De derde minigame 
                is een memoryspel waarbij de speler paren moet vinden.

                Ik heb voornamelijk gewerkt aan de laatste twee minigames en daarbij Unity en de XR 
                Interaction Toolkit gebruikt om een meeslepende mixed reality ervaring te creëren.`,

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
    tagline: "A color blindness simulation with 3 minigames in mixed reality.",
    description: `Colour Madness is a mixed reality project that simulates different types of color 
                blindness. Players can choose from four types of color blindness and three minigames. 
                Because the minigames rely heavily on color, players are challenged to recognize other 
                visual characteristics such as shape and texture.

                The project contains three minigames. In the first minigame, the player makes a smoothie 
                by collecting fruit from a list. In the second minigame, the player catches fish of the 
                correct color as they move through the space. The third minigame is a memory game where 
                the player must find matching pairs.

                I mainly worked on the last two minigames, using Unity and the XR Interaction Toolkit to 
                create an immersive mixed reality experience.`,
    projectRole: "Developer",
    timeline: "5 weeks",
    mechanics: [
      {
        subtitle: "Fish Game",
        description: `Voeg ENGELSE BESCHRIJVING IN`,
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
