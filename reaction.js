// on study


const reveals = document.querySelectorAll(".reveal");
if (reveals){
  const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

reveals.forEach((reveal) => {
  observer.observe(reveal);
});

}


// on study end