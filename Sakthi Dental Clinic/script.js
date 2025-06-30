function toggleFaqs() {
    const moreFaqs = document.getElementById("more-faqs");
    const btn = document.getElementById("toggle-faq-btn");
  
    if (moreFaqs.style.display === "none" || moreFaqs.style.display === "") {
      moreFaqs.style.display = "block";
      btn.textContent = "Show Less FAQs";
    } else {
      moreFaqs.style.display = "none";
      btn.textContent = "Show More FAQs";
    }
  }



const testimonials = document.querySelectorAll('.testimonial-box');
let currentIndex = 0;

setInterval(() => {
testimonials[currentIndex].classList.remove('active');
currentIndex = (currentIndex + 1) % testimonials.length;
testimonials[currentIndex].classList.add('active');
}, 15000);

/*Form Validation*/
document.getElementById('contactFormDark').addEventListener('submit', function(e) {
  const email = this.email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    e.preventDefault();
  }
});
function toggleMenu() {
  const navList = document.querySelector('nav ul');
  const menuIcon = document.getElementById('menu-icon');
  
  navList.classList.toggle('active');
  
  if (navList.classList.contains('active')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times'); // Show close icon
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars'); // Show hamburger icon
  }
}


  