const canvas = document.getElementById('wheel');
const ctx = canvas.getContext('2d');
const segments = ['TON', 'USDT', 'DOGS', 'NOT', 'CAT', 'HMSTR', '+', 'MAJOR', 'REDO', 'BBQ'];
const colors = ['#f4c542', '#e74c3c', '#9b59b6', '#3498db', '#1abc9c', '#e67e22', '#34495e', '#2ecc71', '#d35400', '#8e44ad'];

function drawWheel() {
    const arc = Math.PI * 2 / segments.length;
    for (let i = 0; i < segments.length; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.moveTo(150, 150);
        ctx.arc(150, 150, 140, arc * i, arc * (i + 1));
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = '14px Arial';
        ctx.fillText(segments[i], 150 + 100 * Math.cos(arc * (i + 0.5)),
            150 + 100 * Math.sin(arc * (i + 0.5)));
    }
}

drawWheel();

function spinWheel() {
    alert("Колесо крутится! (анимация будет позже)");
}
