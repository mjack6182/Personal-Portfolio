// Initialize Particles.js
document.addEventListener('DOMContentLoaded', () => {
    let screenWidth = window.innerWidth;

    let particleCount = screenWidth > 768 ? 100 : 50;

    var particles = Particles.init({
        selector: '.background', // Target the container
        color: '#FF0000',        // Set particle color
        connectParticles: true,  // Connect lines between particles
        maxParticles: particleCount        // Limit the number of particles
    });

    console.log('Particles.js initialized successfully!');
});