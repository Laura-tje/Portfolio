// 🌈✨ EXTREME SENSORY OVERLOAD ✨🌈
// This file creates auditory chaos and visual particle explosions

const sounds = {
  beep: () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.frequency.value = Math.random() * 2000 + 200;
    oscillator.type = 'sine';
    
    gain.gain.setValueAtTime(0.3, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  },

  boop: () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.frequency.setValueAtTime(1000, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.3);
    oscillator.type = 'triangle';
    
    gain.gain.setValueAtTime(0.2, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
  },

  honk: () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.frequency.value = 800;
    oscillator.type = 'square';
    
    gain.gain.setValueAtTime(0.25, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  },

  zap: () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.frequency.setValueAtTime(2000, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(500, audioContext.currentTime + 0.2);
    oscillator.type = 'sawtooth';
    
    gain.gain.setValueAtTime(0.15, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  },

  laserWhoosh: () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.frequency.setValueAtTime(3000, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.4);
    oscillator.type = 'triangle';
    
    gain.gain.setValueAtTime(0.2, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.4);
  }
};

const particles = [
  '✨', '⭐', '🌈', '🎉', '💫', '🎊', '🔥', '⚡', 
  '💥', '🌟', '✨', '🎆', '🎇', '🌠', '🪐', '☄️'
];

export function createParticles(x, y, count = 20) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    const emoji = particles[Math.floor(Math.random() * particles.length)];
    
    particle.textContent = emoji;
    particle.style.position = 'fixed';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';
    particle.style.fontSize = (Math.random() * 20 + 10) + 'px';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '10000';
    particle.style.fontWeight = 'bold';
    particle.style.textShadow = `
      0 0 5px #FF006E,
      0 0 10px #3A86FF,
      0 0 15px #00FF00
    `;
    
    const duration = Math.random() * 2 + 1;
    const angle = (Math.PI * 2 * i) / count;
    const velocity = Math.random() * 5 + 3;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity - 2;
    
    let px = x;
    let py = y;
    let startTime = Date.now();
    
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      const progress = elapsed / duration;
      
      if (progress >= 1) {
        particle.remove();
        return;
      }
      
      px += vx;
      py += vy;
      const scale = 1 - progress;
      const opacity = 1 - progress;
      
      particle.style.transform = `translate(${px}px, ${py}px) scale(${scale})`;
      particle.style.opacity = opacity;
      
      requestAnimationFrame(animate);
    };
    
    document.body.appendChild(particle);
    animate();
  }
}

export function playCrazySound() {
  const soundFunctions = [
    sounds.beep,
    sounds.boop,
    sounds.honk,
    sounds.zap,
    sounds.laserWhoosh,
    () => { sounds.beep(); sounds.boop(); },
    () => { sounds.honk(); sounds.beep(); },
    () => { sounds.zap(); sounds.laserWhoosh(); },
    () => { sounds.beep(); sounds.zap(); sounds.boop(); }
  ];
  
  const randomSound = soundFunctions[Math.floor(Math.random() * soundFunctions.length)];
  try {
    randomSound();
  } catch (e) {
    console.log('Sound playback failed (might be blocked by browser)');
  }
}

export function activateChaosCycle() {
  // Play random sounds CONSTANTLY
  setInterval(() => {
    if (Math.random() > 0.5) {
      playCrazySound();
    }
  }, 200);
  
  // Create random particles across the screen AGGRESSIVELY
  setInterval(() => {
    if (Math.random() > 0.4) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      createParticles(x, y, Math.random() * 20 + 10);
    }
  }, 300);
  
  // Screen shake CONSTANTLY
  setInterval(() => {
    if (Math.random() > 0.6) {
      const shakeDuration = 150;
      const shakeAmount = 8;
      const startTime = Date.now();
      
      const shake = () => {
        const elapsed = Date.now() - startTime;
        if (elapsed < shakeDuration) {
          const x = (Math.random() - 0.5) * shakeAmount;
          const y = (Math.random() - 0.5) * shakeAmount;
          document.body.style.transform = `translate(${x}px, ${y}px) rotate(${(Math.random() - 0.5) * 1}deg)`;
          requestAnimationFrame(shake);
        } else {
          document.body.style.transform = 'translate(0, 0) rotate(0deg)';
        }
      };
      
      shake();
    }
  }, 500);

  // Color flash chaos!
  setInterval(() => {
    const colors = ['#FF006E', '#FB5607', '#FFBE0B', '#3A86FF', '#FF10F0', '#00FF00', '#00FFFF'];
    document.body.style.borderRadius = (Math.random() * 30) + 'px';
    if (Math.random() > 0.7) {
      document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }
  }, 800);
}

// Make sounds and particles trigger on click/interaction
export function addInteractionEffects() {
  document.addEventListener('click', (e) => {
    // MEGA EXPLOSION ON CLICK!
    playCrazySound();
    playCrazySound();
    createParticles(e.clientX, e.clientY, 50);
    
    // Screen shake on click
    const shakeDuration = 300;
    const shakeAmount = 10;
    const startTime = Date.now();
    
    const shake = () => {
      const elapsed = Date.now() - startTime;
      if (elapsed < shakeDuration) {
        const x = (Math.random() - 0.5) * shakeAmount;
        const y = (Math.random() - 0.5) * shakeAmount;
        document.body.style.transform = `translate(${x}px, ${y}px) scale(${1 + Math.sin(elapsed / 100) * 0.05})`;
        requestAnimationFrame(shake);
      } else {
        document.body.style.transform = 'translate(0, 0) scale(1)';
      }
    };
    
    shake();
  });

  document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.92) {
      playCrazySound();
    }
    if (Math.random() > 0.95) {
      createParticles(e.clientX, e.clientY, 5);
    }
  });

  // Beep constantly!
  setInterval(() => {
    playCrazySound();
  }, Math.random() * 1500 + 800);

  // Click every few seconds randomly
  setInterval(() => {
    if (Math.random() > 0.7) {
      const randomX = Math.random() * window.innerWidth;
      const randomY = Math.random() * window.innerHeight;
      const event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: randomX,
        clientY: randomY
      });
      document.elementFromPoint(randomX, randomY)?.dispatchEvent(event);
    }
  }, 3000);
}
