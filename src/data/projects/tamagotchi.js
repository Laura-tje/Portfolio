export const Tamagotchi = {
  id: "Tamagotchi",
  title: "Tamagotchi",
  tagline: "In this game you play as a space pirate who wants the treasure of some cute robots.",
  description: "Deze topdown shooter begon als een experiment om enemy AI te bouwen en groeide uit tot een complete arcade-style game. Het doel was om tight, responsive controls te combineren met challenging maar faire enemy behaviors.\n\nLater werd het uitgebreid met verschillende enemy types, wave progression systems en satisfying hit-feedback door screen shake en particle effects te combineren.\n\nHet project hielp mij de basis van AI state machines, navmesh pathfinding en difficulty balancing beter te leren begrijpen.",
  thumbnail: "assets/tamagotchi/thumbnail.png",
  gameUrl: "https://laura-tje.github.io/Tamagotchi/",
  //youtube: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  screenshots: [],
  tags: [
    "P5.js"
  ],
  projectRole: "Programmer",
  timeline: "1 week",
  mechanics: [
    {
      subtitle: "Bubbles",
      description: "Een finite state machine voor vijanden die dynamisch schakelt tussen Idle → Chase → Attack → Retreat states. In Chase gebruiken enemies navmesh pathfinding, in Attack positioneren ze zich tactisch, en in Retreat trekken ze zich terug naar cover bij lage health. Verschillende enemy types hebben eigen parameters voor aggression range en attack patterns.",
      image: "https://placehold.co/600x400?text=Enemy+AI",
      code: "void Update()\n{\n    switch(state)\n    {\n        case Idle:\n            LookForPlayer();\n            break;\n\n        case Chase:\n            MoveTowardPlayer();\n            break;\n\n        case Attack:\n            TryShoot();\n            break;\n    }\n}"
    },
    {
      subtitle: "Projectile System",
      description: "Hit-detection via raycasts met instant feedback - veel sneller en accurater dan physics-based projectiles. De raycast spawned een hit effect op het impact point en gebruikt layer masks om te bepalen wat geraakt kan worden. Elk schot krijgt een tracer effect die de bullet path visualiseert.",
      image: "https://placehold.co/600x400?text=Projectile",
      code: "void Shoot()\n{\n    Ray ray = new Ray(transform.position, transform.forward);\n\n    if (Physics.Raycast(ray, out var hit, 50f))\n    {\n        Debug.Log($\"Hit {hit.collider.name}\");\n    }\n}"
    }
  ],
  git: "https://github.com/Laura-tje/Tamagotchi",
  //itch: ""
};
