// Partículas flotantes CONTINUAS (¡TU CÓDIGO PERFECTO!)
function createParticle() {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
            }
        }, 5000);
    }
}

// Contador animado con reinicio automático
let count = 0;
let counterInterval = null;

function animateCounter() {
    // ✅ VERIFICAR que existe el elemento
    const counter = document.getElementById('counter');
    if (!counter) {
        console.log('❌ Counter no encontrado');
        return;
    }
    
    const target = Math.floor(Math.random() * 100) + 50;
    count = 0; // ✅ RESET COMPLETO
    
    counterInterval = setInterval(() => {
        count++;
        counter.textContent = count;
        
        if (count >= target) {
            clearInterval(counterInterval);
            console.log('✅ Contador terminado:', target);
            // Reiniciar en 3 segundos
            setTimeout(animateCounter, 3000);
        }
    }, 30); // Más rápido = más suave
}

// Volver al inicio
function goHome() {
    alert("¡Redirigiendo al inicio! 🚀");
    window.location.href = "/"; 
}

// Efectos hover
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ DOM cargado');
    
    // ✅ ESPERAR que todo esté listo
    const errorCard = document.querySelector('.error-card');
    const counter = document.getElementById('counter');
    
    if (!errorCard) {
        console.error('❌ Error card no encontrada');
        return;
    }
    
    if (!counter) {
        console.error('❌ Counter no encontrado');
        return;
    }
    
    // Partículas
    createParticle();
    setInterval(createParticle, 800);
    
    // Contador
    animateCounter();
    
    // Hover tarjeta
    errorCard.addEventListener('mousemove', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.background = `radial-gradient(200px circle at ${x}px ${y}px, rgba(255,255,255,0.3), rgba(255,255,255,0.1))`;
    });
    
    errorCard.addEventListener('mouseleave', () => {
        errorCard.style.background = 'rgba(255, 255, 255, 0.1)';
    });
    
    
    console.log('✅ Todo inicializado correctamente');
});