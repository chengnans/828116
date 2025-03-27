document.addEventListener('DOMContentLoaded', function() {
    const startDate = '2024.08.27';
    const endDate = '2025.03.22';
    const totalDays = 208;

    document.querySelector('section').innerHTML = `
        <p>From: ${startDate}</p>
        <p>To: ${endDate}</p>
    `;

    document.querySelector('footer').innerHTML = `
        <p>Total: ${totalDays} days</p>
    `;
});
