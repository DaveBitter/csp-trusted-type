const elements = {
  navigationLinks: [...document.querySelectorAll('[data-navigation-link]')]
};

elements.navigationLinks.forEach(navigationLink => {
  navigationLink.dataset.isActive = `${navigationLink.href ===
    window.location.href}`;
});
