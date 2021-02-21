document.addEventListener('DOMContentLoaded', () => {
  const darkModeStorage = localStorage.getItem('dark-mode');
  const html = document.querySelector('html');
  const inputDarkMode = document.getElementById('input-dark-mode');

  if(darkModeStorage){
      html.setAttribute("dark", "true");
      document.querySelector('.button-mode').classList.add('button-mode-active');
  }

  inputDarkMode.addEventListener('change', () => {
      if(inputDarkMode.checked){
          html.setAttribute("dark", "true");
          localStorage.setItem("dark-mode", true);
          document.querySelector('.button-mode').classList.add('button-mode-active');
      } else {
          html.removeAttribute('dark');
          localStorage.removeItem("dark-mode");
          document.querySelector('.button-mode').classList.remove('button-mode-active');
      }
  })
})