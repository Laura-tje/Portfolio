export const PiracyItsACrime = {
  id: "Piracy its a crime",
  title: "Piracy, it's a crime!",
  tagline: "In this game you play as a space pirate who wants the treasure of some cute robots.",
  description: "Deze topdown shooter begon als een experiment om enemy AI te bouwen en groeide uit tot een complete arcade-style game. Het doel was om tight, responsive controls te combineren met challenging maar faire enemy behaviors.\n\nLater werd het uitgebreid met verschillende enemy types, wave progression systems en satisfying hit-feedback door screen shake en particle effects te combineren.\n\nHet project hielp mij de basis van AI state machines, navmesh pathfinding en difficulty balancing beter te leren begrijpen.",
  thumbnail: "assets/piracy/thumbnail.png",
  youtube: "https://www.youtube.com/embed/OGp_lGlqNQY",
  screenshots: [
    "https://picsum.photos/seed/shooter1/1200/800",
    "https://picsum.photos/seed/shooter2/1200/800"
  ],
  tags: [
    "Unity",
    "C#",
    "VR"
  ],
  projectRole: "Programmeur",
  timeline: "4 weken",
  mechanics: [
    {
        subtitle: "Gun",
        description: "Een finite state machine voor vijanden die dynamisch schakelt tussen Idle → Chase → Attack → Retreat states. In Chase gebruiken enemies navmesh pathfinding, in Attack positioneren ze zich tactisch, en in Retreat trekken ze zich terug naar cover bij lage health. Verschillende enemy types hebben eigen parameters voor aggression range en attack patterns.",
        gif: "/assets/piracy/gun.gif",
        code: "void Update()\n{\n    switch(state)\n    {\n        case Idle:\n            LookForPlayer();\n            break;\n\n        case Chase:\n            MoveTowardPlayer();\n            break;\n\n        case Attack:\n            TryShoot();\n            break;\n    }\n}"
    },
    {
        subtitle: "Lock and Key",
        description: "Hit-detection via raycasts met instant feedback - veel sneller en accurater dan physics-based projectiles. De raycast spawned een hit effect op het impact point en gebruikt layer masks om te bepalen wat geraakt kan worden. Elk schot krijgt een tracer effect die de bullet path visualiseert.",
        image: "https://placehold.co/600x400?text=Projectile",
        code: "void Shoot()\n{\n    Ray ray = new Ray(transform.position, transform.forward);\n\n    if (Physics.Raycast(ray, out var hit, 50f))\n    {\n        Debug.Log($\"Hit {hit.collider.name}\");\n    }\n}"
    },
    {
        subtitle: "Pickup systeem",
        description: "Een finite state machine voor vijanden die dynamisch schakelt tussen Idle → Chase → Attack → Retreat states. In Chase gebruiken enemies navmesh pathfinding, in Attack positioneren ze zich tactisch, en in Retreat trekken ze zich terug naar cover bij lage health. Verschillende enemy types hebben eigen parameters voor aggression range en attack patterns.",
        gif: "/assets/piracy/pickup.gif",
        code: "void Update()\n{\n    switch(state)\n    {\n        case Idle:\n            LookForPlayer();\n            break;\n\n        case Chase:\n            MoveTowardPlayer();\n            break;\n\n        case Attack:\n            TryShoot();\n            break;\n    }\n}"
    }
  ],
  git: "https://github.com/fvugt/asteroids-3d",
  itch: "https://avocadosauce.itch.io/piracy-its-a-crime"
};
