document.getElementById('loveButton').addEventListener('click', function(event) {
    const heartContainer = document.getElementById('heartContainer');
    const rect = this.getBoundingClientRect();
    
    for (let i = 0; i < 5; i++) { // Create 5 hearts
      const heart = document.createElement('div');
      heart.classList.add('heart');
      
      // Randomize the start position of each heart
      const startX = rect.left + rect.width / 2 + (Math.random() - 0.5) * 50;
      const startY = rect.top + rect.height / 2 + (Math.random() - 0.5) * 50;
      
      heart.style.left = `${startX}px`;
      heart.style.top = `${startY}px`;
      
      heartContainer.appendChild(heart);
      
      // Remove heart after animation is done
      heart.addEventListener('animationend', function() {
        heartContainer.removeChild(heart);
      });
    }
  });
  