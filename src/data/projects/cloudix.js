export const CloudIX = {
  id: "CloudIX",
  title: "CloudIX",
  tagline: "Een 3D platformer gebuild naar verschillende platformen",
  description: "Asteroids 3D is een moderne remake van de klassieke arcade game. Het doel was om physics-based movement te combineren met een minimalistische sci-fi stijl. Door veel playtesting vond ik de perfecte balans tussen thrust force, rotation speed en projectile velocity.\n\nTijdens het project focuste ik op iteratief werken en het snel ontwikkelen van speelbare prototypes. Daarbij heb ik veel geleerd over component-based architecture, het gebruik van ScriptableObjects voor game balancing en het implementeren van object pooling voor betere performance.",
  thumbnail: "assets/cloudix/thumbnail.png",
  gameUrl: "https://itch.io/embed-upload/16183616?color=c0c0c0",
  gameWidth: "100%",
  gameAspectRatio: "16 / 9",
  youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  screenshots: [],
  tags: [
    "Unity",
    "C#",
    "3D",
    "Physics"
  ],
  projectRole: "Developer",
  timeline: "2 weken",
  mechanics: [
    {
      subtitle: "SteamDeck Build",
      description: "De speler gebruikt thrust-based movement en smooth rotation, net als klassieke arcade shooters. In plaats van directe positie updates werkt alles met physics forces, wat zorgt voor natuurlijk momentum en inertia. Ook implementeerde ik screen-wrap waarbij je aan de ene kant verdwijnt en aan de andere kant verschijnt.",
      image: "https://picsum.photos/seed/e1/1200/800",
      code: "void Update()\n{\n    if (Input.GetKey(KeyCode.W))\n        rb.AddForce(transform.up * thrust);\n\n    float rotate = Input.GetAxis(\"Horizontal\");\n    rb.MoveRotation(rb.rotation - rotate * rotateSpeed * Time.deltaTime);\n}"
    },
    {
      subtitle: "Asteroid Spawner",
      description: "Asteroïden spawnen in willekeurige groottes, rotaties en snelheid om elke wave uniek te maken. Het spawning systeem gebruikt een sphere-based approach waarbij asteroids altijd buiten het zichtveld verschijnen. Grote asteroids splitsen in kleinere stukken wanneer ze geraakt worden, wat voor dynamische gameplay zorgt.",
      image: "https://picsum.photos/seed/e2/1200/800",
      code: "void SpawnAsteroid()\n{\n    Vector3 pos = Random.onUnitSphere * spawnRadius;\n    float size = Random.Range(0.5f, 2.5f);\n\n    GameObject ast = Instantiate(asteroidPrefab, pos, Random.rotation);\n    ast.transform.localScale = Vector3.one * size;\n\n    Rigidbody rb = ast.GetComponent<Rigidbody>();\n    rb.AddForce(Random.onUnitSphere * Random.Range(5,15), ForceMode.Impulse);\n}"
    }
  ],
  git: "https://github.com/Laura-tje/CloudIX",
  itch: "https://laura-tje.itch.io/cloudix"
};
