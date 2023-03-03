const menuItems = document.querySelectorAll('li.has-submenu');

Array.prototype.forEach.call(menuItems, function(element) {

  // Handle Button click event.
  element.querySelector('button').addEventListener('click',  (event) => {
    if (element.className == 'has-submenu') {
      element.classList.add('open');
      element.querySelector('a').setAttribute('aria-expanded', 'true');
      element.querySelector('button').setAttribute('aria-expanded', 'true');
    } else {
      element.classList.remove('open');
      element.querySelector('a').setAttribute('aria-expanded', 'false');
      element.querySelector('button').setAttribute('aria-expanded', 'false');
    }
    event.preventDefault();
  });

  // Handle mouse leave event.
  element.addEventListener('mouseleave', (event) => {
    if (element.classList.contains('open')) {
      element.classList.remove('open');
    }
  });

  // Handle mouse enter event.
  element.addEventListener('mouseenter', (event) => {
    if (element.classList.contains('open') === false) {
      element.classList.add('open');
    }
  });
});