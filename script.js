document.addEventListener('DOMContentLoaded', () => {
    // Tạo hiệu ứng pháo hoa
    function createFirework() {
        const fireworkContainer = document.querySelector('.fireworks');
        
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + 'vw';
        
        const maxHeight = window.innerHeight * 0.9;
        const randomHeight = Math.random() * maxHeight;
        firework.style.setProperty('--height', -randomHeight + 'px');
        
        fireworkContainer.appendChild(firework);

        firework.addEventListener('animationend', () => {
            createExplosion(firework.offsetLeft, randomHeight);
            firework.remove();
        });
    }

    function createExplosion(left, randomHeight) {
        const numParticles = 20;
        const explosion = document.createElement('div');
        explosion.classList.add('explosion');
        explosion.style.left = left + 'px';
        explosion.style.bottom = randomHeight + 'px';
        document.body.appendChild(explosion);

        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = getRandomColor();

            const angle = Math.random() * 2 * Math.PI;
            const radius = Math.random() * 50;
            const x = Math.cos(angle) * radius + 50;
            const y = Math.sin(angle) * radius + 50;

            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;

            explosion.appendChild(particle);

            particle.addEventListener('animationend', () => {
                particle.remove();
            });
        }

        explosion.addEventListener('animationend', () => {
            explosion.remove();
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    setInterval(createFirework, 200);

    // Nhạc nền
    const music = document.getElementById('background-music');
    music.volume = 0.02;

    // Tạo hiệu ứng ngôi sao lấp lánh
    const starContainer = document.createElement('div');
    starContainer.classList.add('stars');
    document.body.appendChild(starContainer);

    function createStars() {
        const numStars = 100; // Số lượng ngôi sao
        for (let i = 0; i < numStars; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.left = Math.random() * 100 + 'vw'; // Vị trí ngang ngẫu nhiên
            star.style.top = Math.random() * 100 + 'vh'; // Vị trí dọc ngẫu nhiên
            star.style.animationDelay = Math.random() * 2 + 's'; // Thời gian bắt đầu ngẫu nhiên
            star.style.animationDuration = Math.random() * 3 + 2 + 's'; // Thời gian lấp lánh ngẫu nhiên
            starContainer.appendChild(star);
        }
    }

    createStars();
});
