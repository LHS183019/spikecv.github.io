// Dynamically load navbar
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;

    // Set active state
    const currentPath = window.location.pathname;
    document.querySelectorAll('.navbar-nav a').forEach(link => {
      if (link.getAttribute('href') === currentPath || currentPath.endsWith(link.getAttribute('href'))) {
        link.parentElement.classList.add('active');
      } else {
        link.parentElement.classList.remove('active');
      }
    });

    // Update language switcher links
    const langSwitcher = document.querySelector('.navbar-nav a.language-switch');
    if (langSwitcher) {
      const isEnglish = currentPath.startsWith('/zh/');
      const newPath = isEnglish ? currentPath.replace('/zh/', '/') : `/zh${currentPath}`;
      langSwitcher.setAttribute('href', newPath);
    }
  });

// Dynamically load footer
fetch('footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });