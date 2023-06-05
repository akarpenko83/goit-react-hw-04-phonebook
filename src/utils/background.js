import Particles from 'particlesjs';

function background() {
    Particles.init({
        selector: '.background',
        sizeVariations: 4,
        connectParticles: true,
        minDistance: 200,
        color: '#808080',
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 100,
                    color: '#D3D3D3',
                    minDistance: 70,
                    connectParticles: true,
                },
            },
            {
                breakpoint: 425,
                options: {
                    maxParticles: 100,
                    connectParticles: true,
                },
            },
            {
                breakpoint: 320,
                options: {
                    maxParticles: 0,
                },
            },
        ],
    });
}
export default background;
