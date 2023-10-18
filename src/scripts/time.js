const intervalHandler = () => {
  const date = new Date();
  document.querySelector('.sidebar-time__hours').textContent = date.getHours().toString().padStart(2, '0');
  document.querySelector('.sidebar-time__minutes').textContent = date.getMinutes().toString().padStart(2, '0');
};

intervalHandler();
setInterval(intervalHandler, 1000);
