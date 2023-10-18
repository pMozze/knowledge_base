let preferences = window.localStorage.getItem('preferences');
preferences !== null && (preferences = JSON.parse(preferences));

const sidebar = document.querySelector('.sidebar');
const button = document.querySelector('.sidebar-header__menu-button');

button.addEventListener('click', () => {
  const sidebarState = sidebar.classList.toggle('sidebar_collapsed');

  if (window.innerWidth > 1279) {
    window.localStorage.setItem('preferences', JSON.stringify({ sidebar: sidebarState }));
  }
});

if (window.innerWidth > 1279) {
  if (typeof preferences?.['sidebar'] === 'boolean') {
    sidebar.classList.toggle('sidebar_collapsed', preferences['sidebar']);
  }
} else {
  sidebar.classList.toggle('sidebar_collapsed', true);
}
