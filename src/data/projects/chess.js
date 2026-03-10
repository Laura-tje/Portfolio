export const Chess = {
  id: "chess",
  title: "Chess",
  disabled: true,
  tagline: "Een multiplayer schaakspel voor in de browser.",
  description: "A fully functional chess game with smooth gameplay and intuitive controls.",
  thumbnail: "assets/chess/banner3.jpg",
  youtube: "",
  screenshots: [
    "https://picsum.photos/seed/a1/1200/800",
    "https://picsum.photos/seed/a2/1200/800"
  ],
  tags: [
    "Server",
    "Multiplayer",
    "Javascript",
  ],
  projectRole: "Developer",
  timeline: "2 weken",
  mechanics: [
    {
      subtitle: "Movement System",
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
  git: "https://github.com/fvugt/asteroids-3d",
  itch: "https://fvugt.itch.io/asteroids-3d"
};
