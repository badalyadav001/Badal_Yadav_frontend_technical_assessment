// Smooth Scroll for Explore button
document.querySelector('.btn-primary').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#features').scrollIntoView({
        behavior: 'smooth',
    });
});
