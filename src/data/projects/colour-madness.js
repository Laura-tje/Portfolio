export const ColourMadness = {
  id: "Colour Madness",
  gif: "assets/colourmadness/Vissen.gif",
  thumbnail: "assets/colourmadness/thumbnail.png",
  youtube: "https://www.youtube.com/embed/3PNnsLEMaro?si=rhQtYKY3wi8NyvAx",
  screenshots: [],
  tags: [
    "Unity",
    "Mixed Reality",
    "Team Project",
    "C#",
    "Oculus Quest",
    "3D",
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
      { //NOT FINISHED
        subtitle: "Fish Game",
        description: `In de fish game moet de speler vissen van de juiste kleur vangen terwijl ze 
                    door de ruimte bewegen. Ik heb gebruik gemaakt van de XR Interaction Toolkit om de interactie 
                    te implementeren, waarbij de speler de vissen kan grijpen en vasthouden. De vissen hebben 
                    verschillende snelheden en bewegingen, waardoor het een uitdagende en dynamische ervaring wordt.`,
        gif: "assets/colourmadness/Vissen.gif",
        code: `code for fish game`
      },
      { //NOT FINISHED
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
    description: `Colour Madness is a mixed reality project that simulates different types of colorblindness.
                Players can choose from four types of colorblindness and three minigames. Since the minigames are
                color-dependent, players are challenged to recognize other visual cues such as shape and texture.

                The project features three minigames. In the first minigame, players make a smoothie by collecting
                fruit from a list. In the second minigame, players catch fish of the correct color that move through space.
                The third minigame is a memory game where players must find pairs.

                I primarily worked on the last two minigames, using Unity and the XR Interaction Toolkit to create an 
                immersive mixed reality experience.`,
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
