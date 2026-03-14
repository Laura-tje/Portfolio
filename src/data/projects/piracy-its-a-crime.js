export const PiracyItsACrime = {
  id: "Piracy its a crime",
  thumbnail: "assets/piracy/thumbnail.png",
  gif: "assets/piracy/trailer.gif",
  youtube: "https://www.youtube.com/embed/OGp_lGlqNQY",
  screenshots: [
    //"assets/piracy/thumbnail.png"
  ],
  tags: [
    "Unity (C#)",
    "VR",
    "Team Project",
  ],
  git: "https://github.com/Laura-tje/Piracy-Its-A-Crime",
  itch: "https://avocadosauce.itch.io/piracy-its-a-crime",

  nl: {
    title: "Piracy, it's a crime!",
    tagline: "Een VR shooter waarin je vecht tegen robotvijanden, sleutels verzamelt en een boss verslaat om te ontsnappen.",
    description: `Deze VR shooter is mijn eerste project waar ik samenwerkt met artists.`,
    projectRole: "Programmeur",
    timeline: "4 weken",
    mechanics: [
      {
        subtitle: "Gun",
        description: `Een finite state machine voor vijanden die dynamisch schakelt tussen Idle → Chase → 
                    Attack → Retreat states. In Chase gebruiken enemies navmesh pathfinding, in Attack 
                    positioneren ze zich tactisch, en in Retreat trekken ze zich terug naar cover bij lage 
                    health. Verschillende enemy types hebben eigen parameters voor aggression range en attack 
                    patterns.`,
        gif: "assets/piracy/gun.gif",
        code: `void Update()
{
    switch(state)
    {
        case Idle:
            LookForPlayer();
            break;

        case Chase:
            MoveTowardPlayer();
            break;

        case Attack:
            TryShoot();
            break;
    }
}`
      },
      {
        subtitle: "Lock and Key",
        description: `Hit-detection via raycasts met instant feedback - veel sneller en accurater dan 
                    physics-based projectiles. De raycast spawned een hit effect op het impact point en 
                    gebruikt layer masks om te bepalen wat geraakt kan worden. Elk schot krijgt een tracer 
                    effect die de bullet path visualiseert.`,
        code: `void Shoot()
{
    Ray ray = new Ray(transform.position, transform.forward);

    if (Physics.Raycast(ray, out var hit, 50f))
    {
        Debug.Log($"Hit {hit.collider.name}");
    }
}`
      },
      {
        subtitle: "Pickup systeem",
        description: `Een finite state machine voor vijanden die dynamisch schakelt tussen Idle → Chase → 
                    Attack → Retreat states. In Chase gebruiken enemies navmesh pathfinding, in Attack 
                    positioneren ze zich tactisch, en in Retreat trekken ze zich terug naar cover bij lage 
                    health. Verschillende enemy types hebben eigen parameters voor aggression range en attack 
                    patterns.`,
        gif: "assets/piracy/pickup.gif",
        code: `void Update()
{
    switch(state)
    {
        case Idle:
            LookForPlayer();
            break;

        case Chase:
            MoveTowardPlayer();
            break;

        case Attack:
            TryShoot();
            break;
    }
}`
      }
    ]
  },

  en: {
    title: "Piracy, it's a crime!",
    tagline: "In this game you play as a space pirate who wants the treasure of some cute robots.",
    description: "VOEG ENGELSE BESCHRIJVING IN",
    projectRole: "Developer",
    timeline: "4 weeks",
    mechanics: [
      {
        subtitle: "Gun",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        gif: "assets/piracy/gun.gif",
        code: `void Update()
{
    switch(state)
    {
        case Idle:
            LookForPlayer();
            break;

        case Chase:
            MoveTowardPlayer();
            break;

        case Attack:
            TryShoot();
            break;
    }
}`
      },
      {
        subtitle: "Lock and Key",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        code: `void Shoot()
{
    Ray ray = new Ray(transform.position, transform.forward);

    if (Physics.Raycast(ray, out var hit, 50f))
    {
        Debug.Log($"Hit {hit.collider.name}");
    }
}`
      },
      {
        subtitle: "Pickup systeem",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        gif: "assets/piracy/pickup.gif",
        code: `void Update()
{
    switch(state)
    {
        case Idle:
            LookForPlayer();
            break;

        case Chase:
            MoveTowardPlayer();
            break;

        case Attack:
            TryShoot();
            break;
    }
}`
      }
    ]
  }
};
