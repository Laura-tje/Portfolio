export const Tamagotchi = {
  id: "Tamagotchi",
  thumbnail: "assets/tamagotchi/thumbnail.png",
  gif: "assets/tamagotchi/bubbles.gif",
  gameUrl: "https://laura-tje.github.io/Tamagotchi/",
  screenshots: [],
  tags: [
    "JavaScript",
    "P5.js",
    "Game Preview"
  ],
  git: "https://github.com/Laura-tje/Tamagotchi",

  nl: {
    title: "Tamagotchi",
    tagline: "tamagotchi",
    description: `Dit is een tamagotchi gemaakt met p5.js. Ik leerde hier net 8 weken programmeren 
                en `,
    projectRole: "Developer",
    timeline: "2 weken",
    mechanics: [
      {
        subtitle: "Bubbles",
        description: `Een finite state machine voor vijanden die dynamisch schakelt.`,
        gif: "assets/tamagotchi/bubbles.gif",
        code: `function drawFrog()
{
  ...
  if (currentlyDragging == cleanIcon.name) 
  { 
    // If mouse in tamagotchi area
    if (mouseX > (tamagotchi.x + (tamagotchi.size * 0.25)) && 
        mouseX < (tamagotchi.x + (tamagotchi.size * 0.75)) && 
        mouseY > (tamagotchi.y + (tamagotchi.size * 0.25)) && 
        mouseY < (tamagotchi.y + (tamagotchi.size * 0.75))) 
    {
      isNowCleaning();
      eyesClosed();    
      bubbles.time += deltaTime / 1000;
      if (bubbles.time >= 0.1) {
        bubbles.x.push(mouseX);
        bubbles.y.push(mouseY);
        bubbles.size.push(random(10, 40))
        bubbles.time = 0;
      }
    }
  }
  ...
}

function cleaningLook() 
{
  for (let i = 0; i < bubbles.x.length; i += 1) 
  {
    fill(173, 216, 230, 150);
    stroke(0, 150);
    circle(bubbles.x[i], bubbles.y[i], bubbles.size[i]);   
  }
}`,
      },
      {
        subtitle: "Tong",
        description: `Een tongue mechanic waarbij de speler een tongue uitsteekt om vijanden te vangen.`,
        gif:`assets/tamagotchi/tongue.gif`,
        code:`function tongueFollow(whatIsFed) 
{
    strokeWeight(5);
    stroke(234, 150, 230); //pink
    line(tamagotchi.x + 200, tamagotchi.y + 186, mouseX, mouseY);
    stroke(93, 51, 48); //brown

    if(feedingIsSet == false) {
      setTimeout(whatIsFed, 100);
      feedingIsSet = true;
    }
}`
      },
      {
        subtitle: "Naam",
        description: `description`,
        gif: `assets/tamagotchi/name.gif`,
        code:` code`,
      }
    ]
  },

  en: {
    title: "Tamagotchi",
    tagline: "VOEG ENGELSE TAGLINE IN",
    description: "VOEG ENGELSE BESCHRIJVING IN",
    projectRole: "Developer",
    timeline: "2 weeks",
    mechanics: [
      {
        subtitle: "Bubbles",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        gif: "assets/tamagotchi/bubbles.gif",
        code: `function drawFrog()
{
  ...
  if (currentlyDragging == cleanIcon.name) 
  { 
    // If mouse in tamagotchi area
    if (mouseX > (tamagotchi.x + (tamagotchi.size * 0.25)) && 
        mouseX < (tamagotchi.x + (tamagotchi.size * 0.75)) && 
        mouseY > (tamagotchi.y + (tamagotchi.size * 0.25)) && 
        mouseY < (tamagotchi.y + (tamagotchi.size * 0.75))) 
    {
      isNowCleaning();
      eyesClosed();    
      bubbles.time += deltaTime / 1000;
      if (bubbles.time >= 0.1) {
        bubbles.x.push(mouseX);
        bubbles.y.push(mouseY);
        bubbles.size.push(random(10, 40))
        bubbles.time = 0;
      }
    }
  }
  ...
}

function cleaningLook() 
{
  for (let i = 0; i < bubbles.x.length; i += 1) 
  {
    fill(173, 216, 230, 150);
    stroke(0, 150);
    circle(bubbles.x[i], bubbles.y[i], bubbles.size[i]);   
  }
}`,
      },
      {
        subtitle: "Tong",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        gif:`assets/tamagotchi/tongue.gif`,
        code:`function tongueFollow(whatIsFed) 
{
    strokeWeight(5);
    stroke(234, 150, 230); //pink
    line(tamagotchi.x + 200, tamagotchi.y + 186, mouseX, mouseY);
    stroke(93, 51, 48); //brown

    if(feedingIsSet == false) {
      setTimeout(whatIsFed, 100);
      feedingIsSet = true;
    }
}`,
      },
      {
        subtitle: "Naam",
        description: "VOEG ENGELSE BESCHRIJVING IN",
        gif: `assets/tamagotchi/name.gif`,
        code: ` code`,
      }
    ]
  }
};
