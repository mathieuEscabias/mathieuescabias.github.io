// for animating progress bars when they come into view

function animateProgressBars() {
  const bars = document.querySelectorAll<HTMLElement>(".progress-bar");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const bar = entry.target as HTMLElement;
        const value = bar.getAttribute("data-value");

        if (entry.isIntersecting) {
          if (value) {
            bar.style.transition = "width 1.5s ease";
            bar.style.width = `${value}%`;
          }
        } else {
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

// auto-execute
const run = () => animateProgressBars();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run);
} else {
  run();
}

document.addEventListener("astro:after-swap", run);
