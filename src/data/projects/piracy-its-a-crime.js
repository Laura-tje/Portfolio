export const PiracyItsACrime = {
  id: "Piracy its a crime",
  thumbnail: "assets/piracy/thumbnail.png",
  gif: "assets/piracy/trailer.gif",
  youtube: "https://www.youtube.com/embed/OGp_lGlqNQY",
  screenshots: [
    //"assets/piracy/thumbnail.png"
  ],
  tags: [
    "Unity",
    "Virtual Reality",
    "Team Project",
    "C#",
    "Oculus Quest",
    "3D",
  ],
  git: "https://github.com/Laura-tje/Piracy-Its-A-Crime",
  itch: "https://avocadosauce.itch.io/piracy-its-a-crime",
  oustanding: {
    text: "Showcased at GLUCON",
    image: "assets/piracy/medal.png"
  },

  nl: {
    title: "Piracy, it's a crime!",
    tagline: `Een VR shooter waarin je vecht tegen robotvijanden, 
            sleutels verzamelt en een boss verslaat om te ontsnappen.`,
    description: `Deze VR shooter is mijn eerste project waar ik samenwerkt met artists.`,
    projectRole: "Programmeur",
    timeline: "4 weken",
    mechanics: [
      {
        subtitle: "projectile gun",
        description: `Een raycast-gun. `,
        images: [],
        gifs: ["assets/piracy/gun.gif"],
        code: `public void Shoot()
{
    Vector3 rayOrigin = shootPoint.position;
    Vector3 rayDirection = shootPoint.forward;

    bool hitSomething = Physics.Raycast(rayOrigin, rayDirection, out RaycastHit hit, maxDistance, layerMask);

    // Instantieer raket op shootPoint met dezelfde rotatie
    GameObject _bullet = Instantiate(bulletPrefab, shootPoint.position, shootPoint.rotation);
    Bullets bulletScript = _bullet.GetComponent<Bullets>();
    Debug.Log($"bullet damage: {bulletScript.Damage}");

    Vector3 direction = shootPoint.forward.normalized;

    Rigidbody rb = _bullet.GetComponent<Rigidbody>();

    if (!rb)
    {
        rb.linearVelocity = direction * shootSpeed;
    }
    else
    {
        Debug.LogWarning("Geen Rigidbody gevonden op bulletPrefab!");
    }

    if (leftHandController.PreviousHeldObject == gun)
    {
        InputDevices.GetDeviceAtXRNode(XRNode.LeftHand).SendHapticImpulse(0, 1.0f, 0.2f);
    }
    else if (rightHandController.PreviousHeldObject == gun)
    {
        InputDevices.GetDeviceAtXRNode(XRNode.RightHand).SendHapticImpulse(0, 1.0f, 0.2f);
    }

    //Hit handling
    if (hitSomething)
    {
            GameObject gameObjectWeHit = hit.transform.gameObject;
            Debug.Log($"hit: {gameObjectWeHit.name}");

    }
}`
      },
      {
        subtitle: "Lock and Key",
        description: `Hit-detection via raycasts met instant feedback - veel sneller en accurater dan 
                    physics-based projectiles. De raycast spawned een hit effect op het impact point en 
                    gebruikt layer masks om te bepalen wat geraakt kan worden. Elk schot krijgt een tracer 
                    effect die de bullet path visualiseert.`,
        images: [],
        gifs: [],
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
        images: [],
        gifs: ["assets/piracy/pickup.gif"],
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
        images: [],
        gifs: ["assets/piracy/gun.gif"],
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
        images: [],
        gifs: [],
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
        images: [],
        gifs: ["assets/piracy/pickup.gif"],
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
