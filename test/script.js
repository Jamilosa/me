document.addEventListener('DOMContentLoaded', () => {
    const sectionTitles = document.querySelectorAll('.section-title');
  
    sectionTitles.forEach((title) => {
      const observer = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.contentRect.height > window.innerHeight) {
            title.style.position = 'static'; // Disable sticky if too tall
          } else {
            title.style.position = 'sticky';
          }
        });
      });
  
      observer.observe(title);
    });
  });
  