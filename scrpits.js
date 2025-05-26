function formatNumber(number) {
    return number.toString().padStart(2, '0');
}

function updateCounter() {
    try {
        const targetDate = new Date('2025-06-20T00:00:00Z');
        const now = new Date();
        const timeRemaining = targetDate - now;

        if (timeRemaining < 0) {
            document.getElementById('counter').innerText = 'As férias já começaram!';
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
        const milliseconds = Math.floor(timeRemaining % 1000);

        const counterElement = document.getElementById('counter');
        if (counterElement) {
            counterElement.innerHTML = `
                <div class="time-block">
                    <span class="number">${formatNumber(days)}</span>
                    <span class="label">Dias</span>
                </div>
                <div class="time-block">
                    <span class="number">${formatNumber(hours)}</span>
                    <span class="label">Horas</span>
                </div>
                <div class="time-block">
                    <span class="number">${formatNumber(minutes)}</span>
                    <span class="label">Minutos</span>
                </div>
                <div class="time-block">
                    <span class="number">${formatNumber(seconds)}</span>
                    <span class="label">Segundos</span>
                </div>
                <div class="time-block">
                    <span class="number">${formatNumber(milliseconds)}</span>
                    <span class="label">Milissegundos</span>
                </div>
            `;
        }
    } catch (error) {
        console.error('Erro ao atualizar o contador:', error);
    }

    requestAnimationFrame(updateCounter);
}

// Iniciar o contador quando a página carregar
document.addEventListener('DOMContentLoaded', updateCounter);
