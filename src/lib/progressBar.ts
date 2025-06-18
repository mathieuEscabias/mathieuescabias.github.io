// for animating progress bars when they come into view

export function animateProgressBars() {
  const bars = document.querySelectorAll<HTMLElement>(".progress-bar");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target as HTMLElement;
        const value = bar.getAttribute("data-value");
        if (value) {
          bar.style.width = `${value}%`;
          observer.unobserve(bar);
        }
      }
    });
  }, {
    threshold: 0.6
  });

  bars.forEach((bar) => {
    observer.observe(bar);
  });
}