document.addEventListener("DOMContentLoaded", function() {
  
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu) {
    mobileMenu.addEventListener("click", function() {
      document.querySelector(".nav-list").classList.toggle("active");
    });
  }
  
  const welcomeScreen = document.getElementById("welcomeScreen");
  const mainContent = document.getElementById("mainContent");
  const welcomeBtn = document.getElementById("welcomeBtn");
  const closeWelcomeBtn = document.getElementById("closeWelcomeBtn");
  const backToTop = document.getElementById("backToTop");
  
  // فتح شاشة الترحيب
  if (welcomeBtn) {
    welcomeBtn.addEventListener("click", function() {
      welcomeScreen.style.display = "block";
      setTimeout(() => {
        welcomeScreen.classList.add("active");
      }, 10);
      mainContent.style.display = "none";
    });
  }
  
  // غلق شاشة الترحيب
  if (closeWelcomeBtn) {
    closeWelcomeBtn.addEventListener("click", function() {
      welcomeScreen.classList.remove("active");
      setTimeout(function() {
        welcomeScreen.style.display = "none";
        mainContent.style.display = "block";
      }, 500);
    });
  }
  
  // زر العودة للأعلى
  if (backToTop) {
    backToTop.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  
});
