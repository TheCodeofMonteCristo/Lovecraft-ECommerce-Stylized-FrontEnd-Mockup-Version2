// Basic interactivity (you can expand on this later)
document.querySelectorAll('.product').forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.style.transform = 'scale(1.05)';  // Slight zoom effect
        product.style.transition = 'transform 0.3s ease';
    });

    product.addEventListener('mouseleave', () => {
        product.style.transform = 'scale(1)';
    });
});
