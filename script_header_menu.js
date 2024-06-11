document.addEventListener('DOMContentLoaded', function() {
    const headerLinks = document.querySelectorAll('header nav ul li a');
    const mainContent = document.querySelector('.main-content-container .main-content');
  
    if (headerLinks) {
      headerLinks.forEach(link => {
        link.addEventListener('click', handleHeaderLinkClick);
      });
    }
  
    function handleHeaderLinkClick(event) {
      event.preventDefault();
      
      const url = event.currentTarget.getAttribute('data-url');
      if (url) {
        loadContent(url);
      }
    }
  
    function loadContent(url) {
      fetch(url)
        .then(response => response.text())
        .then(data => {
          mainContent.innerHTML = data;
        })
        .catch(error => {
          console.error('Ошибка загрузки содержимого:', error);
        });
    }
  });