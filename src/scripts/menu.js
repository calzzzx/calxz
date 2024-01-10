document.addEventListener('astro:page-load', () => {
    document.querySelector('#nav-btn').addEventListener('click', () => {
      document.querySelector('#nav').classList.toggle('expanded');
    });
  });