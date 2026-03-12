const sections = document.querySelectorAll("section");
const navLinks = document.querySelector(".nav-group").querySelectorAll("a");

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        // First remove active from any other link
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add active to the clicked link
        this.classList.add('active');
    });
});
