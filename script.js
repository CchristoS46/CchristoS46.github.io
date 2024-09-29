// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Αποτροπή της προεπιλεγμένης συμπεριφοράς φόρμας
    alert('Ευχαριστούμε για την επικοινωνία σας!');
    this.reset(); // Επαναφορά της φόρμας
});
