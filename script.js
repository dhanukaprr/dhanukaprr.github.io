document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

// Add hover effect to social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-5px)';
    });
    
    icon.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0)';
    });
}); 