    const roles = [
      "Full Stack Developer",
      "React Developer",
      "UI / UX Designer",
      "Prompt Engineer",
      "AI Developer"
    ];

    const typingElement = document.getElementById("typing");
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex--);
      } else {
        typingElement.textContent = currentRole.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => isDeleting = true, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }

      const delay = isDeleting ? 50 : 100;
      setTimeout(typeEffect, delay);
    }

  document.addEventListener("DOMContentLoaded", typeEffect);

 function showModal(id) {
  document.getElementById(`${id}-modal`).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(`${id}-modal`).style.display = "none";
}
function closeModal(id) {
  const modal = document.getElementById(`${id}-modal`);
  modal.style.display = "none";

  // Stop video when modal closes
  const video = modal.querySelector("video");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
}
 
