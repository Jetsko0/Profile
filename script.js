document.addEventListener("DOMContentLoaded", () => {
    const snowContainer = document.querySelector('.snow');
    const card = document.querySelector('.card');
    let snowCount = 0;

    // Tăng số lượng tuyết rơi ban đầu
    for (let i = 0; i < 650; i++) { // Tăng từ 50 lên 100
        const snowflake = document.createElement('span');
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.animationDuration = `${4 + Math.random() * 1}s`; // Giảm thời gian rơi xuống
        snowflake.style.animationDelay = `${Math.random() * 4}s`;
        snowflake.style.width = snowflake.style.height = `${Math.random() * 6 + 4}px`; // Kích thước đa dạng hơn
        snowflake.style.animationTimingFunction = 'ease-in-out';
        snowContainer.appendChild(snowflake);
    }

    // Tăng tốc độ tạo tuyết động
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${1.5 + Math.random() * 2}s`; // Rơi nhanh hơn
        snowflake.style.transform = `translateX(${Math.random() * 100}px)`;
        document.body.appendChild(snowflake);

        snowflake.addEventListener('animationend', () => {
            snowflake.remove();
            snowCount++;
            if (snowCount > 100) { // Chỉ phủ tuyết khi số lượng lớn hơn
                card.classList.add('snow-covered');
            }
        });
    }

    // Tăng số lần tạo tuyết trong mỗi giây
    setInterval(createSnowflake, 100); // Giảm từ 200ms xuống 100ms
});
