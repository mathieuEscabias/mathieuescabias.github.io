// for animating progress bars when they come into view

export function animateProgressBars() {
  const bars = document.querySelectorAll<HTMLElement>(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const bar = entry.target as HTMLElement;
        const value = bar.getAttribute("data-value");

        if (entry.isIntersecting) {
          // Si visible, on anime
          if (value) {
            bar.style.transition = "width 1.5s ease";
            bar.style.width = `${value}%`;
          }
        } else {
          // Si pas visible, on réinitialise
          bar.style.transition = "none"; 
          bar.style.width = "0%";
        }
      });
    },
    {
      threshold: 0.6,
    }
  );

  bars.forEach((bar) => {
    bar.style.width = "0%";
    observer.observe(bar);
  });
}


