document.addEventListener("DOMContentLoaded", () => {
    
    const cursor = document.getElementById('holographic-cursor');
    const links = document.querySelectorAll('a');

    // --- Holographic Cursor Follow ---
    document.addEventListener('mousemove', (e) => {
        // Update cursor position
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // --- Cursor Link Interaction ---
    links.forEach(link => {
        // Add hover class when mouse enters a link
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('hover-link');
        });
        
        // Remove hover class when mouse leaves a link
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-link');
        });
    });

});