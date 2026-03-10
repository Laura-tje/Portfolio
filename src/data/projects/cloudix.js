export const CloudIX = {
  id: "CloudIX",
  title: "Cloud IX",
  tagline: "Een 3D platformer speedrun geport naar verschillende platformen",
  description: "Cloud IX is een 3D platformer speedrun. Het project was gericht op het bouwen van een game die soepel draait op verschillende platformen, waaronder PC, steamdeck en mobiele apparaten. Ik heb veel aandacht besteed aan optimalisatie en platform-specifieke aanpassingen om ervoor te zorgen dat de game een consistente ervaring biedt, ongeacht het apparaat waarop het wordt gespeeld.",
  thumbnail: "assets/cloudix/thumbnail.png",
  banner: "assets/cloudix/banner.png",
  //gameUrl: "https://itch.io/embed-upload/16183616?color=c0c0c0",
  gameWidth: "100%",
  gameAspectRatio: "16 / 9",
  youtube: "https://www.youtube.com/embed/Erl9RNMznnE",
  screenshots: [],
  tags: [
    "Unity (C#)",
    "Porting",
    "3D"
  ],
  projectRole: "Developer",
  timeline: "2 weken",
  mechanics: [
    {
      subtitle: "SteamDeck Build",
      description: "De SteamDeck build vereiste specifieke optimalisaties om soepel te draaien op de hardware. Ik heb gebruik gemaakt van Unity's Profiler om bottlenecks te identificeren en heb verschillende technieken toegepast, zoals occlusion culling, level of detail (LOD) systemen en het optimaliseren van shaders. Daarnaast heb ik de controls aangepast voor een betere ervaring op de SteamDeck, waarbij ik rekening hield met de unieke inputmogelijkheden van het apparaat.",
      gif: "assets/cloudix/SteamDeckBuild.gif",
      //code: "void Update()\n{\n    if (Input.GetKey(KeyCode.W))\n        rb.AddForce(transform.up * thrust);\n\n    float rotate = Input.GetAxis(\"Horizontal\");\n    rb.MoveRotation(rb.rotation - rotate * rotateSpeed * Time.deltaTime);\n}"
    },
    {
      subtitle: "Android Build",
      description: "Voor de Android build heb ik de input van de game moeten aanpassen naar touch controls. Ik heb een virtuele joystick geïmplementeerd voor beweging en touch buttons voor acties zoals springen. Daarnaast heb ik de UI aangepast om beter te werken op kleinere schermen en heb ik verschillende optimalisaties doorgevoerd om ervoor te zorgen dat de game soepel draait op een breed scala aan Android-apparaten.",
      image: "https://picsum.photos/seed/e2/1200/800",
      //code: "void SpawnAsteroid()\n{\n    Vector3 pos = Random.onUnitSphere * spawnRadius;\n    float size = Random.Range(0.5f, 2.5f);\n\n    GameObject ast = Instantiate(asteroidPrefab, pos, Random.rotation);\n    ast.transform.localScale = Vector3.one * size;\n\n    Rigidbody rb = ast.GetComponent<Rigidbody>();\n    rb.AddForce(Random.onUnitSphere * Random.Range(5,15), ForceMode.Impulse);\n}"
    }
  ],
  git: "https://github.com/Laura-tje/CloudIX",
  itch: "https://laura-tje.itch.io/cloudix"
};
