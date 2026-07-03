document.addEventListener('DOMContentLoaded', function () {
  var toggles = document.querySelectorAll('.dropdown-toggle');
  var navToggle = document.querySelector('.nav-toggle');
  var siteNav = document.getElementById('site-navigation');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      siteNav.classList.toggle('is-open');
    });
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (event) {
      event.preventDefault();
      var isOpen = this.getAttribute('aria-expanded') === 'true';
      var targetId = this.getAttribute('data-dropdown-toggle');
      var targetMenu = document.getElementById('dropdown-' + targetId);

      toggles.forEach(function (otherToggle) {
        otherToggle.setAttribute('aria-expanded', 'false');
        var otherId = otherToggle.getAttribute('data-dropdown-toggle');
        var otherMenu = document.getElementById('dropdown-' + otherId);
        if (otherMenu) {
          otherMenu.classList.remove('is-open');
        }
      });

      if (!isOpen && targetMenu) {
        this.setAttribute('aria-expanded', 'true');
        targetMenu.classList.add('is-open');
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.nav-item')) {
      toggles.forEach(function (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        var id = toggle.getAttribute('data-dropdown-toggle');
        var menu = document.getElementById('dropdown-' + id);
        if (menu) {
          menu.classList.remove('is-open');
        }
      });
    }
  });
});
