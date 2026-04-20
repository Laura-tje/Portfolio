export const Fruitpocalypse = {
  id: "fruitpocalypse",
  thumbnail: "assets/fruitpocalypse/thumbnail.png",
  gif: "assets/fruitpocalypse/checkout2.gif",
  youtube: "",
  screenshots: [],
  tags: [
    "Unity (C#)",
    "3D",
    "VR",
  ],
  git: "https://github.com/fvugt/asteroids-3d",
  itch: "https://fvugt.itch.io/asteroids-3d",

  nl: {
    title: "Fruitpocalypse",
    tagline: "Een VR supermarkt simulatie.",
    description: `Fruitpocalypse is een 3D VR supermarkt simulatie. De speler navigeert door de 
                supermarkt met een winkelmand of winkelwagen`,

    projectRole: "Developer",
    timeline: "2 weken",
    mechanics: [
      {
        subtitle: "Checkout",
        description: `De speler gebruikt thrust-based movement en smooth rotation, net als klassieke arcade 
                    shooters. In plaats van directe positie updates werkt alles met physics forces, wat zorgt 
                    voor natuurlijk momentum en inertia. Ook implementeerde ik screen-wrap waarbij je aan de 
                    ene kant verdwijnt en aan de andere kant verschijnt.`,
        images: [],
        gifs: ["assets/fruitpocalypse/checkout2.gif"],
        code: `void Update()
{
    if (Input.GetKey(KeyCode.W))
        rb.AddForce(transform.up * thrust);
}`
      },
      {
        subtitle: "Asteroid Spawner",
        description: `Asteroïden spawnen in willekeurige groottes, rotaties en snelheid om elke wave uniek te maken. 
                    Het spawning systeem gebruikt een sphere-based approach waarbij asteroids altijd buiten het 
                    zichtveld verschijnen. Grote asteroids splitsen in kleinere stukken wanneer ze geraakt 
                    worden, wat voor dynamische gameplay zorgt.`,
        images: [],
        gifs: [],
        code: `void SpawnAsteroid()
{
    Vector3 pos = Random.onUnitSphere * spawnRadius;
}`
      }
    ]
  },

  en: {
    title: "Fruitpocalypse",
    tagline: "VOEG ENGELSE TAGLINE IN",
    description: "VOEG ENGELSE BESCHRIJVING IN",
    projectRole: "Developer",
    timeline: "2 weeks",
    mechanics: [
      {
        subtitle: "Checkout",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        images: [],
        gifs: ["assets/fruitpocalypse/checkout2.gif"],
        code: `void Update()
{
    if (Input.GetKey(KeyCode.W))
        rb.AddForce(transform.up * thrust);
}`
      },
      {
        subtitle: "Asteroid Spawner",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        images: [],
        gifs: [],
        code: `void SpawnAsteroid()
{
    Vector3 pos = Random.onUnitSphere * spawnRadius;
}`
      }
    ]
  }
};
