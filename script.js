// Java Challenge Logic
const codeInput = document.getElementById('codeInput');
const runCodeButton = document.getElementById('runCodeButton');
const outputConsole = document.getElementById('outputConsole');
const hintButton = document.getElementById('hintButton');
const codeHint = document.getElementById('codeHint');
const codeChallenge = document.getElementById('codeChallenge');
const mainContent = document.getElementById('mainContent');

hintButton.addEventListener('click', function() {
    if (codeHint.style.display === 'block') {
        codeHint.style.display = 'none';
        hintButton.textContent = 'Show Hint';
    } else {
        codeHint.style.display = 'block';
        hintButton.textContent = 'Hide Hint';
    }
});

runCodeButton.addEventListener('click', function() {
    const code = codeInput.value.trim();
    
    // Basic validation
    if (code === '') {
        outputConsole.innerText = 'Error: Please write some code first!';
        outputConsole.style.color = '#ff6b6b';
        return;
    }
    
    // Check if code contains return statement
    if (!code.includes('return')) {
        outputConsole.innerText = 'Error: Your method must return a value!';
        outputConsole.style.color = '#ff6b6b';
        return;
    }
    
    // Check if code contains required words
    const lowerCode = code.toLowerCase();
    const requiredWords = ['celebrate', 'women', 'day'];
    const missingWords = requiredWords.filter(word => !lowerCode.includes(word));
    
    if (missingWords.length > 0) {
        outputConsole.innerText = `Error: Your message should include these words: ${missingWords.join(', ')}`;
        outputConsole.style.color = '#ff6b6b';
        return;
    }
    
    // Success!
    outputConsole.innerText = 'Compilation successful! Your message is perfect. Redirecting to celebration...';
    outputConsole.style.color = '#6bff6b';
    
    // Show celebration page after a short delay
    setTimeout(() => {
        codeChallenge.style.display = 'none';
        mainContent.style.display = 'block';
        createPetals(30); // Create a burst of petals
    }, 2000);
});

// Main content JavaScript
function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    
    // Randomize petal properties
    const size = Math.random() * 10 + 10;
    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 5;
    const hue = Math.random() * 40 + 330; // Pink/purple hues
    
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.left = `${left}vw`;
    petal.style.animationDuration = `${duration}s`;
    petal.style.backgroundColor = `hsl(${hue}, 80%, 80%)`;
    
    document.body.appendChild(petal);
    
    // Remove petal after animation completes
    setTimeout(() => {
        petal.remove();
    }, duration * 1000);
}

// Create multiple petals at once
function createPetals(count) {
    for (let i = 0; i < count; i++) {
        setTimeout(createPetal, i * 100);
    }
}

// Music Control
const bgMusic = document.getElementById('bgMusic');
const playPauseBtn = document.getElementById('playPauseBtn');
let isPlaying = false;

playPauseBtn.addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
        playPauseBtn.textContent = '▶️';
    } else {
        bgMusic.play().catch(error => {
            console.log('Audio playback was prevented:', error);
        });
        playPauseBtn.textContent = '⏸️';
    }
    isPlaying = !isPlaying;
});

// Create petals at interval once main content is visible
const petalInterval = setInterval(() => {
    if (mainContent.style.display !== 'none') {
        createPetal();
    }
}, 300);

// Toji Fushiguro Easter Egg
const toji = document.getElementById('toji');

// Replace with proper Toji image when clicked
toji.addEventListener('click', function() {
    this.style.backgroundImage = 'url(/api/placeholder/150/150)';
    this.style.width = '200px';
    this.style.height = '200px';
    this.style.opacity = '1';
    this.style.bottom = '20px';
    this.style.right = '20px';
    
    // Create a speech bubble
    const bubble = document.createElement('div');
    bubble.style.position = 'absolute';
    bubble.style.bottom = '200px';
    bubble.style.right = '50px';
    bubble.style.backgroundColor = 'white';
    bubble.style.padding = '10px';
    bubble.style.borderRadius = '10px';
    bubble.style.maxWidth = '200px';
    bubble.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    bubble.innerHTML = "Even the strongest sorcerer respects the power of women.";
    document.body.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
        this.style.opacity = '0.1';
        this.style.bottom = '-50px';
        this.style.right = '-50px';
        setTimeout(() => {
            this.style.backgroundImage = 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="%23333"/><circle cx="35" cy="40" r="5" fill="white"/><circle cx="65" cy="40" r="5" fill="white"/><path d="M 40 60 Q 50 70 60 60" stroke="white" fill="none" stroke-width="2"/></svg>\')';
        }, 500);
    }, 3000);
});

// Show Easter Egg hint occasionally once main content is visible
setTimeout(() => {
    if (mainContent.style.display !== 'none') {
        toji.style.opacity = '0.2';
        toji.style.bottom = '0px';
        toji.style.right = '0px';
        
        setTimeout(() => {
            toji.style.opacity = '0';
            toji.style.bottom = '-150px';
            toji.style.right = '-100px';
        }, 3000);
    }
}, 15000);

// Responsive fixes
window.addEventListener('resize', function() {
    const container = document.querySelector('.container');
    if (container) {
        container.style.minHeight = window.innerHeight + 'px';
    }
});

// Initial call
window.dispatchEvent(new Event('resize'));