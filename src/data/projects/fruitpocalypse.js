export const Fruitpocalypse = {
  id: "fruitpocalypse",
  disabled: true,
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
    description: "Fruitpocalypse is een 3D VR supermarkt simulatie. De speler navigeert door de supermarkt met een winkelmand of winkelwagen",
    projectRole: "Developer",
    timeline: "2 weken",
    mechanics: [
      {
        subtitle: "Checkout",
        description: "De speler gebruikt thrust-based movement en smooth rotation, net als klassieke arcade shooters. In plaats van directe positie updates werkt alles met physics forces, wat zorgt voor natuurlijk momentum en inertia. Ook implementeerde ik screen-wrap waarbij je aan de ene kant verdwijnt en aan de andere kant verschijnt.",
        gif: "assets/fruitpocalypse/checkout2.gif",
        code: "void Update()\n{\n    if (Input.GetKey(KeyCode.W))\n        rb.AddForce(transform.up * thrust);\n}"
      },
      {
        subtitle: "Asteroid Spawner",
        description: "Asteroïden spawnen in willekeurige groottes, rotaties en snelheid om elke wave uniek te maken. Het spawning systeem gebruikt een sphere-based approach waarbij asteroids altijd buiten het zichtveld verschijnen. Grote asteroids splitsen in kleinere stukken wanneer ze geraakt worden, wat voor dynamische gameplay zorgt.",
        code: "void SpawnAsteroid()\n{\n    Vector3 pos = Random.onUnitSphere * spawnRadius;\n}"
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
        gif: "assets/fruitpocalypse/checkout2.gif",
        code: "void Update()\n{\n    if (Input.GetKey(KeyCode.W))\n        rb.AddForce(transform.up * thrust);\n}"
      },
      {
        subtitle: "Asteroid Spawner",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        code: "void SpawnAsteroid()\n{\n    Vector3 pos = Random.onUnitSphere * spawnRadius;\n}"
      }
    ]
  }
};
