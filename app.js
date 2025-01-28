// Initialize Particles.js
document.addEventListener('DOMContentLoaded', () => {
    var particles = Particles.init({
        selector: '.background', // Target the container
        color: '#FF0000',        // Set particle color
        connectParticles: true,  // Connect lines between particles
        maxParticles: 100        // Limit the number of particles
    });

    console.log('Particles.js initialized successfully!');
});